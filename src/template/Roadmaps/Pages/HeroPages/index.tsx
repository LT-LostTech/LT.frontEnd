import { ImageContainer, ImageIllustration, InformationsBackEnd, InformationsContainer, SubTitleHeroPage, TitleHeroPage } from "./styled";
import BackendServer from "../../../../assets/Roadmaps/ImagePages/server-image.png"
import { useState, useEffect } from "react";
import { ListingRoadmapsApi } from "../../../../services/roadmap/listing/api";

interface Roadmap {
   id: number | null;
   category: string;
   label: string;
 
 }

export function HeroPageBackEnd() {
    const [roadmaps, setRoadmaps] = useState<Roadmap[]>([]);
    const [name, setName] = useState<string>("");  
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

  useEffect(() => {
    roadmaps.map((roadmap) => {
    if(roadmap.category.toLocaleLowerCase() === "back-end" || roadmap.category.toLocaleLowerCase() === "backend") {
      setName(roadmap.category);
    }
    
  })
  })
  return (
    <>
      <ImageContainer>
        <ImageIllustration src={BackendServer}/>
      </ImageContainer>
      
      <InformationsContainer>
            <TitleHeroPage>{name}</TitleHeroPage>
            <SubTitleHeroPage>O que é o {name}?</SubTitleHeroPage>
            <InformationsBackEnd>O {name} da sua aplicação é o motor que processa dados, gerencia usuários e mantém tudo funcionando nos bastidores. Ele garante segurança, eficiência e uma experiência fluida para quem acessa os roadmaps e desafios!</InformationsBackEnd>
      </InformationsContainer>
    </>
  );
}
