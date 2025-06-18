import { useEffect, useState } from "react";
import { Grid } from "../../../components/Grid";
import { StrongTitle } from "../../../template/Roadmaps/heroRoadmap/styled";
import { Level} from "./data";
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
import { useLocation } from "react-router-dom";
import { ListingChallengesApi } from "../../../services/challenges/listing/api";

interface Challenges {
  title: string;
  description: string;
  category: string;
  labels:string;
  difficulty: string;
}



export function ChallengesCategory() {
  
  const [openModal, setOpenModal] = useState(false);
  
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('fácil');
  //o estado pode ser uma string ex: "JavaScript" ou null (quando nada foi selecionado ainda).
  const [selectedLabel, setSelectedLabel] = useState<string | null>(null); // linguagem/ferramenta
  const [languages, setLanguages] = useState<string[]>([]);
  const [ challengesSelect, setChallengesSelect] = useState<string | undefined>("Titulo do desafio")
  const [challengesDescription, setChallengesDescription] = useState<string | undefined>("Descrição do desafio");
  const [challenges, setChallenges] = useState<Challenges[]>([]);

  const location = useLocation();
  const categoria = location.state.categoria ?? "Categoria não informada";


  const handleModal = (index:number) => {
    //passo um index para cada objeto
    setSelectedLabel(languages[index])
    setOpenModal(!openModal);
  };

   const handleChallengesSelect = (index:number) => {
    setChallengesSelect(filteredChallenges[index].title);
    setChallengesDescription(filteredChallenges[index].description);
    console.log(filteredChallenges[index].title);

  }


 
  async function fetchRoadmap() {
    try {
      const data = await ListingChallengesApi();
      setChallenges(data);
         const filteredLabels: string[] = [];
    data.forEach((item: Challenges) => {
      console.log(item.category.toLocaleLowerCase(), categoria.toLowerCase(), item.category.toLocaleLowerCase() == categoria.toLocaleLowerCase())
      if (item.category === categoria) {
        console.log(item);
      const labels = Array.isArray(item.labels)
        ? item.labels
        : item.labels.split(/[\s,()]/)
        .map((label) => label.trim()).filter((label) => label !== "" && label !== "+" && label !== " " && label !== "," && label !== "ou" );
        

      filteredLabels.push(...labels);
    }})
    const uniqueLabels = [...new Set(filteredLabels)];
  setLanguages(uniqueLabels);
    } catch (error) {
      console.error("Error fetching roadmaps:", error);
    }
  }

  useEffect(() => {
    fetchRoadmap();
  },[] );

const filteredChallenges = challenges.filter((challenge) => {
  const labels = Array.isArray(challenge.labels)
    ? challenge.labels.map((l) => l.toLowerCase())
    : challenge.labels
        .split(/[ \s,()]/)
        .map((l) => l.trim().toLowerCase())
        .filter((l) => l && l !== "ou" && l !== "," && l !== "+");

  const categoryMatch = challenge.category.trim().toLowerCase() === categoria.trim().toLowerCase();
  const labelMatch = selectedLabel ? labels.includes(selectedLabel.trim().toLowerCase()) : false;
  const difficultyMatch = challenge.difficulty.trim().toLowerCase() === selectedDifficulty.trim().toLowerCase();

  return categoryMatch && labelMatch && difficultyMatch;
});

console.log("Filtered Challenges:", filteredChallenges);



  
  return (
    <BackEndContainer>
      <SectionHero>
        <BackEndTitle>{categoria}</BackEndTitle>
        <SubTitle>
          Prepare-se para Superar os Desafios Mais Empolgantes e Avançar na Sua
          Jornada na Programação!
        </SubTitle>
      </SectionHero>
      <SectionLinguages>
        <LanguagesTitle>Ferramentas utilizadas</LanguagesTitle>
        <Grid
          columns={3}
          gap={"32px"}
          children={languages?.map((languages) => languages)}
          navigate={handleModal}
          childMediaWidth=""
          childType = {'last-child'}
        />
        {openModal && (
        <>
        <Overlay onClick={() => setOpenModal(false)}/>
          <ModalBackEnd>
            <ModalChallengesTitle>
              Você escolheu os desafios <StrongTitle>{selectedLabel}</StrongTitle>
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
                  onClick={() => setSelectedDifficulty(level.name.toLowerCase())}
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
          Nível <StrongTitle>{selectedDifficulty}</StrongTitle>
        </BackEndTitle>
        {/* find procura o objeto que tenha o title igual ao level title */}
        <Grid columns={3} gap={"32px"} children={
          filteredChallenges.map((challenge) => challenge.title)
          }
          navigate={handleChallengesSelect}
          childMediaWidth ={'min-width: 1180px'}
          childType = {'last-child'}/>
      </SectionNivel>

      <SectionChallenges>
          <BackEndTitle>{challengesSelect}</BackEndTitle>
          <SubTitle>{challengesDescription}</SubTitle>
      </SectionChallenges>
    </BackEndContainer>
  );
}

