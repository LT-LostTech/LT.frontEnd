import styled from "styled-components";
import BackgroundBackEnd from '../../../assets/backgrounds/landing-page-background.png'
import { theme } from "../../../theme/theme";

export const SectionGroup = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    background-image:url(${BackgroundBackEnd});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100%;
    border-bottom: 2px solid ${theme.colors.white};
    
    @media (max-width:1024px) {
        flex-direction: column;
    }
`

export const SectionPage = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-top: 64px;
`

export const TitleOfSection = styled.h2`
    font-size: 64px;
    font-weight: 600;
    color: ${theme.colors.white};
    font-family: ${theme.font.lexend};

    @media (max-width:428px) {
        font-size: 40px ;
        
    }

    
`

