import styled from "styled-components";
import { theme } from "../../theme/theme";

export const AsideContainer = styled.aside`
  width: 338px;
  height: 100vh;
  background-color: ${theme.colors.gray800};
  padding: 89px 47px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const AsideContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 44px;

  a {
    color: ${theme.colors.lightGray};
    font-size: 24px;
    font-weight: 600;
    text-align: left;
    text-decoration: none;
    transition: text-decoration 0.3s ease-in-out;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;
