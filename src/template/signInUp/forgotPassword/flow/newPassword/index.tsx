import { Modal } from "../../../../../components/Modal";
import EyeOpen from "../../../../../assets/icons/eyeOpen.svg";
import EyeClose from "../../../../../assets/icons/eyeClosed.svg";
import { NewPasswordProps } from "../../../../../interfaces/interfaces.web";
import { useAuth } from "../../../../../hooks/useAuth";
import { NewPasswordApi } from "../../../../../services/users/singIn/forgotPassword/api";
import axios from "axios";

export function NewPassword({
  displayPhoto,
  onClick,
  position,
}: NewPasswordProps) {

const {user,handleInputChange,authStatus,setAuthStatus} = useAuth()

const handleNewPassword = async () => {
setAuthStatus({ loading: true, error: null, success: false });
try{
  if(user.password !== user.newPassword)
    await NewPasswordApi(user.email,user.newPassword)
    setTimeout(() => {
      setAuthStatus({ loading: false, error: null, success: true });
      onClick();
    },500)

}catch(error){
  setAuthStatus({ loading: false, error: null, success: false });
  if (axios.isAxiosError(error) && error.response) {
    console.log("status: ", error.response.status);
    alert(`mensagem: ${error.response.statusText}`);
  }
  console.log(error)
}

}

  
  return (
    <Modal
      display={displayPhoto}
      position={position}
      title="Nova senha"
      inputs={[
          { name: "email",
          placeholder: "Digite o email",
          label: "E-mail",
          showIcon: true,
          showLabel: true,
          IconOpen: EyeOpen,
          IconClose: EyeClose,
          type: "email",
          value: user.email,
          onChange: handleInputChange,

        },
        { name: "password",
          placeholder: "Digite a senha",
          label: "Senha",
          showIcon: true,
          showLabel: true,
          IconOpen: EyeOpen,
          IconClose: EyeClose,
          type: "password",
          value: user.password,
          onChange: handleInputChange,

        },
        {
          name: "newPassword",
          placeholder: "Digite a senha novamente",
          label: "Senha",
          showIcon: true,
          showLabel: true,
          IconOpen: EyeOpen,
          IconClose: EyeClose,
          type: "password",
          value: user.newPassword,
          onChange: handleInputChange,
        },
      ]}
      textButton={authStatus.loading ? "Cadastrando..." : "Confirmar"}
      displayInformationExtra="none"
      displayChangeOption="none"
      onClick={() => {
        handleNewPassword()
      }}
      disabled={authStatus.loading}
    />
  );
}
