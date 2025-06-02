import { LoginContainer } from "./styled";
import { Navigate, useNavigate } from "react-router-dom";
import { SignIn } from "../../../template/signInUp/signIn";
import { GetRole } from "../../../services/role";

export function BackOfficeLogin() {
  const navigate = useNavigate();
  const role = GetRole()
  const token = localStorage.getItem('token')
  if(token){
    if(role?.toLocaleLowerCase() !== "admin"){
    return<Navigate to={'/'}/>
  }
  }
  
  return (
    <LoginContainer>
      <SignIn
        displayPhoto="none"
        position=""
        displayChangeOption="none"
        textChangeOption=""
        textChangeOptionHighlight=""
        onHighlightClick={() => {
          navigate("/backoffice/register");
        }}
        onInformationExtraClick={() => {
          navigate("/backoffice/forgot-password");
        }}
        onComplete={() => {
          navigate("/backoffice/dashboard/roadmaps");
        }}
       
      />
    </LoginContainer>
  );
}
