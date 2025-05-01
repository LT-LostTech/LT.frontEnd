import styled from "styled-components";
import RoadmapsBackground from '../../assets/backgrounds/landing-page-background.png'
import { theme } from "../../theme/theme";

export const BackEndContainer = styled.div`
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
    text-align: center;
`

export const SectionLinguages = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 192.5px;
`

