import styled from "styled-components";

interface HeaderProps {
  display: string;
}

export const HeaderContainer = styled.header<HeaderProps>`
  width: 100%;
  height: 100px;
  background-color: ${(props) => props.theme.colors.gray800};
  display: flex;
  align-items: center;
  padding: 12px 135px;
  justify-content: ${(props) => props.display === "none" ? "center" : "space-between"};


  @media (max-width: 1024px) {
    padding: 12px 12px;
  }
`;

export const HeaderLogo = styled.img`
  width: 130px;
  height: 100px;
`;

export const HeaderNav = styled.nav<HeaderProps>`
  display: ${(props) => props.display};
  align-items: center;
  gap: 36px;

  @media (max-width: 1024px) {
    gap: 24px;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme['gray800']};
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

export const HeaderButtons = styled.div<HeaderProps>`
  width: 349px;
  height: 62px;
  gap: 16px;
  display: ${(props) => props.display};
  align-items: center;
  justify-content: space-between;

  @media (max-width: 430px) {
    display: none;
  }

  @media (max-width: 1025px) {
    width: 272px;
    height: 54px;

    button {
      width: 128px;
      height: 54px;
      gap: 16px;
    }
  }
`;

export const MenuButton = styled.button<HeaderProps>`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  border: none;
  display: none;
  background-color: transparent;


  @media (max-width: 430px) {
    display: ${(props) => props.display};
  }
`;


