import axios from "axios";
import { Api_base } from "../../api_base";

export async function DeleteRoadmapApi(id:number | null) {

    console.log(id)
    const url = `${Api_base}/roadmap/delete/${id}`
    
    await axios.delete(url)

}