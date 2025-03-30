import styled from "styled-components";
import { theme } from "../../../theme/theme";

export const Grid =styled.section`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding:86px  102.5px;
    gap: 32px;
   
    border-bottom: 1px solid ${theme.colors.white};
    
    @media (max-width:884px) {
        grid-template-columns: repeat(2, 1fr);
        padding: 86px 59px;
    }

    @media (max-width:500px) {
        grid-template-columns: 1fr;
        padding: 86px 30px;
        
    }
`

export const ButtonsStyledRoadmaps = styled.div`
@media (max-width:884px) {
        display: flex;
        justify-self: center;
        align-items: center;
        text-align: center;
 
    &:nth-child(9){
        grid-column: 1 / -1;
    }
}
`

