import styled from "styled-components";
import { theme } from "../../theme/theme";


export const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 8px;
    background-color: transparent;
    flex-direction: column;
    width: 100%;
`

export const InputLabel = styled.label`
    font-size: 16px;
    font-weight: 700;
    height: fit-content;
`
export const InputFieldWithContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`

export const InputField = styled.input`
    width: 100%;
    border: 0;
    border-bottom: 1px solid ${theme.colors.gray400};
    height: 55px;
    background-color: transparent;
    outline: none;
    color: ${theme.colors.black};
    padding: 16px 24px;
    position: relative;

    

    &::placeholder{
        color: ${theme.colors.gray400};
    }
`
