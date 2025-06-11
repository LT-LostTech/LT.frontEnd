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
    width: 100%;
    padding-bottom: 197px;
    
    border-bottom: 2px solid ${theme.colors.white};

    @media (max-width: 884px) {
        gap: 38px;
        padding-bottom: 67px;
    }

    @media (max-width: 470px) {
        gap: 16.84px;
        padding-bottom: 67px;
    }
`

export const BackEndTitle = styled.h2`
    font-size: 96px;
    font-weight: 700;
    font-family: ${theme.font.chackra};

    @media (max-width: 884px) {
        font-size: 65.12px;
    }

    @media (max-width: 470px) {
        font-size: 40.86px;
    }
`

export const SubTitle = styled.p`
    font-size: 36px;
    font-weight: 600;
    text-align: center;
    max-width: 1163px;

    @media (max-width: 884px) {
        font-size: 24.42px;
        max-width: 788.88px;
    }

    @media (max-width: 470px) {
        font-size: 20.82px;
        max-width: 349.64px;
    }
`

export const SectionLinguages = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 64px;
    text-align: center;
    gap: 32px;
    width: 100%;
    border-bottom: 2px solid ${theme.colors.white};

    @media (max-width: 884px) {
        margin-top: 36.62px;
        gap: 16.31px;
    }

    @media (max-width: 470px) {
       margin-top: 10px;
       gap: 9px;
    }
`

export const LanguagesTitle = styled.h2`
    font-size: 64px;
    font-weight: 700;
    font-family: ${theme.font.chackra};
    width: 790px;

    @media (max-width: 884px) {
        font-size: 40px;
    }

    @media (max-width: 470px) {
        font-size: 40.78px;
        text-align: center;
        width: 250px;
    }
`

export const SectionNivel = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 192.5px;
    text-align: center;
    gap: 96px;
    width: 100%;
    border-bottom: 2px solid ${theme.colors.white};

    @media (max-width: 884px) {
        margin-top: 123.5px;
        gap: 60.88px;
    }

    @media (max-width: 470px) {
        margin-top: 45px;
        gap: 29.56px;
    }
    

`


export const ModalBackEnd = styled.div`
  width: 1000px;
  height: 360px;
  background-color: ${theme.colors.white};
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
  z-index: 1010;
  background-color: ${theme.colors.black};

  @media (max-width: 884px) {
    width: 640px;
    height: 255px;
    }
    
    @media (max-width: 470px) {
        width: 250px;
        height: 80px;
    }
  
`

export const ModalChallengesTitle = styled.h2`
    font-size: 45.7px;
    font-weight: 700;
    padding-top: 42.44;
    padding-bottom: 22.85px;

    @media (max-width: 884px) {
        padding-top: 41.44;
        font-size: 28.38px;
        padding-bottom: 14.19px;
    }

    @media (max-width: 470px) {
        padding-top: 6.25px;
        padding-bottom: 5px;
        font-size: 11.1px;
    }
  
`
export const SubTitleModal = styled.p`
    font-size: 25.7px;
    font-family: ${theme.font.poppins};
    font-weight: 600;

    @media (max-width: 884px) {
        font-size: 16px;
    }

    @media (max-width: 470px) {
        font-size: 6.25px;
    }
    
    &:first-of-type{
        padding-bottom: 20px;
        @media (max-width: 470px) {
        padding-bottom: 5px;
    }
    }

    &:last-of-type{
        padding-bottom: 22.85px;

        @media (max-width: 470px) {
        padding-bottom:5px;
    }
    }
`
export const Categorys = styled.div`
    display: flex;
    gap: 22.85px;

    @media (max-width: 884px) {
        gap: 14.19px;
    }

    @media (max-width: 470px) {
       gap:5.55px ;
    }
`

export const SectionChallenges =styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 192.5px;
    text-align: center;
    gap: 96px;
    width: 100%;
    border-bottom: 2px solid ${theme.colors.white};
    padding-bottom: 137px;

    @media (max-width: 884px) {
        margin-top: 123.5px;
        gap: 37px;
        padding-bottom: 58px;
    }

    @media (max-width: 470px) {
        margin-top: 45px;
        gap: 10px;
        padding-bottom: 40.78px;
    }
`