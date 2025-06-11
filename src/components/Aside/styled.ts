import styled from "styled-components";
import { theme } from "../../theme/theme";

export const AsideContainer = styled.aside`
  width: 338px;
  height: 100%;
  background-color: ${theme.colors.gray800};
  padding: 89px 47px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  z-index: 1050;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;

  @media (min-width: 1025px) {
    transform: translateX(0);
    position: static;
  }

  /* Mobile: Hidden by default, shown when open */
  @media (max-width: 1024px) {
    transform: translateX(100%);
  }

  &.open {
    transform: translateX(0);
  }
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

export const CloseIcon = styled.button`
  display: none;

  @media (max-width: 1024px) {
    display: flex;
    width: 48px;
    height: 48px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;
