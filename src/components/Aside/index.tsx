import { AsideContainer, AsideContent, CloseIcon } from "./styled";
import { Button } from "../Button";
import { NavLink, useNavigate } from "react-router-dom";
import { theme } from "../../theme/theme";
import CloseIconImage from "../../assets/icons/close.svg";
import { asideProps } from "../../interfaces/interfaces.web";

export function Aside({ className, handleCloseAside }: asideProps) {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/backoffice");
    localStorage.removeItem('token')
    handleCloseAside();
  };

  return (
    <AsideContainer className={className}>
      <CloseIcon>
        <img src={CloseIconImage} alt="Close" onClick={handleCloseAside} />
      </CloseIcon>
      <AsideContent>
        <NavLink to="/backoffice/dashboard/roadmaps">Roadmaps</NavLink>
        <NavLink to="/backoffice/dashboard/challenges">Challenges</NavLink>
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
          handleLogout();
        }}
      />
    </AsideContainer>
  );
}
