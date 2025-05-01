import { StrongTitle } from "../../../template/Roadmaps/heroRoadmap/styled";
import { BackEndContainer, BackEndTitle,SubTitle, SectionHero, SectionLinguages } from "./styled";



export function ChallengesBackEnd(){
    return(
        <BackEndContainer>
            <SectionHero>
                <BackEndTitle>BACK-END</BackEndTitle>
                <SubTitle>Prepare-se para Superar os Desafios Mais Empolgantes e Avançar na Sua Jornada na Programação!</SubTitle>
            </SectionHero>
            <SectionLinguages>
                <BackEndTitle>Nível <StrongTitle>Básico</StrongTitle></BackEndTitle>
                
            </SectionLinguages>
        </BackEndContainer>

    )
}