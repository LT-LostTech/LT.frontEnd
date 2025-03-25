import styled from "styled-components";
import { theme } from "../../theme/theme";

export const ModalContainer = styled.div`
    width: 906px;
    height: 605px;
    background-color: ${props => props.theme.colors.white};
    border-radius: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const ModalPhoto = styled.img`
    width: 100%;
    height: 100%;
`

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px 55px;
`

export const ModalTitle = styled.h2`
    font-size: 42px;
    font-weight: 600;
    color: ${theme.colors.black};
`

export const ModalForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 22px;
`

export const ModalChangeOption = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    width: 189px;
    height: 21px;
`

export const ModalChangeLine = styled.hr`
    width: 120px;
    height: 1px;
    background-color: ${theme.colors.black};
`
export const ModalChangeOptionText = styled.p`
    font-size: 16px;
    font-weight: 600;
    color: ${theme.colors.black};
    border: none;
    

    .highlight {
        color: ${theme.colors.blue400};
        cursor: pointer;
    }
`
