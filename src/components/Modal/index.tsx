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
import modalPhoto from "../../assets/modal/logo.png";
import { Input } from "../Input";
import { Button } from "../Button";
import { theme } from "../../theme/theme";
import { ModalProps } from "../../interfaces/interfaces.web";

export function Modal({
  onClick,
  title,
  inputs,
  textButton,
  textChangeOption,
  textChangeOptionHighlight,
  displayInformationExtra,
  displayChangeOption,
  textInformationExtra,
  onHighlightClick,
  onInformationExtraClick,
  position,
  display,
}: ModalProps) {
  return (
    <ModalContainer position={position}>
      <ModalPhoto src={modalPhoto} display={display} />
      <ModalContent>
        <ModalTitle>{title}</ModalTitle>
        <ModalForm>
          {inputs.map((input, key) => (
            <Input {...input} key={key} />
          ))}
        </ModalForm>
        <ModalForgotPassword
          display={displayInformationExtra}
          onClick={onInformationExtraClick}
        >
          {textInformationExtra}
        </ModalForgotPassword>
        <Button
          onClick={onClick}
          width="100%"
          height="50px"
          colorText="white"
          bgColor={theme.colors.gray800}
          border="transparent"
          fontWeight="600"
          text={textButton}
        />
        <ModalChangeOption display={displayChangeOption}>
          <ModalChangeLine />
          <p>ou</p>
          <ModalChangeLine />
        </ModalChangeOption>
        <ModalChangeOptionText>
          {textChangeOption}
          <span onClick={onHighlightClick} className="highlight">
            {textChangeOptionHighlight}
          </span>
        </ModalChangeOptionText>
      </ModalContent>
    </ModalContainer>
  );
}
