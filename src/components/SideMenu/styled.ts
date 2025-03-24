import styled from "styled-components";
import { theme } from "../../theme/theme";

export const SideMenuContainer = styled.div`
    width: 223px;
    height: 100%;
    background-color: ${theme.colors.gray800};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 12px;
`;

export const CloseIcon = styled.button`
    width: 48px;
    height: 48px;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

export const MenuItems = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 42px;
    text-align: right;
`;

export const MenuItem = styled.a`
    font-size: 24px;
    font-weight: 700;
    color: ${theme.colors.lightGray};
    text-decoration: none;
`;