import styled from "styled-components";
import { theme } from "../../theme/theme";
import BackEndBackground from '../../assets/backgrounds/sectionsWithIllustration.png'


export const ChallengesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-image: url(${BackEndBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: ${theme.colors.white};
`
export const SectionHero = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 197px 0 0 0;
    gap: 96px; 
    padding-bottom: 96px;
    border-bottom: 2px solid ${theme.colors.white};
    width: 100%;

    @media (max-width:884px) {
       gap:  30px ;
       margin: 188px 0 0 0;
       padding-bottom: 32px;
   }

   @media (max-width:428px) {
      gap: 32px;
      margin: 156px 0 0 0;
   }
`

export const ChallengesTitle = styled.h2`
    font-size: 96px;
    font-weight: 700;
    font-family: ${theme.font.chackra};
    text-align: center;
    width: 1163px;

    @media (max-width:884px) {
       font-size: 50px;
       width: 606px;
   }

   @media (max-width:428px) {
       font-size: 29px;
       width: 336px;
   }

`
export const SectionWait = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  justify-content: center;
  width: 100%;
  height: 100%;
`

export const TitleSectionWaiting = styled.h2`
  
    font-family: ${theme.font.chackra};
    font-size: 76.6px;
    font-weight: 700;
    padding: 72px 73px 0 73px;


    @media (max-width:884px) {
        padding: 71px 37px 0 37px;
        font-size: 56px;
    }

    @media (max-width:428px) {
        padding: 71px 13px 0 13px;
        font-size: 22px;
    }
`

export const SubTitleSection = styled.h3`
    font-size: 36px; 
    font-family: ${theme.font.poppins};
    font-weight:400;
 
    @media (max-width:884px) {
       
        font-size: 24px;
    }

    @media (max-width:428px) {
        font-size: 14px;
    }
`


export const ChallengesWaitImage = styled.img`
    width: 750px;
    height: 500px;
    margin-bottom: 72px;

    @media (max-width: 428px) {
        width: 400px;
        height: 350px;  
    }

    @media (max-width: 400px) {
        width: 330px;
        height: 330px;  
    }
`