import { HeroTitleRoadmaps, StrongTitle } from "./styled";
import { Grid } from "../../../components/Grid";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ListingRoadmapsApi } from "../../../services/roadmap/listing/api";


interface Roadmap {
   id: number | null;
   category: string;
 
 }

export function HeroRoadmaps() {
  const navigate = useNavigate();

  const [roadmaps, setRoadmaps] = useState<Roadmap[]>([]);

   async function fetchRoadmap() {
       try {
         const data = await ListingRoadmapsApi();
         setRoadmaps(data);
       } catch (error) {
         console.error("Error fetching roadmaps:", error);
       }
     }
     
useEffect(() => {
  fetchRoadmap()
})

  const handleNavigateBackend = () => {
    roadmaps.map((roadmap) => {
    if(roadmap.category.toLocaleLowerCase() === "back-end" || roadmap.category.toLocaleLowerCase() === "backend") {
      navigate("/roadmaps/back-end");
    }else{
      navigate("/roadmaps")
    }
    return roadmap.category;
  })
}

  return (
    <>
      <HeroTitleRoadmaps>
        Encontre o seu caminho na <StrongTitle>{"</tecnologia>"}</StrongTitle>!
      </HeroTitleRoadmaps>

      <Grid
        columns={3}
        gap={"32px"}
        navigate={handleNavigateBackend}
        
      >
        
        {roadmaps.map((roadmap) =>roadmap.category)}
        
      
      </Grid>
    </>
  );
}
