import styled from "styled-components";
import backgroundImage from "../../assets/backgrounds/sectionsWithIllustration.png";

export const NewsContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 140px 32px 0 32px;
`;