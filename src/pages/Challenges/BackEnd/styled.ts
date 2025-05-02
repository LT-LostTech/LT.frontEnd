import styled from "styled-components";
import BackEndBackground from '../../../assets/backgrounds/sectionsWithIllustration.png'
import { theme } from "../../../theme/theme";

export const BackEndContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-image: url(${BackEndBackground}) ;
    background-size: cover;
    background-position:center ;
    background-repeat: no-repeat;
    color: ${theme.colors.white};
`

export const SectionHero = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 197px 0 0 0;
    gap: 56px;
    padding-bottom: 197px;
    border-bottom: 2px solid ${theme.colors.white};
`

export const BackEndTitle = styled.h2`
    font-size: 96px;
    font-weight: 700;
    font-family: ${theme.font.chackra};
`

export const SubTitle = styled.p`
    font-size: 36px;
    font-weight: 600;
    padding: 0 138.5px;
`

export const SectionLinguages = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 64px;
    text-align: center;
    padding-bottom: 42px;
    width: 100%;
    border-bottom: 2px solid ${theme.colors.white};

`

export const LanguagesTitle = styled.h2`
    font-size: 64px;
    font-weight: 700;
    font-family: ${theme.font.chackra};
    width: 790px;
`

export const SectionNivel = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 192.5px;
    text-align: center;
    padding-bottom: 42px;
    width: 100%;
    border-bottom: 2px solid ${theme.colors.white};

`


export const ModalBackEnd = styled.div`
  width: 1000px;
  height: 360px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position:fixed;
  top: 50% ;
  left: 50% ;
  right: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  background-color: ${theme.colors.black};
`

export const ModalChallengesTitle = styled.h2`
    font-size: 45.7px;
    font-weight: 700;
    padding-top: 42.44;
    padding-bottom: 22.85px;
`
export const SubTitleModal = styled.p`
    font-size: 25.7px;
    font-family: ${theme.font.poppins};
    font-weight: 600;
    
    &:first-of-type{
        padding-bottom: 20px;
    }

    &:last-of-type{
        padding-bottom: 22.85px;
    }
`
export const Categorys = styled.div`
    display: flex;
    gap: 22.85px;

`