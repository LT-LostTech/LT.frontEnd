import { navItemsMobile } from "../Header/data";
import { CloseIcon, MenuItem, MenuItems, SideMenuContainer } from "./styled";
import CloseIconImage from "../../assets/icons/close.svg";

interface SideMenuProps {
    handleCLoseMenu: () => void;
}


export function SideMenu({handleCLoseMenu}: SideMenuProps) {
    return (
        <SideMenuContainer>
            <CloseIcon onClick={handleCLoseMenu}>
                <img src={CloseIconImage} alt="Close" />
            </CloseIcon>
            <MenuItems>
                {
                    navItemsMobile.map((item, key) => (
                        <MenuItem key={key}>{item}</MenuItem>
                    ))
                }
            </MenuItems>
        </SideMenuContainer>
    )
}