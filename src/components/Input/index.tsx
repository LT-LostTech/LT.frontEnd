import { useState } from "react";
import { IconToggle } from "../../utils/IconToggle";
import {
  InputContainer,
  InputField,
  InputFieldWithContainer,
  InputLabel,
} from "./styled";
import { InputProps } from "../../interfaces/interfaces.web";

export function Input({
  placeholder,
  label,
  type = "text",
  showIcon,
  showLabel,
  IconOpen,
  IconClose,
  onChange,
  value,
}: InputProps) {
  const [isPassword, setIsPassword] = useState(false);

  const handlePassword = () => {
    setIsPassword(!isPassword);
  };

  return (
    <InputContainer>
      {showLabel && <InputLabel>{label}</InputLabel>}
      <InputLabel />
      <InputFieldWithContainer>
        <InputField
          type={isPassword ? "text" : type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        {showIcon && (
          <IconToggle
            IconOpen={IconOpen}
            IconClose={IconClose}
            onClick={() => {
              handlePassword();
            }}
          />
        )}
      </InputFieldWithContainer>
    </InputContainer>
  );
}
