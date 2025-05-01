import styled from "styled-components";
import { theme } from "../../../../theme/theme";
import backgroundWhite from "../../../../assets/Roadmaps/BackgroundWhite.png"



export const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  background-image: url(${backgroundWhite});
  align-items: center;
  

  @media (max-width:428px) {
    padding-top:100px;
    height: auto;
  }
`

export const ImageIllustration = styled.img`
  width: 365px;
  height: 645px;

  @media (max-width:428px) {
    width: 330px;
    height: 645px;
  
  }
`

export const InformationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: start;
  color: ${theme.colors.white};
  font-weight: 600;
  gap: 56px;
  padding-left: 32px;
  padding-top: 60px;
  
  @media (max-width:884px) {
    gap: 96px;
    }
  
`

export const TitleHeroPage = styled.h2`
  font-family: ${theme.font.lexend};
  font-size: 120px;
  padding-top:32px ;
  padding-right: 356px;

  @media (max-width:884px) {
    padding-top:24px ;
    padding-right: 145px;
    }

    @media (max-width:428px) {
      font-size: 60px;
      padding-top: 32px;
      padding-right:21.5px ;
      
    }
`
export const SubTitleHeroPage = styled.h3`
    font-size: 32px;
    font-style: italic;

    @media (max-width:884px) {
    font-size:40px ;
    }

    @media (max-width:428px) {
      font-size: 32px;
    }
`

export const InformationsBackEnd = styled.p`
    text-align: justify;
    font-size: 24px;
    margin-bottom:137px;
    padding-right:111px;
    

    @media (max-width:884px) {
    font-size:36px ;
    margin-bottom: 24px ;
    padding-right: 32px;
    
    }

    @media (max-width:428px) {
      font-size: 24px;
      margin-bottom: 33px;
      padding-right: 21.5px;
      
    }
`
