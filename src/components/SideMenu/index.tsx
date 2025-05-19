import { navItemsMobile } from "../Header/data";
import { CloseIcon, MenuItem, MenuItems, SideMenuContainer } from "./styled";
import CloseIconImage from "../../assets/icons/close.svg";
import { SideMenuProps } from "../../interfaces/interfaces.web";



export function SideMenu({ handleCloseMenu, handleOpenModal }: SideMenuProps) {

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
            ) : (
              item
            )}
          </MenuItem>
        ))}
      </MenuItems>
    </SideMenuContainer>
  );
}
