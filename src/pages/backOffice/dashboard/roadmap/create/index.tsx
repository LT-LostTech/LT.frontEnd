import axios from "axios";
import { Form } from "../../../../../components/Form";
import { useAuth } from "../../../../../hooks/useAuth";
import { CreateRoadmap } from "../../../../../services/roadmap/api";
import { theme } from "../../../../../theme/theme";
import { toast } from "react-toastify";

interface CreateFormRoadmapProps {
    updateRoadmap?: () => void;
    }

export function CreateFormRoadmap({updateRoadmap}:CreateFormRoadmapProps) {
  const { authStatus, roadmap, handleInputChangeRoadmaps } = useAuth();
    console.log(closed)
  const token = localStorage.getItem("token");
  const handleCreateRoadmap = async () => {
    try {
      await CreateRoadmap(
        roadmap.category,
        roadmap.estimatedHours,
        roadmap.label,
        roadmap.levels,
        token
      );
      toast.success("Roadmap criado com sucesso!");
      //como ele é opcional tenho que colocar o ? depois do nome da função
      updateRoadmap?.()
 
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data || "Erro ao criar roadmap";

        toast.error("erro ao criar");

        console.error(errorMessage);
      }
    }
  };
  return (
    <Form 
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
          value: roadmap.label,
          onChange: handleInputChangeRoadmaps,
        },
        {
          name: "category",
          label: "Categoria",
          type: "text",
          placeholder: "Selecione a categoria",
          showIcon: false,
          showLabel: true,
          IconOpen: "",
          IconClose: "",
          value: roadmap.category,
          onChange: handleInputChangeRoadmaps,
        },
        {
          name: "levels",
          label: "Quantidade de etapas",
          type: "number",
          placeholder: "Digite a quantidade de etapas",
          showIcon: false,
          showLabel: true,
          IconOpen: "",
          IconClose: "",
          value: roadmap.levels,
          onChange: handleInputChangeRoadmaps,
        },
        {
          name: "estimatedHours",
          label: "Estimativa de horas",
          type: "number",
          placeholder: "Digite a quantidade de horas",
          showIcon: false,
          showLabel: true,
          IconOpen: "",
          IconClose: "",
          value: roadmap.estimatedHours,
          onChange: handleInputChangeRoadmaps,
        },
      ]}
      buttons={[
        {
          text: authStatus.loading ? "Cadastrando..." : "Confirmar",
          width: "100%",
          height: "48px",
          colorText: theme.colors.white,
          bgColor: theme.colors.gray800,
          fontWeight: "600",
          border: "none",
          disabled: authStatus.loading,
          onClick: () => {
            handleCreateRoadmap();
            
          },
        },
      ]}
    />
  );
}

