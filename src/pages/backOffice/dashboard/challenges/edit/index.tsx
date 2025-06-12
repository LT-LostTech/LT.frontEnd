import { Form } from "../../../../../components/Form";
import { theme } from "../../../../../theme/theme";



export function EditFormChallenges(p0: { id: number | null; }) {



    return (
        <Form
            title="Editar desafio"
            InputProps={[
                {
                    label: "Nome do desafio",
                    type: "text",
                    placeholder: "Digite o nome do desafio",
                    showIcon: false,
                    showLabel: true,
                    IconOpen: "",
                    IconClose: "",
                },
                {
                    label: "Categoria",
                    type: "text",
                    placeholder: "Digite a categoria do desafio",
                    showIcon: false,
                    showLabel: true,
                    IconOpen: "",
                    IconClose: "",
                },
                {
                    label: "horas estimadas",
                    type: "text",
                    placeholder: "horas estimadas",
                    showIcon: false,
                    showLabel: true,
                    IconOpen: "",
                    IconClose: "",
                },
                {
                    label: "Descrição do desafio",
                    type: "text",
                    placeholder: "Digite a descrição do desafio",
                    showIcon: false,
                    showLabel: true,
                    IconOpen: "",
                    IconClose: "",
                },
            ]}
            buttons={[
                {
                    text: "Deletar",
                    width: "100%",
                    height: "48px",
                    colorText: theme.colors.white,
                    bgColor: theme.colors.red400,
                    fontWeight: "500",
                    border: "none",
        
                },
                {
                    text: "Salvar",
                    width: "100%",
                    height: "48px",
                    colorText: theme.colors.white,
                    bgColor: theme.colors.gray800,
                    fontWeight: "500",
                    border: "none",
                }
            ]}
        />
    )
}

