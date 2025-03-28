import { Input, InputProps } from "../Input"
import { FormContainer } from "./styled"
import { Title } from "./styled"
import { Container } from "./styled"


interface FormProps {
    title: string
    InputProps: InputProps[]
}

export function Form({ title, InputProps }: FormProps) {
   return (
      <Container>
        <Title>{title}</Title>
        <FormContainer>
            {InputProps.map((input, key) => (
                <Input
                    {...input}
                    key={key}
                />
            ))}
        </FormContainer>
      </Container>
   )
}
