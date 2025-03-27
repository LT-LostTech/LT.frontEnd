import { Modal } from "../../../components/Modal";
import EyeOpen from "../../../assets/icons/eyeOpen.svg";
import EyeClose from "../../../assets/icons/eyeClosed.svg";

interface SignInProps {
    onHighlightClick: () => void;
    onInformationExtraClick: () => void;
    onComplete: () => void;
    displayChangeOption: string;
    position: string;
    textChangeOption: string;
    textChangeOptionHighlight: string;
}

export function SignIn({ onHighlightClick, onInformationExtraClick, onComplete, displayChangeOption, position, textChangeOption, textChangeOptionHighlight }: SignInProps) {
    return (
        <Modal
            position={position}
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
            displayInformationExtra="flex"
            textInformationExtra="Esqueceu sua senha?"
            textChangeOption={textChangeOption}
            textChangeOptionHighlight={textChangeOptionHighlight}
            onHighlightClick={() => {
                onHighlightClick();
            }}
            onInformationExtraClick={() => {
                onInformationExtraClick();
            }}
            displayChangeOption={displayChangeOption}
            onClick={() => {
                onComplete();
            }}
        />
    )
}
