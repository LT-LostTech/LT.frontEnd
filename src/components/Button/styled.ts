import styled from "styled-components";

interface ButtonProps {
  width: string;
  height: string;
  colorText: string;
  bgColor: string;
  fontWeight: string;
  border: string;
  hoverBg?:string;
  hoverColor?:string;
}

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
  transition: scale 0.3s ease-out, background-color 0.3s ease-out;
  
  &:hover {
    transform: scale(1.05);
    background-color: ${props => props.hoverBg};
    color: ${props => props.hoverColor};
  }

`;
