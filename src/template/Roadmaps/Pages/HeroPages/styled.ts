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
`

export const InformationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  color: ${theme.colors.white};
  font-weight: 600;
  gap: 96px;
  padding-bottom:137px;
  padding-left: 32px
`

export const TitleHeroPage = styled.h2`
  font-family: ${theme.font.lexend};
  font-size: 120px;
  padding-top:32px ;
  width: 332px;
`
export const SubTitleHeroPage = styled.h3`
    font-size: 32px;
    font-style: italic;
`

export const InformationsBackEnd = styled.p`
    text-align: justify;
    width: 577px;
    font-size: 24px;
`
