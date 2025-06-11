import axios from "axios";
import { Api_base } from "../../api_base";

export async function DeleteRoadmapApi(id: number) {

    const url = `${Api_base}/roadmap/delete/${id}`
    
    await axios.delete(url)


}