import { Modal } from "../../../../components/Modal";
import EyeOpen from "../../../assets/icons/eyeOpen.svg";
import EyeClose from "../../../assets/icons/eyeClosed.svg";

export function TypeCode() {
    return (
        <Modal
            title="Nova senha"
            inputs={[
                {
                    label: "Digite a senha",
                    placeholder: "Digite a senha",
                    showIcon: true,
                    showLabel: true,
                    IconOpen: EyeOpen,
                    IconClose: EyeClose,
                    type: "password",
                },
                {
                    label: "Confirme a senha",
                    placeholder: "Confirme a senha",
                    showIcon: true,
                    showLabel: true,
                    IconOpen: EyeOpen,
                    IconClose: EyeClose,
                    type: "password",
                },
            ]}
            textButton="Confirmar"
            displayInformationExtra="none"
        />
    )
}