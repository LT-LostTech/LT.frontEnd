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
    padding: 12px 14px;
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
  width: 330px;
  height: 59px;
  gap: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 430px) {
    display: none;
  }
`;


