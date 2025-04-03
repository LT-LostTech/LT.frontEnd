import styled from "styled-components";
import backgroundImage from "../../assets/backgrounds/landing-page-background.png"
import { theme } from "../../theme/theme";

export const NotFoundContainer = styled.main`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 100%;
   height: 100vh;
   padding: 20px;
   justify-content: space-between;
   background: url(${backgroundImage});
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
`

export const NotFoundTitle = styled.h1`
   font-size: 96px;
   color: ${theme.colors.white};
   font-family: 'Chakra Petch', sans-serif;
   text-align: center;
   margin: 0;
   
   `

export const NotFoundImage = styled.img`
  width: 520px;
  height: 520px;
`