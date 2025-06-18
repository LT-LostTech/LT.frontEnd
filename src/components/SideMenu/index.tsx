import { navItemsMobile } from "../Header/data";
import { CloseIcon, MenuItem, MenuItems, SideMenuContainer } from "./styled";
import CloseIconImage from "../../assets/icons/close.svg";
import { SideMenuProps } from "../../interfaces/interfaces.web";
import { useNavigate } from "react-router-dom";



export function SideMenu({ handleCloseMenu, handleOpenModal }: SideMenuProps) {

  const navigate = useNavigate()

  return (
    <SideMenuContainer>
      <CloseIcon onClick={handleCloseMenu}>
        <img src={CloseIconImage} alt="Close" />
      </CloseIcon>
      <MenuItems>
        {navItemsMobile.map((item, key) => (
          <MenuItem key={key}>
            {(item === "Entrar") ? (
            <a onClick={() => {
              handleCloseMenu();
              handleOpenModal("sign in");
            }}>
                {item}
              </a>
            ) : (item === "Cadastrar") ? (
              <a onClick={() => {
                handleCloseMenu();
                handleOpenModal("sign up");
              }}>
                {item}
              </a>
            ) : (item === "Roadmaps") ? (
              <a onClick={() => {
                handleCloseMenu();
                navigate("/roadmaps");
              }}>{item}</a>
            ) : (item === "Desafios") ? (
              <a onClick={() => {
                handleCloseMenu();
                navigate("/desafios");
              }}>{item}</a>
            ) : (item === "Notícias") ? (
              <a onClick={() => {
                handleCloseMenu();
                navigate("/noticias");
              }}>{item}</a>
            ) : (
              item
            )}
          </MenuItem>
        ))}
      </MenuItems>
    </SideMenuContainer>
  );
}
