import styled from "styled-components";
import { theme } from "../../../theme/theme";


export const HeroTitleRoadmaps = styled.h2`
    font-size: 96px;
    font-weight: 600;
    text-align: center;
    padding:119.5px 81.5px 96px 81.5px;

    
    @media (max-width:834px ) {
        padding: 0;
        padding-top: 104px;
         font-size: 64px;
    }

    @media (max-width:428px){
        padding: 0;
        padding-top:104px;
        font-size: 40px;
    }
`



export const HeroStrongTitleRoadmaps = styled.strong`
    color: ${theme.colors.blue400};
`

