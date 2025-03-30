import styled from "styled-components"
import { theme } from "../../theme/theme"
import RoadmapsBackground from '../../assets/backgrounds/black-background.svg'

export const RoadmapsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-image: url(${RoadmapsBackground}) ;
    background-size: cover;
    background-position:center ;
    background-repeat: no-repeat;
    color: ${theme.colors.white};
`

export const WaitingSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
    margin-top:72px ;

`

export const TitleSectionWaiting = styled.h2`
  
    font-family: ${theme.font.jersey};
    font-size: 96px;
    font-weight: 400;
    padding: 0 71px;
    text-align: center;

    @media (max-width:884px) {
        padding: 0 37px;
        font-size: 56px;
    }

    @media (max-width:428px) {
        padding: 0 12.5px;
        font-size: 26px;
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

export const RoadmapWaitImage = styled.img`
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
