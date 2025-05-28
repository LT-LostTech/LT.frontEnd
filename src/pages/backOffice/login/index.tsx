import { LoginContainer } from "./styled";
import { useNavigate } from "react-router-dom";
import { SignIn } from "../../../template/signInUp/signIn";

export function BackOfficeLogin() {
  const navigate = useNavigate();
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
