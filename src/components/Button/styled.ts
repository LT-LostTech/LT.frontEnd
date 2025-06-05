import styled from "styled-components";
import { ButtonProps } from "../../interfaces/interfaces.web";

export const ButtonContainer = styled.button<ButtonProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.bgColor};
  border-radius: 10px;
  font-size: 20px;
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.colorText};
  border: ${(props) => props.border};
  cursor: pointer;
  transition: transform 0.3s ease-out, background-color 0.3s ease-out;
  transition: scale 0.3s ease-out, background-color 0.3s ease-out;

  @media (max-width: 884px) {
    width: ${(props) => props.widthTablet};
    height: ${(props) => props.heightTablet};
    font-size: ${(props) => props.fontTablet};
  }

  @media (max-width: 470px) {
    width: ${(props) => props.widthMobile};
    height: ${(props) => props.heightMobile};
    font-size: ${(props) => props.fontMobile};
  }
  
  &:hover {
    transform: scale(1.05);
    background-color: ${props => props.hoverBg};
    color: ${props => props.hoverColor};
  }

  @media (max-width: 470px) {
    width: ${(props) => props.widthMobile};
    height: ${(props) => props.heightMobile};
    font-size: ${(props) => props.fontMobile};
  }

  &:hover {
    transform: scale(1.05);
    background-color: ${(props) => props.hoverBg};
    color: ${(props) => props.hoverColor};
  }
`;

export const StyledLoading = styled.button<{disabled:boolean}>`
  opacity: ${props => props.disabled ? 0.8 : 1};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  width: 100%;
  height: 100%;

`