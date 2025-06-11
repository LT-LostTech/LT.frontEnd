import axios from "axios";
import { Api_base } from "../../api_base";

export async function ListingRoadmapsApi() {
    const url = `${Api_base}/roadmap/all`;

    const response = await axios.get(url)
    
    return response.data
}