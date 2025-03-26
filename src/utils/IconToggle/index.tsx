import { useState } from "react"
import { IconToggleContainer, IconToggleImage } from "./styled"

interface IconToggleProps {
    IconOpen: string
    IconClose: string
    onClick: () => void
}

export function IconToggle({ IconOpen, IconClose, onClick }: IconToggleProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <IconToggleContainer as="button" onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            setIsOpen(!isOpen);
            onClick();
        }}>
            <IconToggleImage src={isOpen ? IconOpen : IconClose} alt="Icone de que ao clicar abre ou fecha o mesmo icone" />
        </IconToggleContainer>
    )
}