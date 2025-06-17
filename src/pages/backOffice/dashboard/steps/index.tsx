import { useNavigate } from "react-router-dom";
import { Form } from "../../../../components/Form";
import { theme } from "../../../../theme/theme";
import { Overlay } from "../../../../utils/Overlay/styled";

interface StepsProps {
    setIsOpenModal: (value: boolean) => void;
}

export function Steps({setIsOpenModal}:StepsProps) {
    const navigate = useNavigate()
    return (
        <>
            <Overlay onClick={() => 
                setIsOpenModal(false)} />
            <Form
                title="Etapa 1"
                InputProps={[
                    {
                        label: "Nome da etapa",
                        type: "text",
                        placeholder: "Digite o nome da etapa",
                        showIcon: false,
                        showLabel: true,
                        IconOpen: "",
                        IconClose: "",
                    },
                    {
                        label: "Descrição",
                        type: "text",
                        placeholder: "Digite a descrição da etapa",
                        showIcon: false,
                        showLabel: true,
                        IconOpen: "",
                        IconClose: "",
                    },
                ]}
                buttons={[
                    {
                        text: "Cancelar",
                        width: "100%",
                        height: "48px",
                        colorText: theme.colors.white,
                        bgColor: theme.colors.red400,
                        fontWeight: "600",
                        border: "none",
                        onClick() {
                            setIsOpenModal(false);
                            navigate('/backoffice/dashboard/roadmaps')
                        },
                    },
                    {
                        text: "Próxima etapa",
                        width: "100%",
                        height: "48px",
                        colorText: theme.colors.white,
                        bgColor: theme.colors.gray800,
                        fontWeight: "600",
                        border: "none",
                    }
                ]}
            />
        </>
    )
}