import {
  HeaderContainer,
  HeaderNav,
  HeaderLogo,
  HeaderButtons,
} from "./styled";
import Logo from "../../assets/logo-lost-tech.svg";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import { theme } from "../../theme/theme";

const navItems = ["Home", "Notícias", "Desafios"];

export function Header() {
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
        <Button width="163px" height="62px" text="Entrar" colorText={theme.colors.gray800} bgColor={theme.colors.lightGray} fontWeight="bold" border="none"/>
        <Button width="163px" height="62px" text="Cadastrar" colorText="white" bgColor="transparent" fontWeight="bold" border="1px solid white"/>
      </HeaderButtons>
    </HeaderContainer>
  );
}
