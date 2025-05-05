import { Modal } from "../../../../../components/Modal";
import { SendEmailProps } from "../../../../../interfaces/interfaces.web";


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