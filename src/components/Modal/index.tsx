import {
    ModalChangeLine,
    ModalChangeOption,
  ModalChangeOptionText,
  ModalContainer,
  ModalContent,
  ModalForgotPassword,
  ModalForm,
  ModalPhoto,
  ModalTitle,
} from "./styled";
import modalPhoto from "../../assets/modal/image.svg";
import { Input, InputProps } from "../Input";
import { Button } from "../Button";
import { theme } from "../../theme/theme";

interface ModalProps {
  title: string;
  inputs: InputProps[];
  textButton: string;
  textChangeOption: string;
  textChangeOptionHighlight: string;
  displayForgotPassword: string;
}

export function Modal({ title, inputs, textButton, textChangeOption, textChangeOptionHighlight, displayForgotPassword}: ModalProps) {
  return (
    <ModalContainer>
      <ModalPhoto src={modalPhoto} />
      <ModalContent>
        <ModalTitle>{title}</ModalTitle>
        <ModalForm>
          {inputs.map((input, key) => (
            <Input
              key={key}
              placeholder={input.placeholder}
              label={input.label}
              type={input.type}
              showIcon={input.showIcon}
              showLabel={input.showLabel}
              IconOpen={input.IconOpen}
              IconClose={input.IconClose}
            />
          ))}
        </ModalForm>
        <ModalForgotPassword display={displayForgotPassword}>
            Esqueceu sua senha?
        </ModalForgotPassword>
        <Button width="100%" height="50px" colorText="white" bgColor={theme.colors.gray800} border="transparent" fontWeight="600" text={textButton} />
        <ModalChangeOption>
            <ModalChangeLine />
            <p>ou</p>
            <ModalChangeLine />
        </ModalChangeOption>
        <ModalChangeOptionText>
            {textChangeOption}<span className="highlight">{textChangeOptionHighlight}</span>
        </ModalChangeOptionText>
      </ModalContent>
    </ModalContainer>
  );
}
