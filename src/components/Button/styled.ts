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
  widthTablet?:string;
  widthMobile?:string;
  heightTablet?:string;
  heightMobile?:string;
  fontTablet?:string;
  fontMobile?:string;
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

`;
