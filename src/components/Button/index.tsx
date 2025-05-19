import { ButtonProps } from "../../interfaces/interfaces.web";
import { ButtonContainer } from "./styled";

export function Button(props: ButtonProps) {
  return (
    <ButtonContainer {...props}>
      {props.text}
    </ButtonContainer>
  );
}
