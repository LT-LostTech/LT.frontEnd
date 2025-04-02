import { ButtonContainer } from "./styled";

export interface ButtonProps {
    width: string;
    height: string;
    colorText: string;
    bgColor: string;
    fontWeight: string;
    text: string;
    border: string;
    onClick?: () => void;
}

export function Button({text, width, height, colorText, bgColor, fontWeight, border, onClick}: ButtonProps) {
    return (
        <ButtonContainer
            width={width}
            height={height}
            colorText={colorText}
            bgColor={bgColor}
            fontWeight={fontWeight}
            border={border}
            onClick={onClick}
        >
            {text}
        </ButtonContainer>
    )
}