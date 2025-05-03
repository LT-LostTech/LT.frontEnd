import styled from "styled-components";
import { theme } from "../../theme/theme";

interface GridProps {
  gap: string;
  columns: number;
}

interface ButtonWrapperProps {
  childMaxWidth?: string;
  childType?: string;
}
export const GridContainer = styled.section<GridProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1235px;
  padding: 86px 102.5px;
  gap: ${(props) => props.gap};

  @media (max-width: 1084px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 86px 59px;
  }

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
    padding: 86px 30px 32px 30px;
    border-bottom: none;
  }
`

export const ButtonsStyledRoadmaps = styled.div<ButtonWrapperProps>`
  @media (${(props) => props.childMaxWidth || 'max-width: 884px'}) {
    display: flex;
    justify-self: center;
    align-items: center;
    text-align: center;
    &:${(props) => props.childType || 'nth-child(9)'} {
      grid-column: 1 / -1;
    }


  }
`

export const GridDropdown = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const DropdownButtonStyled = styled.div`
  text-align: center;
  width: 100%;
  @media (max-width: 768px) {
    display: block;
    border-bottom: 1px solid ${theme.colors.white};
  }
`


