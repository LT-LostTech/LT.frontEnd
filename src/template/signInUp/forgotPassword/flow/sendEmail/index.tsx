import { Modal } from "../../../../../components/Modal";

interface SendEmailProps {
    onHighlightClick?: () => void;
    onClick: () => void;
}

export function SendEmail({ onHighlightClick, onClick }: SendEmailProps) {
    return (
        <Modal
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