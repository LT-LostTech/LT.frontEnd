import styled from "styled-components";
import BackgroundBackEnd from '../../assets/backgrounds/landing-page-background.png'
import { theme } from "../../theme/theme";

export const SectionGroup = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    background-image:url(${BackgroundBackEnd});
    width: 100%;
    border-bottom: 2px solid ${theme.colors.white};  
`

