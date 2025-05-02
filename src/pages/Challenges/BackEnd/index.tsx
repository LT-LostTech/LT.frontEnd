import { useState } from "react";
import { Grid } from "../../../components/Grid";
import { StrongTitle } from "../../../template/Roadmaps/heroRoadmap/styled";
import { Level, Linguages } from "./data";
import { BackEndContainer, BackEndTitle,SubTitle, SectionHero, SectionLinguages, SectionNivel, ModalBackEnd, ModalChallengesTitle, SubTitleModal, Categorys } from "./styled";
import { Button } from "../../../components/Button";
import { theme } from "../../../theme/theme";




export function ChallengesBackEnd(){
    const [openModal,setOpenModal] = useState(false)
    // const [closeModal,setCloseModal] = useState(false)
    
    const handleModal = () => {
        setOpenModal(!openModal)
    }
    return(
        <BackEndContainer>
            <SectionHero>
                <BackEndTitle>BACK-END</BackEndTitle>
                <SubTitle>Prepare-se para Superar os Desafios Mais Empolgantes e Avançar na Sua Jornada na Programação!</SubTitle>
            </SectionHero>
            <SectionLinguages>
                <BackEndTitle>Linguagens de programação</BackEndTitle>
                <Grid columns={3} gap={"32px"} children={Linguages.map(button => button.name)} navigate={handleModal}/>

                 {openModal && (
                    <ModalBackEnd>
                        <ModalChallengesTitle>Você escolheu os desafios <StrongTitle>Java</StrongTitle></ModalChallengesTitle>
                        <SubTitleModal>Coloque em prática tudo que estudou até aqui!</SubTitleModal>
                        <SubTitleModal>Escolha um nível de dificuldade para os desafios.</SubTitleModal>
                        <Categorys>
                            {Level.map(level => <Button width={"263.47px"} height={"57.41px"} colorText={"white"} bgColor={"transparent"} fontWeight={"600"} text={level.name} border={`0.71px solid ${theme.colors.white}`} hoverBg={`${theme.colors.white}`}/>)}
                        </Categorys>
                    </ModalBackEnd>
                 )
                 }
            </SectionLinguages>
            <SectionNivel>
            <BackEndTitle>Nível <StrongTitle>Básico</StrongTitle></BackEndTitle>
            </SectionNivel>
        </BackEndContainer>

    )
}


