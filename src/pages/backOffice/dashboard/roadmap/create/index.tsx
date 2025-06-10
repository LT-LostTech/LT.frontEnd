import { Form } from "../../../../../components/Form";
import { useAuth } from "../../../../../hooks/useAuth";
import { theme } from "../../../../../theme/theme";

export function CreateFormRoadmap() {

    const {authStatus,user,handleInputChange,setAuthStatus} = useAuth()

    const handleCreateRoadmap = async() => {
        try{

        }catch(error){

        }
    }

    return <Form
        title="Informações do roadmap"
        InputProps={[
            {
                name:"NomeRoadmap",
                label: "Nome do roadmap",
                type: "text",
                placeholder: "Digite o nome do roadmap",
                showIcon: false,
                showLabel: true,
                IconOpen: "",
                IconClose: "",
                onChange: handleInputChange,
                value: user.,
            },
            {
                label: "Categoria",
                type: "text",
                placeholder: "Selecione a categoria",
                showIcon: false,
                showLabel: true,
                IconOpen: "",
                IconClose: "",
            },
            {
                label: "Quantidade de etapas",
                type: "number",
                placeholder: "Digite a quantidade de etapas",
                showIcon: false,
                showLabel: true,
                IconOpen: "",
                IconClose: "",
            }
        ]}
        buttons={[
            {
                text: "Salvar",
                width: "100%",
                height: "48px",
                colorText: theme.colors.white,
                bgColor: theme.colors.gray800,
                fontWeight: "600",
                border: "none",
            }
        ]}
    />
}