import axios from "axios";
import { Api_base } from "../../api_base";

export async function RegisterUser (username:string | undefined,email:string,password:string | undefined) {
    const url = `${Api_base}/user/register`
    await axios.post(url,{username,email,password})
    
}