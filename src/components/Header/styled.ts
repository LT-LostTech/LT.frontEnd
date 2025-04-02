import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;
  background-color: ${(props) => props.theme.colors.gray800};
  display: flex;
  align-items: center;
  padding: 12px 135px;
  justify-content: space-between;


  @media (max-width: 1024px) {
    padding: 12px 12px;
  }
`;

export const HeaderLogo = styled.img`
  width: 130px;
  height: 100px;
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 36px;

  @media (max-width: 1024px) {
    display: none;
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

export const HeaderButtons = styled.div`
  width: 349px;
  height: 62px;
  gap: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1024px) {
    display: none;
  }

    button {
      width: 128px;
      height: 54px;
      gap: 16px;
    }
  
`;

export const MenuButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  border: none;
  display: none;
  background-color: transparent;

  @media (max-width: 1024px) {
    display: block;
  }
`;


