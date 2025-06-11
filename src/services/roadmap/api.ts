import axios from "axios";
import { Api_base } from "../api_base";

export async function CreateRoadmap(
  category: string| undefined,
  estimatedHours: number | undefined,
  label: string | undefined,
  levels: number | undefined,
  token?: string | null
) {
  const url = `${Api_base}/roadmap/create`;

  const headers = token ? { Authorization: `Bearer ${token}` } : {};

  await axios.post(
    url,
    {
      category,
      estimatedHours,
      progress: 0,
      label,
      levels,
    },
    { headers }
  );
  }

