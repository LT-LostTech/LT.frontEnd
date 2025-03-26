import { Modal } from "../../../../components/Modal";

export function SendEmail() {
    return (
        <Modal
            title="Esqueceu sua senha?"
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
            displayForgotPassword="none"
        />
    )
}