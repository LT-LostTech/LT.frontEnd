import axios from "axios"
import { Api_base } from "./url"

export async function LoginAdmin(email:string, password:string){
const url = `${Api_base}/login/admin`
    const response = axios.post(url, {email,password})
    console.log((await response).statusText)
}

