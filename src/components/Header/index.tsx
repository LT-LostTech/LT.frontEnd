import {
  HeaderContainer,
  HeaderNav,
  HeaderLogo,
  HeaderButtons,
  MenuButton,
} from "./styled";
import Logo from "../../assets/logo-lost-tech.svg";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { theme } from "../../theme/theme";
import MenuIconImage from "../../assets/icons/menu-hamburguer.svg";
import { useState } from "react";
import { SideMenu } from "../SideMenu";
import { navItems } from "./data";
import { Overlay } from "../../utils/Overlay/styled";
import { SignIn } from "../../template/signInUp/signIn";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalType, setModalType] = useState<"sign in" | "sign up" | null>(
    "sign in"
  );

  const handleOpenModal = (type: "sign in" | "sign up") => {
    setModalType(type);
    setIsOpenModal(!isOpenModal);
  };

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <HeaderLogo
        src={Logo}
        alt="Logo que tenha a palavra Tech e a palavra Lost para lembrar que a LostTech tem objetivo de ajudar aqueles que estão perdidos em T.I"
      />
      <HeaderNav>
        {navItems.map((item, key) => (
          <Link key={key} to={`/${item}`}>
            {item}
          </Link>
        ))}
      </HeaderNav>
      <HeaderButtons>
        <Button
          width="163px"
          height="62px"
          text="Entrar"
          colorText={theme.colors.gray800}
          bgColor={theme.colors.lightGray}
          fontWeight="bold"
          border="none"
          onClick={() => handleOpenModal("sign in")}
        />
        <Button
          width="163px"
          height="62px"
          text="Cadastrar"
          colorText="white"
          bgColor="transparent"
          fontWeight="bold"
          border="1px solid white"
        />
      </HeaderButtons>

      <MenuButton onClick={handleOpenMenu}>
        <img src={MenuIconImage} alt="Ao clicar você abre um menu de opções" />
      </MenuButton>

      {isOpen && (
        <>
          <Overlay onClick={handleOpenMenu} />
          <SideMenu handleCLoseMenu={handleOpenMenu} />
        </>
      )}

      {isOpenModal && modalType === "sign in" && (
        <>
          <Overlay onClick={() => setIsOpenModal(false)}/>
          <SignIn />
        </>
      )}
    </HeaderContainer>
  );
}
