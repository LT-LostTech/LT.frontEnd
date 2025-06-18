import { useNavigate } from "react-router-dom";
import { Grid } from "../../components/Grid";
import { StrongTitle } from "../../template/Roadmaps/heroRoadmap/styled";
import { ChallengesContainer, ChallengesTitle, ChallengesWaitImage, SectionHero, SectionWait, SubTitleSection, TitleSectionWaiting } from "./styled";

import WaitingImage from "../../assets/Roadmaps/waiting.svg";
import { useState, useEffect } from "react";
import { ListingRoadmapsApi } from "../../services/roadmap/listing/api";

interface Roadmap {
   id: number | null;
   category: string;
   label: string;
 }

export function Challenges() {
   
    const navigate = useNavigate()

    
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
        try{
             const roadmap = roadmaps[index];
        if (!roadmap) return;
        const categoria = roadmap.category
        if (categoria) {
        navigate("/Desafios/categoria", { state: { categoria } });

        }
        }catch(error){
            console.error(error);
        }
    }

    
    
    return(
        <ChallengesContainer>
            <SectionHero>
                <ChallengesTitle>Coloque em prática o que aprendeu com nossos <StrongTitle> {'</roadmaps>'}</StrongTitle></ChallengesTitle>
                <Grid 
                columns={3} 
                gap={"32px"}
                childMediaWidth="min-width: 1080px"
                childType="nth-child(10)"
                children={roadmaps.map((roadmap) => roadmap.label)}
                navigate={handleNavigateBackend}
                />
            </SectionHero>
            <SectionWait>
                <TitleSectionWaiting>
                Estamos esperando a sua escolha...
                </TitleSectionWaiting>
                <SubTitleSection>
                Isso é seu futuro, escolha com sabedoria!
                </SubTitleSection>
                <ChallengesWaitImage
                src={WaitingImage}
                alt="Desenho de uma pessoa sentada olhando para o relogio, relacionado ao tema desta seção"
                />
            </SectionWait>
        </ChallengesContainer>
    )
}