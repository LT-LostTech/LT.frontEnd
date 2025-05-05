import { FormProps } from "../../interfaces/interfaces.web";
import { Button } from "../Button";
import { Input } from "../Input";
import { ButtonsContainer, FormContainer } from "./styled";
import { Title } from "./styled";
import { Container } from "./styled";



export function Form({ title, InputProps, buttons }: FormProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <FormContainer>
        {InputProps.map((input, key) => (
          <Input {...input} key={key} />
        ))}
      </FormContainer>
        <ButtonsContainer>
          {buttons.map((button, key) => (
            <Button {...button} key={key} />
          ))}
        </ButtonsContainer>
    </Container>
  );
}
