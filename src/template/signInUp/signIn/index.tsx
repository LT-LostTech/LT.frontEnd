import { Modal } from "../../../components/Modal";
import EyeOpen from "../../../assets/icons/eyeOpen.svg";
import EyeClose from "../../../assets/icons/eyeClosed.svg";
import { SignInProps } from "../../../interfaces/interfaces.web";
import { LoginAdmin } from "../../../services/admin/api";
import axios from "axios";
import { LoginUser } from "../../../services/users/singIn/api";
import { GetRole } from "../../../services/role";
import { useAuth } from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function SignIn({
  displayPhoto,
  onHighlightClick,
  onInformationExtraClick,
  onComplete,
  displayChangeOption,
  position,
  textChangeOption,
  textChangeOptionHighlight,
}: SignInProps) {
  const { user, authStatus, handleInputChange, setAuthStatus } = useAuth();
  const navigate = useNavigate()

  const handleValidationEmail = async () => {
    setAuthStatus({ loading: true, error: null, success: false });
    try {
      await LoginAdmin(user.email, user.password);
      const role = GetRole();
      if(window.location.pathname === "/"){
      if (role?.toLocaleLowerCase() === "admin") {
        localStorage.removeItem("token")
        navigate("/backoffice");
        user.email = "";
        user.password = "";
        toast.info("Redirecionando para o Backoffice");
      }
    }
      await LoginAdmin(user.email, user.password);
      if (role?.toLocaleLowerCase() === "admin") {
        
        setTimeout(() => {
          setAuthStatus({ loading: false, error: null, success: true });
          toast.success("Login realizado com sucesso!");
          onComplete();
        }, 500);
      }
      
    } catch (errorAdmin) {
      try {
        await LoginUser(user.email, user.password);
        const role = GetRole();
        if (role?.toLocaleLowerCase() === "user") {
          setTimeout(() => {
            setAuthStatus({ loading: false, error: null, success: true });
            toast.success("Login realizado com sucesso!");
            onComplete();
          }, 500);
        }
      } catch (errorUser) {
        setAuthStatus({ loading: false, error: null, success: true });
        if (axios.isAxiosError(errorUser) && errorUser.response) {
          console.log("status: ", errorUser.response.status);
          toast.error(errorUser.response.data);
        } else {
          console.log(errorAdmin);
        }
      }
    }
  };

  return (
    <Modal
      display={displayPhoto}
      position={position}
      title="Entrar"
      inputs={[
        {
          name: "email",
          placeholder: "Digite o seu e-mail",
          label: "E-mail",
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
          showIcon: true,
          showLabel: true,
          IconOpen: EyeOpen,
          IconClose: EyeClose,
          type: "password",
          onChange: handleInputChange,
          value: user.password,
        },
      ]}
      textButton={authStatus.loading ? "Acessando..." : "Confirmar"}
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
      onClick={() => handleValidationEmail()}
      disabled={authStatus.loading}
    />
  );
}
