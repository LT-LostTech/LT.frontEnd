import styled from "styled-components";
import { theme } from "../../../theme/theme";



export const HeroSectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    gap: 32px;
    padding: 289px 0;
    text-align: center;
    border-bottom: 4px solid ${theme.colors.white};

    @media (max-width: 430px) {
        padding: 289px 24px;

        button {
            width: 100%;
        }
    }
`

export const HeroTitle = styled.h2`
    font-size: 72px;
    color: ${theme.colors.white};    
    font-family: 'Chakra Petch', sans-serif;
    font-weight: 700;

    @media (max-width: 430px) {
        font-size: 48px;
    }
`

export const HeroDescription = styled.p`
    font-size: 24px;
    font-style: italic;
    width: 100%;
    height: 100%;
    color: ${theme.colors.white};
`
