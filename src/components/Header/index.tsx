import {
  HeaderContainer,
  HeaderNav,
  HeaderLogo,
  HeaderButtons,
  MenuButton,
} from "./styled";
import Logo from "../../assets/logo-lost-tech.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { theme } from "../../theme/theme";
import MenuIconImage from "../../assets/icons/menu-hamburguer.svg";
import { useState } from "react";
import { SideMenu } from "../SideMenu";
import { navItems } from "./data";
import { Overlay } from "../../utils/Overlay/styled";
import { SignIn } from "../../template/signInUp/signIn";
import { SignUp } from "../../template/signInUp/signUp";
import { PasswordFlow } from "../../template/signInUp/forgotPassword";
import { Aside } from "../Aside";

interface HeaderProps {
  display: string;
  displayMenu: string;
  position: string;
  borderRadius: string;
  displayMenuTablet: string
}

export function Header({
  display,
  position,
  borderRadius,
  displayMenu,
  displayMenuTablet
}: HeaderProps) {
  const location = useLocation();
  const navigate = useNavigate()
  const isDashBoard = location.pathname.startsWith("/backoffice/dashboard");
  const isSignInUp = location.pathname === "/";

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalType, setModalType] = useState<
    "sign in" | "sign up" | "forgot password" | null
  >("sign in");

  const handleOpenModal = (type: "sign in" | "sign up" | "forgot password") => {
    setModalType(type);
    setIsOpenModal(!isOpenModal);
    setIsOpen(false);
  };

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const handleCloseAside = () => {
    setIsOpen(false);
  };

  return (
    <HeaderContainer
      borderRadius={borderRadius}
      position={position || ""}
      display={display}
    >
      <HeaderLogo
        src={Logo}
        alt="Logo que tenha a palavra Tech e a palavra Lost para lembrar que a LostTech tem objetivo de ajudar aqueles que estão perdidos em T.I"
        onClick={() => {
          if (isDashBoard) {
            navigate("/backoffice/dashboard");
          } else {
            navigate("/");
          }
        }}
      />
      <HeaderNav display={display}>
        {navItems.map((item, key) => (
          <Link key={key} to={`/${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}>
            {item}
          </Link>
        ))}
      </HeaderNav>
      <HeaderButtons display={display}>
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
          onClick={() => handleOpenModal("sign up")}
        />
      </HeaderButtons>

      <MenuButton onClick={handleOpenMenu} displayMenu={displayMenu} displayMenuTablet={displayMenuTablet}>
        <img src={MenuIconImage} alt="Ao clicar você abre um menu de opções" />
      </MenuButton>

      {isOpen && (
        <>
          <Overlay onClick={handleCloseMenu} />
          {isDashBoard ? (
            <Aside className={isOpen ? "open" : ""} handleCloseAside={handleCloseAside || ''} />
          ) : (
            <SideMenu
              handleCloseMenu={handleCloseMenu}
              handleOpenModal={handleOpenModal}
            />
          )}
        </>
      )}

      {isOpenModal && modalType === "sign in" && isSignInUp && (
        <>
          <Overlay onClick={() => setIsOpenModal(false)} />
          <SignIn
            displayPhoto="block"
            position="fixed"
            displayChangeOption="flex"
            textChangeOption="Não tem uma conta? Se "
            textChangeOptionHighlight="Cadastre"
            onHighlightClick={() => setModalType("sign up")}
            onInformationExtraClick={() => setModalType("forgot password")}
            onComplete={() => setIsOpenModal(false)}
          />
        </>
      )}

      {isOpenModal && modalType === "sign up" && isSignInUp && (
        <>
          <Overlay onClick={() => setIsOpenModal(false)} />
          <SignUp
            displayPhoto="block"
            onHighlightClick={() => setModalType("sign in")}
            onInformationExtraClick={() => setModalType("forgot password")}
            onComplete={() => setIsOpenModal(false)}
          />
        </>
      )}

      {isOpenModal && modalType === "forgot password" && (
        <>
          <Overlay onClick={() => setIsOpenModal(false)} />
          <PasswordFlow
            displayPhoto="block"
            position="fixed"
            onComplete={() => setIsOpenModal(false)}
          />
        </>
      )}
    </HeaderContainer>
  );
}
