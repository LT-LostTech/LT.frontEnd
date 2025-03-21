import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px 24px;
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
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

export const InputField = styled.input`
    width: 100%;
    border-bottom: 1px solid ${props => props.theme.colors.lightGray};
    border: 0;
    background-color: transparent;
`

export const InputIcon = styled.img`
    width: 24px;
    height: 24px;
`