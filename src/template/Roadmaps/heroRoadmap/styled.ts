import styled from "styled-components";
import { theme } from "../../../theme/theme";


export const HeroTitleRoadmaps = styled.h2`
    font-size: 96px;
    font-weight: 600;
    text-align: center;

    
    @media (max-width:824px ) {
         font-size: 64px;
    }

    @media (max-width:400px) {
        font-size: 40px;
        
    }
`

export const HeroStrongTitleRoadmaps = styled.strong`
    color: ${theme.colors.blue400};
`
