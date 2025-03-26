import { navItemsMobile } from "../Header/data";
import { CloseIcon, MenuItem, MenuItems, SideMenuContainer } from "./styled";
import CloseIconImage from "../../assets/icons/close.svg";
import { useState } from "react";

import { Overlay } from "../../utils/Overlay/styled";
import { SignIn } from "../../template/signInUp/signIn";
import { SignUp } from "../../template/signInUp/signUp";
import { PasswordFlow } from "../../template/signInUp/forgotPassword";

interface SideMenuProps {
  handleCloseMenu: () => void;
}

export function SideMenu({ handleCloseMenu }: SideMenuProps) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalType, setModalType] = useState<
    "sign in" | "sign up" | "forgot password" | null
  >("sign in");

  const handleOpenModal = (type: "sign in" | "sign up" | "forgot password") => {
    setModalType(type);
    setIsOpenModal(!isOpenModal);
    handleCloseMenu();
  };

  return (
    <SideMenuContainer>
      <CloseIcon onClick={handleCloseMenu}>
        <img src={CloseIconImage} alt="Close" />
      </CloseIcon>
      <MenuItems>
        {navItemsMobile.map((item, key) => (
          <MenuItem key={key}>
            {(item === "Entrar") ? (
            <a onClick={() => handleOpenModal("sign in")}>
                {item}
              </a>
            ) : (
              item
            )}
          </MenuItem>
        ))}
      </MenuItems>


      {isOpenModal && modalType === "sign in" && (
        <>
          <Overlay onClick={() => setIsOpenModal(false)} />
          <SignIn
            onHighlightClick={() => setModalType("sign up")}
            onInformationExtraClick={() => setModalType("forgot password")}
            onComplete={() => setIsOpenModal(false)}
          />
        </>
      )}

      {isOpenModal && modalType === "sign up" && (
        <>
          <Overlay onClick={() => setIsOpenModal(false)} />
          <SignUp
            onHighlightClick={() => setModalType("sign in")}
            onInformationExtraClick={() => setModalType("forgot password")}
            onComplete={() => setIsOpenModal(false)}
          />
        </>
      )}

      {isOpenModal && modalType === "forgot password" && (
        <>
          <Overlay onClick={() => setIsOpenModal(false)} />
          <PasswordFlow onComplete={() => setIsOpenModal(false)} />
        </>
      )}
    </SideMenuContainer>
  );
}
