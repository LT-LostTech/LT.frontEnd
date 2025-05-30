import axios from "axios";
import { Api_base } from "../../api_base";

export async function LoginUser (email:string,password:string){
    const url = `${Api_base}/login/user`

    const user = axios.post(url,{email,password})
    console.log(password)
    console.log(email)
    console.log((await user).statusText)

    
}