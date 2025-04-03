import { NotFoundContainer, NotFoundImage, NotFoundTitle } from "./styled";
import notFoundImage from "../../assets/404.svg";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { theme } from "../../theme/theme";

export function NotFound() {
  const navigate = useNavigate();
  return (
    <NotFoundContainer>
      <NotFoundTitle>Página não encontrada</NotFoundTitle>
      <NotFoundImage src={notFoundImage} />
      <Button
        bgColor={theme.colors.gray800}
        border="0"
        colorText={theme.colors.white}
        fontWeight="600"
        height="84px"
        text="Voltar para home"
        width="90%"
        onClick={() => {
          navigate("/");
        }}
      />
    </NotFoundContainer>
  );
}
