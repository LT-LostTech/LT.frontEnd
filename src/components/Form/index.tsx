import { Button, ButtonProps } from "../Button";
import { Input, InputProps } from "../Input";
import { ButtonsContainer, FormContainer } from "./styled";
import { Title } from "./styled";
import { Container } from "./styled";

interface FormProps {
  title: string;
  InputProps: InputProps[];
  buttons: ButtonProps[];
}

export function Form({ title, InputProps, buttons }: FormProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <FormContainer>
        {InputProps.map((input, key) => (
          <Input {...input} key={key} />
        ))}
        <ButtonsContainer>
          {buttons.map((button, key) => (
            <Button {...button} key={key} />
          ))}
        </ButtonsContainer>
      </FormContainer>
    </Container>
  );
}
