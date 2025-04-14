import { ImageContainer, ImageIllustration, InformationsBackEnd, InformationsContainer, SubTitleHeroPage, TitleHeroPage } from "./styled";
import BackendServer from "../../../../assets/Roadmaps/ImagePages/server-image.png"

export function HeroPageBackEnd() {
  return (
    <>
      <ImageContainer>
        <ImageIllustration src={BackendServer}/>
      </ImageContainer>
      
      <InformationsContainer>
            <TitleHeroPage>BACK END</TitleHeroPage>
            <SubTitleHeroPage>O que é o back end?</SubTitleHeroPage>
            <InformationsBackEnd>O back end da sua aplicação é o motor que processa dados, gerencia usuários e mantém tudo funcionando nos bastidores. Ele garante segurança, eficiência e uma experiência fluida para quem acessa os roadmaps e desafios!</InformationsBackEnd>
      </InformationsContainer>
    </>
  );
}
