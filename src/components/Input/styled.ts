import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 8px;
    background-color: transparent;
    width: 100%;
`

export const InputLabel = styled.label`
    font-size: 16px;
    font-weight: 700;
`
export const InputFieldWithContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`

export const InputField = styled.input`
    width: 100%;
    border: 0;
    border-bottom: 1px solid ${props => props.theme.colors.lightGray};
    height: 55px;
    background-color: transparent;
    outline: none;
    color: ${props => props.theme.colors.lightGray};
    padding: 16px 24px;
    position: relative;
    

    &::placeholder{
        color: ${props => props.theme.colors.lightGray};
    }
`

export const InputIcon = styled.img`
    width: 24px;
    height: 24px;
    position: absolute;
    right: 116px;
    cursor: pointer;
`