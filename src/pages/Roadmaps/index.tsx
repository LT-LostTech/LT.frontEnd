import { HeroRoadmaps } from "../../template/Roadmaps/heroRoadmap/index"
import { WaitingSection, TitleSectionWaiting, SubTitleSection, RoadmapWaitImage, RoadmapsContainer } from "./styled"

import WaitingImage from '../../assets/Roadmaps/waiting.svg'




export function Roadmaps() {

    return(
        <RoadmapsContainer>
            <HeroRoadmaps/> 
        
           <WaitingSection>
                
                <TitleSectionWaiting> 
                    Estamos esperando a sua escolha... 
                </TitleSectionWaiting>

                <SubTitleSection> 
                    Isso é seu futuro, escolha com sabedoria! 
                </SubTitleSection>

                <RoadmapWaitImage src={WaitingImage} alt="Desenho de uma pessoa sentada olhando para o relogio, relacionado ao tema desta seção"/>

            </WaitingSection>

        </RoadmapsContainer>
       
    )
}