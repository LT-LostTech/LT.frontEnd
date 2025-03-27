import { Modal } from "../../../../../components/Modal";
import EyeOpen from "../../../../../assets/icons/eyeOpen.svg";
import EyeClose from "../../../../../assets/icons/eyeClosed.svg";

interface TypeCodeProps {
    onClick: () => void;
    position: string;
}

export function TypeCode({ onClick, position }: TypeCodeProps) {
    return (
        <Modal
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