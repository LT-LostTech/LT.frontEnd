import { Modal } from "../../../../../components/Modal";
import EyeOpen from "../../../../../assets/icons/eyeOpen.svg";
import EyeClose from "../../../../../assets/icons/eyeClosed.svg";
import { TypeCodeProps } from "../../../../../interfaces/interfaces.web";
import { useAuth } from "../../../../../hooks/useAuth";
import { CodeVerificationApi } from "../../../../../services/users/singIn/forgotPassword/api";
import axios from "axios";
import { toast } from "react-toastify";
export function TypeCode({ displayPhoto, onClick, position }: TypeCodeProps) {
  const { user, handleInputChange, authStatus, setAuthStatus } = useAuth();

  const handleVerificationCode = async () => {
    setAuthStatus({ loading: true, error: null, success: false });
    try {
      await CodeVerificationApi(user.email, user.code);
      setTimeout(() => {
        setAuthStatus({ loading: false, error: null, success: true });
        toast.success("Código verificado com sucesso!");
        onClick();
      }, 500);
    } catch (error) {
      setAuthStatus({ loading: false, error: null, success: false });
      if (axios.isAxiosError(error) && error.response) {
        console.log("status: ", error.response.status);
        toast.error(error.response.data);
      }
    }
  };
  return (
    <Modal
      display={displayPhoto}
      position={position}
      title="Código de verificação"
      inputs={[
        {
          name: "email",
          label: "Digite o email",
          placeholder: "Digite o email",
          showIcon: true,
          showLabel: true,
          IconOpen: EyeOpen,
          IconClose: EyeClose,
          onChange: handleInputChange,
          value: user.email,
          type: "email",
        },
        {
          name: "code",
          label: "Confirme o  código",
          placeholder: "Confirme o código",
          showIcon: true,
          showLabel: true,
          IconOpen: EyeOpen,
          IconClose: EyeClose,
          onChange: handleInputChange,
          value: user.code,
          type: "password",
        },
      ]}
      textButton={authStatus.loading ? "Acessando..." : "Confirmar"}
      displayInformationExtra="none"
      displayChangeOption="none"
      onClick={() => {
        handleVerificationCode();
      }}
      disabled={authStatus.loading}
    />
  );
}
