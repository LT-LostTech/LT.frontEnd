import { navItemsMobile } from "../Header/data";
import { CloseIcon, MenuItem, MenuItems, SideMenuContainer } from "./styled";
import CloseIconImage from "../../assets/icons/close.svg";

interface SideMenuProps {
  handleCloseMenu: () => void;
  handleOpenModal: (type: "sign in" | "sign up" | "forgot password") => void;
}

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
            ) : (
              <a onClick={() => {
                handleCloseMenu();
                handleOpenModal("sign up");
              }}>
                {item}
              </a>
            )}
          </MenuItem>
        ))}
      </MenuItems>
    </SideMenuContainer>
  );
}
