import axios from "axios";
import { Api_base } from "../../api_base";

export async function DeleteRoadmapApi() {
    for(let i = 0; i < 10; i++) {
    const url = `${Api_base}/roadmap/delete/${i}`
    
    await axios.delete(url)
    }

}