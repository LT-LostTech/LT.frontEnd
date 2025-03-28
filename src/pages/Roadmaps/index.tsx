import { HeroRoadmaps } from "../../template/Roadmaps/heroRoadmap/index"
import { WaitingSection, TitleSectionWaiting, SubTitleSection, MainRoadmapsContainer, RoadmapWaitImage } from "./styled"

// import {WaitingImage} from "../../assets/Roadmaps/waiting.svg"


export function Roadmaps() {

    return(
        <MainRoadmapsContainer>
            <HeroRoadmaps/> 
        
           <WaitingSection>
                
                <TitleSectionWaiting> 
                    Estamos esperando a sua escolha... 
                </TitleSectionWaiting>

                <SubTitleSection> 
                    Isso é seu futuro, escolha com sabedoria! 
                </SubTitleSection>

            </WaitingSection>

            {/* <RoadmapWaitImage src={WaitingImage} alt="Desenho de uma pessoa sentada olhando para o relogio, relacionado ao tema desta seção"/> */}

        </MainRoadmapsContainer>
       
    )
}