import { ReactNode } from "react";

export interface asideProps {
  handleCloseAside: () => void;
  className?: string;
}



export interface ButtonProps {
  width: string;
  height: string;
  colorText: string;
  bgColor: string;
  fontWeight: string;
  text: ReactNode;
  border: string;
  hoverBg?: string;
  hoverColor?: string;
  onClick?: () => void;
  widthTablet?: string;
  widthMobile?: string;
  heightTablet?: string;
  heightMobile?: string;
  fontTablet?: string;
  fontMobile?: string;
  disabled?: boolean
  type?: "button" | "submit" | "reset";
}

export interface FormProps {
  title: string;
  InputProps: InputProps[];
  buttons: ButtonProps[];
}


export interface InputProps {
  placeholder: string;
  label?: string;
  showIcon: boolean;
  showLabel: boolean;
  IconOpen: string;
  IconClose: string;
  type?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  name?:string;
}

export interface ModalProps {
  title: string;
  inputs: InputProps[];
  textButton: string;
  textChangeOption?: string;
  textChangeOptionHighlight?: string;
  displayInformationExtra: string;
  displayChangeOption: string;
  textInformationExtra?: string;
  onHighlightClick?: () => void;
  onInformationExtraClick?: () => void;
  onClick?: () => void;
  position: string;
  display: string;
  disabled?: boolean
}

export interface SideMenuProps {
  handleCloseMenu: () => void;
  handleOpenModal: (type: "sign in" | "sign up" | "forgot password") => void;
}

export interface NewsCardProps {
  altImage: string;
  image: string;
  title: string;
}

export interface NewPasswordProps {
  onClick: () => void;
  position: string;
  displayPhoto: string;
}

export interface SendEmailProps {
  onHighlightClick?: () => void;
  onClick: () => void;
  position: string;
  displayPhoto: string;
}

export interface TypeCodeProps {
  onClick: () => void;
  position: string;
  displayPhoto: string;
}

export interface SignInProps {
  onHighlightClick: () => void;
  onInformationExtraClick: () => void;
  onComplete: () => void;
  displayChangeOption: string;
  position: string;
  textChangeOption: string;
  textChangeOptionHighlight: string;
  displayPhoto: string;
}

export interface UserProps{
  username?: string;
  email:string;
  password?:string;
  code?: string;
  newPassword?: string;
}

export interface BackOfficeProps{
  category?: string |undefined,
  estimatedHours?: number |undefined,
  progress?: number |undefined,
  label?: string | undefined,
  levels?: number | undefined,
  title?: string | undefined,
  description?: string | undefined,
  difficulty?: string | undefined,
  labels?: string | undefined
}

export interface SignUpProps {
  onHighlightClick: () => void;
  onInformationExtraClick: () => void;
  onComplete: () => void;
  displayPhoto: string;
}

export interface BiggerNewsProps {
  title: string;
  imageUrl: string;
  altImage: string;
}

export interface SmallerNewsProps {
  titleOne: string;
  imageUrlOne: string;
  altImageOne: string;
  titleTwo: string;
  imageUrlTwo: string;
  altImageTwo: string;
}

export interface LastNewsProps {
  titleOne: string;
  imageUrlOne: string;
  altImageOne: string;
  titleTwo: string;
  imageUrlTwo: string;
  altImageTwo: string;
  titleThree: string;
  imageUrlThree: string;
  altImageThree: string;
}

export interface GridProps {
  columns: number;
  gap: string;
  children: ReactNode;
  childType?: string;
  navigate?: (index: number) => void;
  childMediaWidth?: string;
}