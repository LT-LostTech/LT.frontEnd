import styled from "styled-components";
import { theme } from "../../../theme/theme";

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
    gap: 24px;

    @media (max-width: 430px) {     
        flex-direction: column-reverse;
        padding: 100px 56px;
        
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
    font-family: ${theme.font.chackra};
    font-size: 72px;
    font-weight: 700;
    color: ${theme.colors.white};

    @media (max-width: 430px) {
        font-size: 24px;
        width: 100%;
    }
`

export const SectionIllustrationDescription = styled.p<SectionIllustrationProps>`
    font-size: 24px;
    font-weight: 400;
    font-style: italic;
    color: ${theme.colors.white};
    

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

