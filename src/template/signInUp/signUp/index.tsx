import { Modal } from "../../../components/Modal";
import EyeOpen from "../../../assets/icons/eyeOpen.svg";
import EyeClose from "../../../assets/icons/eyeClosed.svg";
import { SignUpProps } from "../../../interfaces/interfaces.web";
import { RegisterUser } from "../../../services/users/SingUp/api";
import { useState } from "react";
import axios from "axios";


export function SignUp({
  displayPhoto,
  onHighlightClick,
  onInformationExtraClick,
  onComplete,
}: SignUpProps) {

  const [username,setUsername] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  

  const handleValidationRegister = async (username:string,email:string,password:string) => {
    try{
      RegisterUser(username,email,password)
       onComplete();
    }catch (error){
     if(axios.isAxiosError(error) && error.response){
        console.log("status: ", error.status)
        console.log(`mensagem: ${error.response.data}`)
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
          onChange:(e) => setUsername(e.target.value),
          value:username
        },
        {
          placeholder: "Digite o seu e-mail",
          label: "E-mail",
          type: "email",
          showIcon: false,
          showLabel: true,
          IconOpen: "",
          IconClose: "",
          onChange:(e) => setEmail(e.target.value),
          value:email
        },
        {
          placeholder: "Digite a sua senha",
          label: "Senha",
          type: "password",
          showIcon: true,
          showLabel: true,
          IconOpen: EyeOpen,
          IconClose: EyeClose,
          onChange:(e) => setPassword(e.target.value),
          value:password
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
       handleValidationRegister(username, email, password)
      }}
    />
  );
}
