import { Form } from "../../../../../components/Form";
import { theme } from "../../../../../theme/theme";
import { DeleteRoadmapApi } from "../../../../../services/roadmap/delete/api";
import axios from "axios";
import { toast } from "react-toastify";


interface EditFormProps {
    id: number | null;
}


export function EditFormRoadmap({ id }: EditFormProps) {


    const handleDeleteRoadmap = async () => {
        try {
            console.log(id)
            await DeleteRoadmapApi(id);
            toast.success("Roadmap deletado com sucesso!");
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error("Error deleting roadmap:", error.response?.data);
                toast.error("Erro ao deletar roadmap: " + error.response?.data.message || "Erro desconhecido");
            }


        }
    }

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
                onClick: () => {
                    handleDeleteRoadmap()
                }
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
