import axios from "axios";
import { Api_base } from "../../api_base";

export const CreateChallengeApi = async ( 
  category: string| undefined,
  estimatedHours: number | undefined,
  labels: string | undefined,
  title: string | undefined,
  description: string | undefined,
  difficulty: string | undefined,
  token?: string | null

) =>{
  const url = `${Api_base}/challenges/create`;

  const headers = token ? { Authorization: `Bearer ${token}` } : {};

  await axios.post(
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