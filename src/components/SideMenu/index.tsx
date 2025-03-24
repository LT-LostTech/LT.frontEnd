import { navItems } from "../Header";
import { CloseIcon, MenuItem, MenuItems, SideMenuContainer } from "./styled";
import CloseIconImage from "../../assets/icons/close.svg";


export function SideMenu() {
    return (
        <SideMenuContainer>
            <CloseIcon>
                <img src={CloseIconImage} alt="Close" />
            </CloseIcon>
            <MenuItems>
                {
                    navItems.map((item, key) => (
                        <MenuItem key={key}>{item}</MenuItem>
                    ))
                }
            </MenuItems>
        </SideMenuContainer>
    )
}