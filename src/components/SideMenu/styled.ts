import styled from "styled-components";
import { theme } from "../../theme/theme";

export const SideMenuContainer = styled.div`
    width: 223px;
    height: 100%;
    background-color: ${theme.colors.gray800};
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 24px 12px;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1001;
    animation: slide-in 0.5s forwards;

    @keyframes slide-in {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0);
        }
    }
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