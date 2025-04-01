import { Modal } from "../../../../../components/Modal";

interface SendEmailProps {
    onHighlightClick?: () => void;
    onClick: () => void;
    position: string;
    displayPhoto: string
}

export function SendEmail({ displayPhoto, onHighlightClick, onClick, position }: SendEmailProps) {
    return (
        <Modal
            display={displayPhoto}
            position={position}
            title="Recuperar senha"
            inputs={[
                {
                    placeholder: "Digite o seu e-mail",
                    label: "E-mail",
                    type: "email",
                    showIcon: false,
                    showLabel: true,
                    IconOpen: "",
                    IconClose: "",  
                }
            ]}
            textButton="Próximo"
            displayInformationExtra="none"
            onHighlightClick={onHighlightClick}
            displayChangeOption="none"
            onClick={onClick}
        />
    )
}