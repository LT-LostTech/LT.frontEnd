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
}


export function Button({text, width, height, colorText, bgColor, fontWeight, border,hoverBg,hoverColor, onClick}: ButtonProps) {
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
        >
            {text}       </ButtonContainer>
    )
}