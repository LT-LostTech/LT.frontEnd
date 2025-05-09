import styled from "styled-components";
import { theme } from "../../../theme/theme";
import backgroundImage from "../../../assets/backgrounds/sectionsWithIllustration.png";

export const HeroSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%; 
  padding: 140px 32px 0 32px;
  background-image: ${backgroundImage};
  gap: 96px;
`;

export const HeroSectionTitle = styled.h2`
  font-size: 96px;
  color: ${theme.colors.white};
  font-weight: 700;
  font-family: "Chakra Petch", sans-serif;
  text-align: center;

  .highlight {
    color: ${theme.colors.blue400};
    font-size: 96px;

    @media (max-width: 824px) {
      font-size: 64px;
    }

    @media (max-width: 440px) {
      font-size: 32px;
    }
  }

  @media (max-width: 824px) {
    font-size: 64px;
  }

  @media (max-width: 440px) {
    font-size: 32px;
  }
`;
