import { ButtonContainer } from "./styled";
import { ButtonProps } from "../../interfaces/interfaces.web";

export function Button({
  text,
  width,
  height,
  colorText,
  bgColor,
  fontWeight,
  border,
  hoverBg,
  hoverColor,
  onClick,
}: ButtonProps) {
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
      {text}
    </ButtonContainer>
  );
}
