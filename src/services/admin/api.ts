import axios from "axios"
import { Api_base } from "./url"

export async function LoginAdmin(email:string, password:string){
const url = `${Api_base}/login/admin`

try{
    const response = await axios.post(url,{email, password})
    if(response.status !== 200){
        throw new Error("Credenciais inválidas")
    }
    console.log("Login successful:", response.data)
   
}catch(error) {
    console.error("Error during admin login:", error)
  }
}

