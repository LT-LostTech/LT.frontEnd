import { Modal } from "../../../components/Modal";
import { LoginContainer } from "./styled";
import EyeOpen from "../../../assets/icons/eyeOpen.svg"
import EyeClose from "../../../assets/icons/eyeClosed.svg"
import { useNavigate } from "react-router-dom";

export function BackOfficeLogin() {
    const navigate = useNavigate();

    return (
        <LoginContainer>
            <Modal
                position=""
                title="Login"
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
                displayChangeOption="none"
                textInformationExtra="Esqueceu sua senha?"
                onHighlightClick={() => {
                    navigate("/backoffice/register");
                }}
            />
        </LoginContainer>
    )
}
