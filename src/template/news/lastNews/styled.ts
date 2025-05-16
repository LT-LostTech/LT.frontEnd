import styled from "styled-components";

export const LastNewsSection = styled.section`
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 32px;
    margin-top: 32px;
`

export const LastNewsTitle = styled.h2`
    font-size: 40px;
    font-weight: 600;
    color: #fff;

    @media (max-width: 440px) {
        font-size: 28px;
    }
`

export const LastNewsContainer = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
`