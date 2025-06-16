import axios from "axios";
import { Api_base } from "../../api_base";


export async function UpdateChallengesApi(  
    id: number | null,
    category: string | undefined,
    estimatedHours: number | undefined,
    label: string | undefined,
    levels: number | undefined,
    token?: string | null
) {
  const url = `${Api_base}/roadmap/update/${id}`;
  const headers = token ? { Authorization: `Bearer ${token}` } : {};

  await axios.put(
    url,
    { category, estimatedHours, progress: 0, label, levels },
    { headers }
  );
}
