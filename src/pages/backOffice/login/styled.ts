import styled from "styled-components";
import backgroundLandpage from "../../../assets/backgrounds/landing-page-background.png"

export const LoginContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(${backgroundLandpage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 20px;
`
