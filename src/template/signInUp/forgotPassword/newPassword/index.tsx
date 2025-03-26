import { Modal } from "../../../../components/Modal";
import EyeOpen from "../../../../assets/icons/eyeOpen.svg";
import EyeClose from "../../../../assets/icons/eyeClosed.svg";


export function NewPassword() {
    return (
        <Modal
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
                }
                
            ]}
            textButton="Próximo"
            displayInformationExtra="flex"
            textInformationExtra="Digite a nova senha"
        />
    )
}