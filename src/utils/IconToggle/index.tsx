import { useState } from "react"
import { IconToggleContainer, IconToggleImage } from "./styled"

interface IconToggleProps {
    IconOpen: string
    IconClose: string
}

export function IconToggle({ IconOpen, IconClose }: IconToggleProps) {
    const [isOpen, setIsOpen] = useState(false)

    const handleIcon = () => {
        setIsOpen(!isOpen)
    }

    return (
        <IconToggleContainer onClick={handleIcon}>
            <IconToggleImage src={isOpen ? IconOpen : IconClose} alt="Icone de que ao clicar abre ou fecha o mesmo icone" />
        </IconToggleContainer>
    )
}