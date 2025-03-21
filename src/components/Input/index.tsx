import { InputContainer, InputField, InputFieldWithContainer, InputIcon, InputLabel } from "./styled";

interface InputProps {
    placeholder: string;
    label: string;
    icon: string;
    showIcon: boolean;
    showLabel: boolean;
}

export function Input({ placeholder, label, icon, showIcon, showLabel }: InputProps) {
    return (
        <InputContainer>
            {
                showLabel && (
                    <InputLabel>{label}</InputLabel>
                )
            }
            <InputLabel />
            <InputFieldWithContainer>
                <InputField placeholder={placeholder} />
                {
                    showIcon && (
                        <InputIcon src={icon} />
                    )
                }
            </InputFieldWithContainer>
        </InputContainer>
    )
}