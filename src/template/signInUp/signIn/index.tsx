import { Modal } from "../../../components/Modal";
import EyeOpen from "../../../assets/icons/eyeOpen.svg";
import EyeClose from "../../../assets/icons/eyeClosed.svg";

interface SignInProps {
    onHighlightClick: () => void;
    onInformationExtraClick: () => void;
    onComplete: () => void;
}

export function SignIn({ onHighlightClick, onInformationExtraClick, onComplete }: SignInProps) {
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
            onHighlightClick={() => {
                onHighlightClick();
            }}
            onInformationExtraClick={() => {
                onInformationExtraClick();
            }}
            displayChangeOption="flex"
            onClick={() => {
                onComplete();
            }}
        />
    )
}
