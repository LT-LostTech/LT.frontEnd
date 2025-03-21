import { ButtonContainer } from "./styled";

interface ButtonProps {
    width: string;
    height: string;
    colorText: string;
    bgColor: string;
    fontWeight: string;
    text: string;
    border: string;
}

export function Button({text, width, height, colorText, bgColor, fontWeight, border}: ButtonProps) {
    return (
        <ButtonContainer
            width={width}
            height={height}
            colorText={colorText}
            bgColor={bgColor}
            fontWeight={fontWeight}
            border={border}
        >
            {text}
        </ButtonContainer>
    )
}