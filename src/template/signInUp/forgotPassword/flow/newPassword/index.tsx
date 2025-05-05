import { Modal } from "../../../../../components/Modal";
import EyeOpen from "../../../../../assets/icons/eyeOpen.svg";
import EyeClose from "../../../../../assets/icons/eyeClosed.svg";
import { NewPasswordProps } from "../../../../../interfaces/interfaces.web";



export function NewPassword({
  displayPhoto,
  onClick,
  position,
}: NewPasswordProps) {
  return (
    <Modal
      display={displayPhoto}
      position={position}
      title="Nova senha"
      inputs={[
        {
          placeholder: "Digite a senha",
          label: "Senha",
          showIcon: true,
          showLabel: true,
          IconOpen: EyeOpen,
          IconClose: EyeClose,
          type: "password",
        },
        {
          placeholder: "Digite a senha novamente",
          label: "Senha",
          showIcon: true,
          showLabel: true,
          IconOpen: EyeOpen,
          IconClose: EyeClose,
          type: "password",
        },
      ]}
      textButton="Confirmar"
      displayInformationExtra="none"
      displayChangeOption="none"
      onClick={() => {
        onClick();
      }}
    />
  );
}
