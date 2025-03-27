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
  textChangeOption?: string;
  textChangeOptionHighlight?: string;
  displayInformationExtra: string;
  displayChangeOption: string;
  textInformationExtra?: string;
  onHighlightClick?: () => void;
  onInformationExtraClick?: () => void;
  onClick?: () => void;
  position: string;
}

export function Modal({ onClick, title, inputs, textButton, textChangeOption, textChangeOptionHighlight, displayInformationExtra, displayChangeOption, textInformationExtra, onHighlightClick, onInformationExtraClick, position }: ModalProps) {
  return (
    <ModalContainer position={position}>
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
        <ModalForgotPassword display={displayInformationExtra} onClick={onInformationExtraClick}>
            {textInformationExtra}
        </ModalForgotPassword>
        <Button onClick={onClick} width="100%" height="50px" colorText="white" bgColor={theme.colors.gray800} border="transparent" fontWeight="600" text={textButton} />
        <ModalChangeOption display={displayChangeOption}>
            <ModalChangeLine />
            <p>ou</p>
            <ModalChangeLine />
        </ModalChangeOption>
        <ModalChangeOptionText>
            {textChangeOption}<span onClick={onHighlightClick} className="highlight">{textChangeOptionHighlight}</span>
        </ModalChangeOptionText>
      </ModalContent>
    </ModalContainer>
  );
}
