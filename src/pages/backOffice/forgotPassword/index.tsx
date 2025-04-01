import { PasswordFlow } from "../../../template/signInUp/forgotPassword";
import { ForgotPasswordContainer } from "./styled";
import { useNavigate } from "react-router-dom";

export function ForgotPassword() {
  const navigate = useNavigate();

  return (
    <ForgotPasswordContainer>
      <PasswordFlow
        displayPhoto="none"
        position=""
        onComplete={() => {
          navigate("/backoffice/");
        }}
      />
    </ForgotPasswordContainer>
  );
}
