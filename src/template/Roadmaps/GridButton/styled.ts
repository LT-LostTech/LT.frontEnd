import styled from "styled-components";

export const Grid =styled.section`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    justify-content: center;
    align-items: center;
    width: 100%;
    grid-gap:32px;
    padding: 86px 102.5px;
    
    @media (max-width:884px) {
        grid-template-columns: repeat(2, 1fr);

    }

    @media (max-width:500px) {
        grid-template-columns: 1fr;

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

