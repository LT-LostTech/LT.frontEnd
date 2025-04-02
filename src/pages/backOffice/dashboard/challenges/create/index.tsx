import { Form } from "../../../../../components/Form";
import { theme } from "../../../../../theme/theme";

export function CreateFormChallenges() {
    return (
        <Form
            title="Criar desafio"
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
                    label: "Linguagem de programação",
                    type: "text",
                    placeholder: "Digite a linguagem de programação",
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
                    text: "Salvar",
                    width: "100%",
                    height: "48px",
                    colorText: theme.colors.white,
                    bgColor: theme.colors.gray800,
                    fontWeight: "500",
                    border: "none",
                },
                
            ]}
        />
    )
}
