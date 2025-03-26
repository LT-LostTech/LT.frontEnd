import { Modal } from "../../../components/Modal";
import EyeOpen from "../../../assets/icons/eyeOpen.svg";
import EyeClose from "../../../assets/icons/eyeClosed.svg";

export function SignUp() {
    return (
        <Modal
            title="Cadastro"
            inputs={[
                {
                    placeholder: "Digite o seu nome",
                    label: "Nome",
                    type: "text",
                    showIcon: false,
                    showLabel: true,
                    IconOpen: "",
                    IconClose: "",
                },
                {
                    placeholder: "Digite o seu e-mail",
                    label: "E-mail",
                    type: "email",
                    showIcon: false,
                    showLabel: true,
                    IconOpen: "",
                    IconClose: "",
                },
                {
                    placeholder: "Digite a sua senha",
                    label: "Senha",
                    type: "password",
                    showIcon: true,
                    showLabel: true,
                    IconOpen: EyeOpen,
                    IconClose: EyeClose,
                }
            ]}
            textButton="Cadastrar"
            textChangeOption="Já tem uma conta? Faça "
            textChangeOptionHighlight="Login"
            displayInformationExtra="none"
        />
    )
}