import { Modal } from "../../../components/Modal";
import EyeOpen from "../../../assets/icons/eyeOpen.svg";
import EyeClose from "../../../assets/icons/eyeClosed.svg";
import { SignInProps } from "../../../interfaces/interfaces.web";
import {LoginAdmin} from "../../../services/admin/api"
import { useState } from "react";
import axios from "axios";
import { LoginUser } from "../../../services/users/singIn/api";
import { GetRole } from "../../../services/role";

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


   
  const handleValidationEmail = async (email:string,password:string) => {
  try {
   
    await LoginAdmin(email,password)
    const role = GetRole()
    if(role?.toLocaleLowerCase() === "admin"){
    onComplete()

   }
  } catch (errorAdmin){
    try{
      
      await LoginUser(email,password)
      const role = GetRole()
      if(role?.toLocaleLowerCase() === "user"){
       onComplete()
      }
      
    }catch (errorUser){

      if(axios.isAxiosError(errorUser) && errorUser.response){
        console.log("status: ", errorUser.response.status)
        alert(`mensagem: ${errorUser.response.data}`)
      }else{
        console.log(errorAdmin)
    }
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
        onHighlightClick()
      }}
      onInformationExtraClick={() => {
        onInformationExtraClick();
      }}
      displayChangeOption={displayChangeOption}
      onClick={() =>  handleValidationEmail(email, password)}
    />
  )

}

