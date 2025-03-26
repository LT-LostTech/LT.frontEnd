import { useState } from "react";
import { IconToggle } from "../../utils/IconToggle";
import { InputContainer, InputField, InputFieldWithContainer, InputLabel } from "./styled";

export interface InputProps {
    placeholder: string;
    label?: string;
    showIcon: boolean;
    showLabel: boolean;
    IconOpen: string;
    IconClose: string;
    type?: string;
}

export function Input({ placeholder, label, type = "text", showIcon, showLabel, IconOpen, IconClose }: InputProps) {

    const [isPassword, setIsPassword] = useState(false);

    const handlePassword = () => {
        setIsPassword(!isPassword)
    }

    return (
        <InputContainer>
            {
                showLabel && (
                    <InputLabel>{label}</InputLabel>
                )
            }
            <InputLabel />
            <InputFieldWithContainer>
                <InputField type={isPassword ? "text" : type} placeholder={placeholder} />
                {
                    showIcon && (
                        <IconToggle IconOpen={IconOpen} IconClose={IconClose} onClick={() => {handlePassword()}} />
                    )
                }
            </InputFieldWithContainer>
        </InputContainer>
    )
}