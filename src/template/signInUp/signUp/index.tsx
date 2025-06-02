import { Modal } from "../../../components/Modal";
import EyeOpen from "../../../assets/icons/eyeOpen.svg";
import EyeClose from "../../../assets/icons/eyeClosed.svg";
import { SignUpProps } from "../../../interfaces/interfaces.web";
import { RegisterUser } from "../../../services/users/singUp/api";
import axios from "axios";
import { LoginUser } from "../../../services/users/singIn/api";
import { useAuth } from "../../../hooks/useAuth";


export function SignUp({
  displayPhoto,
  onHighlightClick,
  onInformationExtraClick,
  onComplete,
}: SignUpProps) {

  const {user,handleInputChange,} = useAuth()

  

  const handleValidationRegister = async () => {
    try{
      await RegisterUser(user.username,user.email,user.password)
      await LoginUser(user.email,user.password)
       onComplete();
    }catch (error){
     if(axios.isAxiosError(error) && error.response){
        console.log("status: ", error.status)
        alert(`mensagem: ${error.response.data}
        `)
      }
  }
  }
  return (
    <Modal
      display={displayPhoto}
      position="fixed"
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
          onChange:handleInputChange,
          value:user.username
        },
        {
          placeholder: "Digite o seu e-mail",
          label: "E-mail",
          type: "email",
          showIcon: false,
          showLabel: true,
          IconOpen: "",
          IconClose: "",
          onChange:handleInputChange,
          value:user.email
        },
        {
          placeholder: "Digite a sua senha",
          label: "Senha",
          type: "password",
          showIcon: true,
          showLabel: true,
          IconOpen: EyeOpen,
          IconClose: EyeClose,
          onChange:handleInputChange,
          value:user.password
        },
      ]}
      textButton="Confirmar"
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
       handleValidationRegister
      }}
    />
  );
}
