import { NavLink } from "react-router-dom";
import { AsideContainer, AsideContent } from "./styled";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
import { theme } from "../../theme/theme";

export function Aside() {
  const navigate = useNavigate();
  return (
    <AsideContainer>
      <AsideContent>
        <NavLink to="backoffice/dashboard/roadmaps">Roadmaps</NavLink>
        <NavLink to="backoffice/dashboard/challenges">Challenges</NavLink>
      </AsideContent>
      <Button
        width="100%"
        height="55px"
        colorText={theme.colors.black}
        bgColor={theme.colors.lightGray}
        fontWeight="600"
        text="Sair"
        border="none"
        onClick={() => {
          navigate("backoffice/");
        }}
      />
    </AsideContainer>
  );
}
