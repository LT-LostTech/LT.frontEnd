import axios from "axios";
import { Api_base } from "../../api_base";

export async function DeleteChallengepApi(id:number | null) {

    const url = `${Api_base}/challenges/delete/${id}`
    const token = localStorage.getItem('token');
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    
    await axios.delete(url,{headers})

}