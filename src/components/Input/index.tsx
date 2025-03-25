import { IconToggle } from "../../utils/IconToggle";
import { InputContainer, InputField, InputFieldWithContainer, InputLabel } from "./styled";

export interface InputProps {
    placeholder: string;
    label: string;
    showIcon: boolean;
    showLabel: boolean;
    IconOpen: string;
    IconClose: string;
}

export function Input({ placeholder, label,  showIcon, showLabel, IconOpen, IconClose }: InputProps) {
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
                        <IconToggle IconOpen={IconOpen} IconClose={IconClose} />
                    )
                }
            </InputFieldWithContainer>
        </InputContainer>
    )
}