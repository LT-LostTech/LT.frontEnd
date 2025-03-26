import { Modal } from "../../../components/Modal";
import EyeOpen from "../../../assets/icons/eyeOpen.svg";
import EyeClose from "../../../assets/icons/eyeClosed.svg";

export function SignIn() {
    return (
        <Modal
            title="Entrar"
            inputs={[
                {
                    placeholder: "Digite o seu e-mail",
                    label: "E-mail",
                    showIcon: false,
                    showLabel: true,
                    IconOpen: "",
                    IconClose: "",
                },
                {
                    placeholder: "Digite a sua senha",
                    label: "Senha",
                    showIcon: true,
                    showLabel: true,
                    IconOpen: EyeOpen,
                    IconClose: EyeClose,
                    type: "password",
                }
            ]}
            textButton="Entrar"
            textChangeOption="Não tem uma conta? Se "
            textChangeOptionHighlight="Cadastre"
            displayInformationExtra="flex"
            textInformationExtra="Esqueceu sua senha?"
        />
    )
}
