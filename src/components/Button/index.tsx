import { ReactNode } from "react";
import { ButtonContainer } from "./styled";

export interface ButtonProps {
    width: string;
    height: string;
    colorText: string;
    bgColor: string;
    fontWeight: string;
    text: ReactNode;
    border: string;
    hoverBg?:string;
    hoverColor?:string;
    onClick?: () => void;
    widthTablet?:string;
    widthMobile?:string;
    heightTablet?:string;
    heightMobile?:string;
    fontTablet?:string;
    fontMobile?:string;
}


export function Button({text, width, height, colorText, bgColor, fontWeight, border,hoverBg,hoverColor, onClick,widthTablet,widthMobile,heightMobile,heightTablet,fontTablet,fontMobile}: ButtonProps) {
    return (
        <ButtonContainer
            width={width}
            height={height}
            colorText={colorText}
            bgColor={bgColor}
            fontWeight={fontWeight}
            border={border}
            onClick={onClick}
            hoverBg={hoverBg}
            hoverColor={hoverColor}
            widthMobile={widthMobile}
            widthTablet={widthTablet}
            heightMobile={heightMobile}
            heightTablet={heightTablet}
            fontMobile={fontMobile}
            fontTablet={fontTablet}
        >
            {text}       </ButtonContainer>
    )
}