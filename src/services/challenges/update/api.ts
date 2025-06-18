import axios from "axios";
import { Api_base } from "../../api_base";

export async function UpdateChallengesApi(
  id: number | null,
  category: string | undefined,
  estimatedHours: number | undefined,
  labels: string | undefined,
  title: string | undefined,
  description: string | undefined,
  difficulty: string | undefined,
  token?: string | null
) {
  const url = `${Api_base}/challenges/update/${id}`;
  const headers = token ? { Authorization: `Bearer ${token}` } : {};

 await axios.put(
    url,
    { 
      category,
      estimatedHours,
      progress: 0,
      labels,
      title,
      description,
      link:"losttech.com.br",
      difficulty
  },
    { headers }
  );
}
