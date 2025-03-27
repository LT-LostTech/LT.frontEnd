import styled from "styled-components";
import { theme } from "../../../theme/theme";
import blackBackground from "../../../assets/backgrounds/black-background.svg"
import whiteBackground from "../../../assets/backgrounds/white-background.svg"

interface SectionIllustrationProps {
    layout: "left" | "right";
    backgroundImage: "black" | "white";

}

export const SectionIllustrationContainer = styled.section<SectionIllustrationProps>`
    display: flex;
    flex-direction: ${({layout}) => layout === "right" ? "row-reverse" : "row"};
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 262px 56px;
    background-image: ${({backgroundImage}) => backgroundImage === "black" ? `url(${blackBackground})` : `url(${whiteBackground})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;


    @media (max-width: 430px) {     
        flex-direction: column-reverse;
        
        button {
            width: 100%;
        }
    }

    @media screen and (max-width: 1024px) {
        flex-direction: column-reverse;

        button {
            width: 100%;
        }
    }
`

export const SectionIllustrationContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 32px;
    height: 100%;
    width: 50%;

    @media (max-width: 430px) {
        width: 100%;
    }

    @media screen and (max-width: 1024px) {
        width: 100%;
    }
`

export const SectionIllustrationTitle = styled.h2<SectionIllustrationProps>`
    font-family: 'Chakra Petch', sans-serif;
    font-size: 72px;
    font-weight: 700;
    color: ${({backgroundImage}) => backgroundImage === "black" ? theme.colors.white : theme.colors.black};

    @media (max-width: 430px) {
        font-size: 24px;
        width: 100%;
    }
`

export const SectionIllustrationDescription = styled.p<SectionIllustrationProps>`
    font-size: 24px;
    font-weight: 400;
    font-style: italic;
    color: ${({backgroundImage}) => backgroundImage === "black" ? theme.colors.white : theme.colors.black};
    

    .highlight {
        color: ${theme.colors.blue400};
        text-decoration: underline;
    }
`

export const SectionIllustrationImage = styled.img`
    width: 500px;
    height: 500px;

    @media (max-width: 430px) {
        width: 100%;
        height: 100%;
    }
`

