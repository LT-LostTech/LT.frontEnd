import styled from "styled-components";
import { theme } from "../../../../theme/theme";

export const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`

export const ImageIllustration = styled.img`
  width: 365px;
  height: 645px;

  @media (max-width:375px) {
    width: 330px;
    height: 645px;
    
  }
`

export const InformationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  color: ${theme.colors.white};
  font-weight: 600;
  gap: 96px;
  padding-left: 32px
  
`

export const TitleHeroPage = styled.h2`
  font-family: ${theme.font.lexend};
  font-size: 120px;
  padding-top:32px ;
  width: 332px;

  @media (max-width:884px) {
    width: 647px;
    padding-top:24px ;
    }

    @media (max-width:428px) {
      font-size: 60px;
      padding-top: 32px;
      width: 332px;
      
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
    width: 577px;
    font-size: 24px;
    padding-bottom:137px;

    @media (max-width:884px) {
    font-size:36px ;
    padding-bottom: 24px ;
    width: 710px;
    
    }

    @media (max-width:428px) {
      font-size: 24px;
      padding-bottom: 33px;
      width: 332px;
      
    }
`
