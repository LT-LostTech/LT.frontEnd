import { ButtonProps } from "../../interfaces/interfaces.web";
import { ButtonContainer, StyledLoading } from "./styled";

export function Button(props: ButtonProps) {
  return (
    <ButtonContainer {...props}>
      {props.disabled? <StyledLoading disabled={props.disabled}>{props.text}</StyledLoading> : props.text}
      
    </ButtonContainer>
  );
}
