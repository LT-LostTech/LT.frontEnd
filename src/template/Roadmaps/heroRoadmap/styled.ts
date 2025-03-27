import styled from "styled-components";
import RoadmapsBackground from '../../../assets/backgrounds/black-background.svg'
import { theme } from "../../../theme/theme";

export const HeroRoadmapsContainer = styled.section`
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
export const HeroTitleRoadmaps = styled.h2`
    font-size: 96px;
    font-weight: 600;
    text-align: center;

    
    @media (max-width:824px ) {
         font-size: 64px;
    }

    @media (max-width:400px) {
        font-size: 40px;
        
    }
`

export const HeroStrongTitleRoadmaps = styled.strong`
    color: ${theme.colors.blue400};
`
