import styled from "styled-components";
import backgroundLandpage from "../../assets/backgrounds/landing-page-background.png"

export const LayoutContainer = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-image: url(${backgroundLandpage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  align-items: center;
  padding-top: 20px;
`;
