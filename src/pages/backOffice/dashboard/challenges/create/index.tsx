import axios from "axios";
import { toast } from "react-toastify";
import { Form } from "../../../../../components/Form";
import { useAuth } from "../../../../../hooks/useAuth";
import { theme } from "../../../../../theme/theme";
import { CreateChallengeApi } from "../../../../../services/challenges/create/api";

export function CreateFormChallenges() {
      const { authStatus, backoffice, handleInputChangeRoadmaps,setAuthStatus } = useAuth();
  const token = localStorage.getItem("token");
  const handleCreateRoadmap = async () => {
    setAuthStatus({ loading: true, error: null, success: false });
    try {
      await CreateChallengeApi(
        backoffice.category,
        backoffice.estimatedHours,
        backoffice.label,
        backoffice.levels,
        backoffice.title,
        backoffice.description,
        backoffice.difficulty,
        token
      );
      toast.success("Roadmap criado com sucesso!");
      setAuthStatus({ loading: false, error: null, success: true });

    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data || "Erro ao criar roadmap";
        toast.error("erro ao criar");
        setAuthStatus({ loading: false, error: null, success: true });
        console.error(errorMessage);
      }
    }
  };
    return (
        <Form
            title="Criar desafio"
            InputProps={[
                {   name: "title",
                    label: "Nome do desafio",
                    type: "text",
                    placeholder: "Digite o nome do desafio",
                    showIcon: false,
                    showLabel: true,
                    IconOpen: "",
                    IconClose: "",
                    value: backoffice.title,
                    onChange: handleInputChangeRoadmaps,
                    
                },
                {
                    name: "category",
                    label: "Categoria",
                    type: "text",
                    placeholder: "Digite a categoria do desafio",
                    showIcon: false,
                    showLabel: true,
                    IconOpen: "",
                    IconClose: "",
                    value: backoffice.category,
                    onChange: handleInputChangeRoadmaps,
                },
                {
                    name: "label",
                    label: "Linguagem de programação",
                    type: "text",
                    placeholder: "Digite a linguagem de programação",
                    showIcon: false,
                    showLabel: true,
                    IconOpen: "",
                    IconClose: "",
                    value: backoffice.label,
                    onChange: handleInputChangeRoadmaps,
                },
                {
                    name: "difficulty",
                    label: "dificuldade",
                    type: "text",
                    placeholder: "Digite a dificuldade do desafio",
                    showIcon: false,
                    showLabel: true,
                    IconOpen: "",
                    IconClose: "",
                    value: backoffice.difficulty,
                    onChange: handleInputChangeRoadmaps,
                },
                {
                    name: "estimatedHours",
                    label: "duração estimada",
                    type: "text",
                    placeholder: "Digite a duração",
                    showIcon: false,
                    showLabel: true,
                    IconOpen: "",
                    IconClose: "",
                    value: backoffice.estimatedHours,
                    onChange: handleInputChangeRoadmaps,
                },
            ]}
            

            buttons={[
                {
                    text: authStatus.loading ? "Criando..." : "Criar",
                    width: "100%",
                    height: "48px",
                    colorText: theme.colors.white,
                    bgColor: theme.colors.gray800,
                    fontWeight: "500",
                    border: "none",
                    disabled: authStatus.loading,
                    onClick: () => handleCreateRoadmap()
                },
                
            ]}
        />
    )
}

