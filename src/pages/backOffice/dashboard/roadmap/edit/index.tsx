import { Form } from "../../../../../components/Form";
import { theme } from "../../../../../theme/theme";

export function EditFormRoadmap() {
    return <Form
        title="Informações do roadmap"
        InputProps={[
            {
                label: "Nome do roadmap",
                type: "text",
                placeholder: "Digite o nome do roadmap",
                showIcon: false,
                showLabel: true,
                IconOpen: "",
                IconClose: "",
            },
            {
                label: "Categoria",
                type: "text",
                placeholder: "Digite a descrição do roadmap",
                showIcon: false,
                showLabel: true,
                IconOpen: "",
                IconClose: "",
            },
            {
                label: "Quantidade de etapas",
                type: "number",
                placeholder: "Selecione a data de início",
                showIcon: false,
                showLabel: true,
                IconOpen: "",
                IconClose: "",
            },
        ]}
        buttons={[
            {
                text: "Deletar",
                width: "23%",
                height: "48px",
                colorText: theme.colors.white,
                bgColor: theme.colors.red400,
                fontWeight: "500",
                border: "none",
            },
            {
                text: "Salvar",
                width: "36%",
                height: "48px",
                colorText: theme.colors.white,
                bgColor: theme.colors.gray800,
                fontWeight: "500",
                border: "none",
            },
            {
                text: "Editar etapas",
                width: "36%",
                height: "48px",
                colorText: theme.colors.white,
                bgColor: theme.colors.gray800,
                fontWeight: "500",
                border: "none",
            }
        ]}
    />
}
