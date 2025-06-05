import axios from "axios";
import { Modal } from "../../../../../components/Modal";
import { useAuth } from "../../../../../hooks/useAuth";
import { SendEmailProps } from "../../../../../interfaces/interfaces.web";
import { ForgotPasswordApi } from "../../../../../services/users/singIn/forgotPassword/api";
import { toast } from "react-toastify";

export function SendEmail({
  displayPhoto,
  onHighlightClick,
  onClick,
  position,
}: SendEmailProps) {
  const { user, handleInputChange, authStatus, setAuthStatus } = useAuth();

  const handleSendEmail = async () => {
    setAuthStatus({ loading: true, error: null, success: false });
    try {
      await ForgotPasswordApi(user.email);
      setTimeout(() => {
        setAuthStatus({ loading: false, error: null, success: true });
        toast.success("E-mail enviado com sucesso!");
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
      title="Recuperar senha"
      inputs={[
        {
          name: "email",
          placeholder: "Digite o seu e-mail",
          label: "E-mail",
          type: "email",
          showIcon: false,
          showLabel: true,
          IconOpen: "",
          IconClose: "",
          value: user.email,
          onChange: handleInputChange,
        },
      ]}
      textButton={authStatus.loading ? "Cadastrando..." : "Confirmar"}
      displayInformationExtra="none"
      onHighlightClick={onHighlightClick}
      displayChangeOption="none"
      onClick={() => handleSendEmail()}
      disabled={authStatus.loading}
    />
  );
}
