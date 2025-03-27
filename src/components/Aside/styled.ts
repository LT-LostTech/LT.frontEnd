import styled from "styled-components";
import { theme } from "../../theme/theme";

export const AsideContainer = styled.aside`
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.gray800};
  padding: 154px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const AsideContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  a {
    color: ${theme.colors.lightGray};
    font-size: 24px;
    font-weight: 600;
    text-align: left;
    transition: text-decoration 0.3s ease;

    &:hover {
      text-decoration: underline;
    }
  }
`;
