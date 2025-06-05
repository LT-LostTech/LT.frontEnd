import { Modal } from "../../../components/Modal";
import EyeOpen from "../../../assets/icons/eyeOpen.svg";
import EyeClose from "../../../assets/icons/eyeClosed.svg";
import { SignUpProps } from "../../../interfaces/interfaces.web";
import { RegisterUser } from "../../../services/users/SingUp/api";
import axios from "axios";
import { LoginUser } from "../../../services/users/singIn/api";
import { useAuth } from "../../../hooks/useAuth";
import { toast } from "react-toastify";

export function SignUp({
  displayPhoto,
  onHighlightClick,
  onInformationExtraClick,
  onComplete,
}: SignUpProps) {
  const { user, handleInputChange, authStatus, setAuthStatus } = useAuth();
  //cursor not allowed

  const handleValidationRegister = async () => {
    setAuthStatus({ loading: true, error: null, success: false });
    try {
      await RegisterUser(user.username, user.email, user.password);
      await LoginUser(user.email, user.password);
      setTimeout(() => {
        setAuthStatus({ loading: false, error: null, success: true });
        toast.success("Cadastro realizado com sucesso!");
        onComplete();
      }, 500);
    } catch (error) {
      setAuthStatus({ loading: false, error: null, success: true });
      if (axios.isAxiosError(error) && error.response) {
        console.log("status: ", error.status);
        console.log(error);
        toast.error(error.response.data);

        console.log(`erro inesperado: ${error}`);
      }
    }
  };
  return (
    <Modal
      display={displayPhoto}
      position="fixed"
      title="Cadastro"
      inputs={[
        {
          name: "username",
          placeholder: "Digite o seu nome",
          label: "Nome",
          type: "text",
          showIcon: false,
          showLabel: true,
          IconOpen: "",
          IconClose: "",
          onChange: handleInputChange,
          value: user.username,
        },
        {
          name: "email",
          placeholder: "Digite o seu e-mail",
          label: "E-mail",
          type: "email",
          showIcon: false,
          showLabel: true,
          IconOpen: "",
          IconClose: "",
          onChange: handleInputChange,
          value: user.email,
        },
        {
          name: "password",
          placeholder: "Digite a sua senha",
          label: "Senha",
          type: "password",
          showIcon: true,
          showLabel: true,
          IconOpen: EyeOpen,
          IconClose: EyeClose,
          onChange: handleInputChange,
          value: user.password,
        },
      ]}
      textButton={authStatus.loading ? "Cadastrando..." : "Confirmar"}
      textChangeOption="Já tem uma conta? Faça "
      textChangeOptionHighlight="Login"
      displayInformationExtra="none"
      onHighlightClick={() => {
        onHighlightClick();
      }}
      onInformationExtraClick={() => {
        onInformationExtraClick();
      }}
      displayChangeOption="flex"
      onClick={() => {
        handleValidationRegister();
      }}
      disabled={authStatus.loading}
    />
  );
}
