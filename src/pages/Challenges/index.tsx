import { useNavigate } from "react-router-dom";
import { Grid } from "../../components/Grid";
import { StrongTitle } from "../../template/Roadmaps/heroRoadmap/styled";
import { buttonsChallenges } from "./data";
import { ChallengesContainer, ChallengesTitle, ChallengesWaitImage, SectionHero, SectionWait, SubTitleSection, TitleSectionWaiting } from "./styled";

import WaitingImage from "../../assets/Roadmaps/waiting.svg";

export function Challenges() {
    const navigate = useNavigate()
    return(
        <ChallengesContainer>
            <SectionHero>
                <ChallengesTitle>Coloque em prática o que aprendeu com nossos <StrongTitle> {'</roadmaps>'}</StrongTitle></ChallengesTitle>
                <Grid columns={3} gap={"32px"} children={buttonsChallenges.map((buttons) => buttons.name)} navigate={(index) => navigate(buttonsChallenges[index].path)}/>
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