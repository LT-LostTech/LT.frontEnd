import { Modal } from "../../../components/Modal";
import EyeOpen from "../../../assets/icons/eyeOpen.svg";
import EyeClose from "../../../assets/icons/eyeClosed.svg";
import { SignInProps } from "../../../interfaces/interfaces.web";
import {LoginAdmin} from "../../../services/admin/api"
import { use, useEffect, useState } from "react";
import axios from "axios";
import { LoginUser } from "../../../services/users/singIn/api";

export function SignIn({
  displayPhoto,
  onHighlightClick,
  onInformationExtraClick,
  onComplete,
  displayChangeOption,
  position,
  textChangeOption,
  textChangeOptionHighlight,
  onCompleteUser,
}: SignInProps){

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [isAuth,setIsAuth] = useState<Boolean | null>(false)

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
} 

const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
}

   
const handleValidationEmail = async (email:string,password:string,isAdmin:boolean,onComplete: () => void, onCompleteUser: () => void) => {

  try {

   if(isAdmin){
    await LoginAdmin(email,password)
    onComplete()

   }else{

    await LoginUser(email,password)
    onCompleteUser()
   }
        
  } catch (error){
      if(axios.isAxiosError(error) && error.response){
        console.log("status: ", error.response.status)
        alert(`mensagem: ${error.response.data}`)
      }else{
        console.log("erro inesperado",error)
    }
  }
}


useEffect(() => {
  const token = localStorage.getItem('token')
  if(token){
    setIsAuth(true)
   onComplete()
  }
},[])
 


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
      onClick={() =>  handleValidationEmail(email, password, false, onComplete, onCompleteUser)}
    />
  );
}
