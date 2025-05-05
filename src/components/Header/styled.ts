import styled from "styled-components";
import { theme } from "../../theme/theme";

interface HeaderContainerProps {
  position: string;
  display: string;
  borderRadius: string;
}

interface DisplayProps {
  display: string;
}

interface DisplayHamburguerProps {
  displayMenu: string;
  displayMenuTablet: string;
}

export const HeaderContainer = styled.header<HeaderContainerProps>`
  width: ${(props) => (props.borderRadius === "16px" ? "90%" : "100%")};
  height: 100px;
  background-color: ${theme.colors.gray800};
  display: flex;
  align-items: center;
  padding: 12px 0;
  justify-content: space-between;
  position: ${(props) => props.position};
  border-radius: ${(props) => props.borderRadius};
  z-index: 1000;
  margin-top: 20px;
  justify-content: space-around;

  @media (max-width: 1024px) {
    padding: 12px 12px;
    justify-content: space-between;
  }
`;

export const HeaderLogo = styled.img`
  width: 130px;
  height: 100px;
  cursor: pointer;
`;

export const HeaderNav = styled.nav<DisplayProps>`
  display: ${(props) => props.display};
  align-items: center;
  gap: 36px;

  @media (max-width: 1024px) {
    display: none;
  }

  a {
    text-decoration: none;
    color: ${theme.colors.gray800};
    font-size: 20px;
    color: white;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 430px) {
    display: none;
  }
`;

export const HeaderButtons = styled.div<DisplayProps>`
  width: auto;
  height: 62px;
  gap: 16px;
  display: ${(props) => props.display};
  align-items: center;
  gap: 18px;

  @media (max-width: 1024px) {
    display: none;
  }

  button {
    width: 128px;
    height: 54px;
    gap: 16px;
  }
`;

export const MenuButton = styled.button<DisplayHamburguerProps>`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  border: none;
  display: none;
  background-color: transparent;

  @media (max-width: 1024px) {
    display: flex;
  }
`;
