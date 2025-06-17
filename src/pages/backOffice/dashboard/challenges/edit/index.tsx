import axios from "axios";
import { toast } from "react-toastify";
import { Form } from "../../../../../components/Form";
import { useAuth } from "../../../../../hooks/useAuth";
import { theme } from "../../../../../theme/theme";
import { UpdateChallengesApi } from "../../../../../services/challenges/update/api";
import { DeleteChallengepApi } from "../../../../../services/challenges/delete/api";

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
      await UpdateChallengesApi(
        id,
        backoffice.category,
        backoffice.estimatedHours,
        backoffice.labels,
        backoffice.title,
        backoffice.description,
        backoffice.difficulty,
        token
      );
      toast.success("Desafio atualizado com sucesso!");
      setAuthStatus({ loading: false, error: null, success: true });
      onUpdate();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error updating challenges:", error.response?.data);
        toast.error(
          "Erro ao atualizar desafio: " + error.response?.data.message ||
            "Erro desconhecido"
        );
      }
    }
  };

  const handleDeleteChallenges = async () => {
    setAuthStatus({ loading: true, error: null, success: false });
    try {
      await DeleteChallengepApi(id);

      toast.success("Desafio deletado com sucesso!");
      setAuthStatus({ loading: false, error: null, success: true });
      onUpdate();
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error deleting challenges:", error.response?.data);
        toast.error(
          "Erro ao deletar desafio: " + error.response?.data.message ||
            "Erro desconhecido"
        );
      }
    }
  };

  return (
    <Form
      title="Editar desafio"
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
                    name: "labels",
                    label: "Linguagem de programação",
                    type: "text",
                    placeholder: "Digite a linguagem de programação",
                    showIcon: false,
                    showLabel: true,
                    IconOpen: "",
                    IconClose: "",
                    value: backoffice.labels,
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
                    name: "description",
                    label: "descrição",
                    type: "text",
                    placeholder: "Digite a descrição do desafio",
                    showIcon: false,
                    showLabel: true,
                    IconOpen: "",
                    IconClose: "",
                    value: backoffice.description,
                    onChange: handleInputChangeRoadmaps,
                },
                {
                    name: "estimatedHours",
                    label: "duração estimada",
                    type: "number",
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
          text: "Deletar",
          width: "100%",
          height: "48px",
          colorText: theme.colors.white,
          bgColor: theme.colors.red400,
          fontWeight: "500",
          border: "none",
          disabled: authStatus.loading,
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
          disabled: authStatus.loading,
          onClick: () => {
            handelUpdateChallenges()
          }
        },
      ]}
    />
  );
}
