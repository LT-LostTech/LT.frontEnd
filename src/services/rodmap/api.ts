import axios from "axios";
import { Api_base } from "../api_base";

export async function CreateRoadmap(
  category: string,
  estimatedHours: number,
  progress: number | undefined,
  label: string ,
  levels: number
) {
  const url = `${Api_base}/roadmap/create`;

  await axios.post(url, { category, estimatedHours, progress, label, levels });
}
