import { Modal } from "../../../../../components/Modal";
import EyeOpen from "../../../../../assets/icons/eyeOpen.svg";
import EyeClose from "../../../../../assets/icons/eyeClosed.svg";
import { TypeCodeProps } from "../../../../../interfaces/interfaces.web";

export function TypeCode({ displayPhoto, onClick, position }: TypeCodeProps) {
    return (
        <Modal
        display={displayPhoto}
            position={position}
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
            displayChangeOption="none"
            onClick={() => {
                onClick()
            }}
        />
    )
}