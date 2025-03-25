import { useState } from "react"
import { IconToggleContainer } from "./styled"

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
            <img src={isOpen ? IconOpen : IconClose} alt="Icone de toggle" />
        </IconToggleContainer>
    )
}