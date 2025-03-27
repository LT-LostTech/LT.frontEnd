import styled from "styled-components";

export const IconToggleContainer = styled.button`
    width: 24px;
    height: 24px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    position: absolute;
    right: 80px;

    @media (max-width: 1024px) {
        right: 30px;
    }
`

export const IconToggleImage = styled.img`
    width: 24px;
    height: 24px;
`

