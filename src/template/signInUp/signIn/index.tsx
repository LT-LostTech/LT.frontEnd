import { Modal } from "../../../components/Modal";
import EyeOpen from "../../../assets/icons/eyeOpen.svg";
import EyeClose from "../../../assets/icons/eyeClosed.svg";
import { SignInProps } from "../../../interfaces/interfaces.web";
import {LoginAdmin} from "../../../services/admin/api"
import { useState } from "react";
import axios from "axios";

export function SignIn({
  displayPhoto,
  onHighlightClick,
  onInformationExtraClick,
  onComplete,
  displayChangeOption,
  position,
  textChangeOption,
  textChangeOptionHighlight,
}: SignInProps){

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
} 

const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
}

   
const handleValidationEmail = async () => {
  try {
    
    await LoginAdmin(email,password)
    onComplete()
    
  } catch (error){
      if(axios.isAxiosError(error) && error.response){
        console.log("status: ", error.response.status)
        alert(`mensagem: ${error.response.data}`)
      }else{
        console.log("erro inesperado")
      }

  }
}
 

  return (
    <Modal
      display={displayPhoto}
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
          onChange: handleEmailChange,
          value:email
        },
        {
          placeholder: "Digite a sua senha",
          label: "Senha",
          showIcon: true,
          showLabel: true,
          IconOpen: EyeOpen,
          IconClose: EyeClose,
          type: "password",
          onChange: handlePasswordChange,
          value:password
        
        },
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
      onClick={handleValidationEmail}
    />
  );
}
