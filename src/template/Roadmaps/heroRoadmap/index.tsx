import { HeroTitleRoadmaps, StrongTitle } from "./styled";
import { Grid } from "../../../components/Grid";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ListingRoadmapsApi } from "../../../services/roadmap/listing/api";


interface Roadmap {
   id: number | null;
   category: string;
   label: string;
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

  const handleNavigateBackend = (index: number) => {
    const roadmap = roadmaps[index];
    if (!roadmap) return;
    const categoria = roadmap.category.toLowerCase();
    if (categoria === "back-end" || categoria === "backend") {
      navigate("/roadmaps/back-end");
    }
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
        childType="nth-child(10)"
        childMediaWidth="min-width: 1080px"
        
      >
        
        {roadmaps.map((roadmap) =>roadmap.label)}
        
      
      </Grid>
    </>
  );
}
