import axios from "axios";
import { toast } from "react-toastify";
import { Form } from "../../../../../components/Form";
import { useAuth } from "../../../../../hooks/useAuth";
import { DeleteRoadmapApi } from "../../../../../services/roadmap/delete/api";
import { theme } from "../../../../../theme/theme";

interface EditFormProps {
  id: number | null;
  onUpdate: () => void;
}

export function EditFormChallenges({ id, onUpdate }: EditFormProps) {
  const { authStatus, handleInputChangeRoadmaps, backoffice, setAuthStatus } =
    useAuth();

  const token = localStorage.getItem("token");

  const handelUpdateChallenges = async () => {
    setAuthStatus({ loading: true, error: null, success: false });
    try {
      await UpdateChalleges(
        id,
        backoffice.category,
        backoffice.estimatedHours,
        backoffice.label,
        backoffice.levels,
        token
      );
      toast.success("Roadmap atualizado com sucesso!");
      setAuthStatus({ loading: false, error: null, success: true });
      onUpdate();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error updating roadmap:", error.response?.data);
        toast.error(
          "Erro ao atualizar roadmap: " + error.response?.data.message ||
            "Erro desconhecido"
        );
      }
    }
  };

  const handleDeleteChallenges = async () => {
    setAuthStatus({ loading: true, error: null, success: false });
    try {
      await DeleteRoadmapApi(id);

      toast.success("Roadmap deletado com sucesso!");
      setAuthStatus({ loading: false, error: null, success: true });
      onUpdate();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error deleting roadmap:", error.response?.data);
        toast.error(
          "Erro ao deletar roadmap: " + error.response?.data.message ||
            "Erro desconhecido"
        );
      }
    }
  };

  return (
    <Form
      title="Editar desafio"
      InputProps={[
        {
          name:"title",
          label: "Nome do desafio",
          type: "text",
          placeholder: "Digite o nome do desafio",
          showIcon: false,
          showLabel: true,
          IconOpen: "",
          IconClose: "",
          onChange: handleInputChangeRoadmaps,
          value: backoffice.title,
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
          onChange: handleInputChangeRoadmaps,
          value: backoffice.category,
        },
        {
          name: "estimatedHours",
          label: "horas estimadas",
          type: "text",
          placeholder: "horas estimadas",
          showIcon: false,
          showLabel: true,
          IconOpen: "",
          IconClose: "",
          onChange: handleInputChangeRoadmaps,
          value: backoffice.estimatedHours,
        },
        {
          name: "description",
          label: "Descrição do desafio",
          type: "text",
          placeholder: "Digite a descrição do desafio",
          showIcon: false,
          showLabel: true,
          IconOpen: "",
          IconClose: "",
          onChange: handleInputChangeRoadmaps,
          value: backoffice.description
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
          onClick: () => {
            handleDeleteChallenges();
          },
        },
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
  );
}
