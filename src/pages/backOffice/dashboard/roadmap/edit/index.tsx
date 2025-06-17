import { Form } from "../../../../../components/Form";
import { theme } from "../../../../../theme/theme";
import { DeleteRoadmapApi } from "../../../../../services/roadmap/delete/api";
import axios from "axios";
import { toast } from "react-toastify";
import { UpdateRoadmapApi } from "../../../../../services/roadmap/update/api";
import { useAuth } from "../../../../../hooks/useAuth";
import { useState } from "react";



interface EditFormProps {
    id: number | null;
    onUpdate: () => void; 
    ComponentEditEtapas: React.ComponentType<{
    setIsOpenModal: (isOpen: boolean) => void;
    }>;
}


export function EditFormRoadmap({ id, onUpdate, ComponentEditEtapas }: EditFormProps) {
    const {authStatus,handleInputChangeRoadmaps,backoffice,setAuthStatus} = useAuth();
    const [isOpenModal, setIsOpenModal] = useState(false);

    const token = localStorage.getItem("token");

    const handelUpdateRoadmap = async () => {
        setAuthStatus({ loading: true, error: null, success: false });
        try{
            await UpdateRoadmapApi(id, backoffice.category, backoffice.estimatedHours, backoffice.label, backoffice.levels, token);
            toast.success("Roadmap atualizado com sucesso!");
            setAuthStatus({ loading: false, error: null, success: true });
            onUpdate()
            
        }catch(error){
            if (axios.isAxiosError(error)) {
                console.error("Error updating roadmap:", error.response?.data);
                toast.error("Erro ao atualizar roadmap: " + error.response?.data.message || "Erro desconhecido");
            }
        }
    }

    const handleDeleteRoadmap = async () => {
        setAuthStatus({ loading: true, error: null, success: false });
        try {
            await DeleteRoadmapApi(id);
            
            toast.success("Roadmap deletado com sucesso!");
            setAuthStatus({ loading: false, error: null, success: true });
            onUpdate();
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error("Error deleting roadmap:", error.response?.data);
                toast.error("Erro ao deletar roadmap: " + error.response?.data.message || "Erro desconhecido");
            }


        }
    }

    return(
    <> <Form
        title="Informações do roadmap"
        InputProps={[
            {
                name: "label",
                label: "Nome do roadmap",
                type: "text",
                placeholder: "Digite o nome do roadmap",
                showIcon: false,
                showLabel: true,
                IconOpen: "",
                IconClose: "",
                onChange:handleInputChangeRoadmaps,
                value: backoffice.label,
            },
            {
                name: "category",
                label: "Categoria",
                type: "text",
                placeholder: "Digite a descrição do roadmap",
                showIcon: false,
                showLabel: true,
                IconOpen: "",
                IconClose: "",
                onChange:handleInputChangeRoadmaps,
                value: backoffice.category,
            },
            {
                name: "estimatedHours",
                label: "Quantidade de etapas",
                type: "number",
                placeholder: "Selecione a data de início",
                showIcon: false,
                showLabel: true,
                IconOpen: "",
                IconClose: "",
                onChange:handleInputChangeRoadmaps,
                value: backoffice.estimatedHours,
            },
        ]}
        buttons={[
            {
                text: authStatus.loading ? "Deletando..." : "Deletar",
                disabled: authStatus.loading,
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
                text: authStatus.loading ? "Salvando..." : "Salvar",
                width: "36%",
                height: "48px",
                colorText: theme.colors.white,
                bgColor: theme.colors.gray800,
                fontWeight: "500",
                border: "none",
                disabled: authStatus.loading,
                onClick: () => {
                    handelUpdateRoadmap()
                }
            },
            {
                text: "Editar etapas",
                width: "36%",
                height: "48px",
                colorText: theme.colors.white,
                bgColor: theme.colors.gray800,
                fontWeight: "500",
                border: "none",
                onClick: () => {
                    setIsOpenModal(true);
                }

            }
        ]}
    />
    {isOpenModal && 
          <>
                <ComponentEditEtapas setIsOpenModal={setIsOpenModal}/>
              </>
    }
    
    </>
    )
}
