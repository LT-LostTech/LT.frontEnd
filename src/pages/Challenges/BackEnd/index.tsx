import { useState } from "react";
import { Grid } from "../../../components/Grid";
import { StrongTitle } from "../../../template/Roadmaps/heroRoadmap/styled";
import { Level, LevelChallenges, Linguages } from "./data";
import {
  BackEndContainer,
  BackEndTitle,
  SubTitle,
  SectionHero,
  SectionLinguages,
  SectionNivel,
  ModalBackEnd,
  ModalChallengesTitle,
  SubTitleModal,
  Categorys,
  LanguagesTitle,
  SectionChallenges,
} from "./styled";
import { Button } from "../../../components/Button";
import { theme } from "../../../theme/theme";
import { Overlay } from "../../../utils/Overlay/styled";

export function ChallengesBackEnd() {
  const [openModal, setOpenModal] = useState(false);
  const [levelTitle, setLevelTitle] = useState<string>('básico');
  //o estado pode ser uma string ex: "JavaScript" ou null (quando nada foi selecionado ainda).
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

  // const [closeModal,setCloseModal] = useState(false)
  const handleModal = (index:number) => {
    //passo um index para cada objeto
    setSelectedLevel(Linguages[index].name)
    setOpenModal(!openModal);
  };
  return (
    <BackEndContainer>
      <SectionHero>
        <BackEndTitle>BACK-END</BackEndTitle>
        <SubTitle>
          Prepare-se para Superar os Desafios Mais Empolgantes e Avançar na Sua
          Jornada na Programação!
        </SubTitle>
      </SectionHero>
      <SectionLinguages>
        <LanguagesTitle>Linguagens de programação</LanguagesTitle>
        <Grid
          columns={3}
          gap={"32px"}
          children={Linguages.map((button) => button.name)}
          navigate={handleModal}
          childMaxWidth ={'0'}
          childType = {'last-child'}
        />
        {openModal && (
        <>
        <Overlay onClick={() => setOpenModal(false)}/>
          <ModalBackEnd>
            <ModalChallengesTitle>
              Você escolheu os desafios <StrongTitle>{selectedLevel}</StrongTitle>
            </ModalChallengesTitle>
            <SubTitleModal>
              Coloque em prática tudo que estudou até aqui!
            </SubTitleModal>
            <SubTitleModal>
              Escolha um nível de dificuldade para os desafios.
            </SubTitleModal>
            <Categorys>
              {Level.map((level) => (
                
                <Button
                  width={"263.47px"}
                  height={"57.41px"}
                  colorText={"white"}
                  bgColor={"transparent"}
                  fontWeight={"600"}
                  text={level.name}
                  border={`0.71px solid ${theme.colors.white}`}
                  hoverBg={`${theme.colors.white}`}
                  hoverColor={`${theme.colors.black}`}
                  onClick={() => setLevelTitle(level.name.toLowerCase())}
                  widthTablet ="163.63px"
                  heightTablet="35.72px"
                  widthMobile ="64.07px"
                  heightMobile="14.06px"
                  fontMobile="4.16px"
                  fontTablet="10.64px"
                />
              ))}
            </Categorys>
          </ModalBackEnd>
          </>
        )}
      </SectionLinguages>
      <SectionNivel>
        <BackEndTitle>
          Nível <StrongTitle>{levelTitle}</StrongTitle>
        </BackEndTitle>
        {/* find procura o objeto que tenha o title igual ao level title */}
        <Grid columns={3} gap={"32px"} children={
          LevelChallenges.find((levels) => levels.title?.toLowerCase() === levelTitle?.toLocaleLowerCase())?.challenges.map(challenge => challenge.name)
          
          }
          childMaxWidth ={'min-width: 1180px'}
          childType = {'last-child'}/>
      </SectionNivel>

      <SectionChallenges>
          <BackEndTitle>Título do Desafio</BackEndTitle>
          <SubTitle>Enunciado descrevendo o passo a passo de como o desafio deve ser cumprido e com os dados caso seja necessário.</SubTitle>
      </SectionChallenges>
    </BackEndContainer>
  );
}
