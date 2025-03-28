import styled from "styled-components"
import { theme } from "../../theme/theme"
import RoadmapsBackground from '../../assets/backgrounds/black-background.svg'

export const MainRoadmapsContainer = styled.main`
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
    padding:119.5px 81.5px;
    

    @media (max-width: 430px) {
        padding: 289px 24px;
    
    }
`

export const WaitingSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;

`

export const TitleSectionWaiting = styled.h2`
    font-family: ${theme.font.jersey};
    font-size: 96px;
    font-weight: 400;
`

export const SubTitleSection = styled.h3`
    font-size: 36px; 
    font-family: ${theme.font.poppins};
    font-weight:400;
`

export const RoadmapWaitImage = styled.img`
    width: 750px;
    height: 500px;

    @media (max-width: 400px) {
        width: 330px;
        height: 330px;  
    }
`
