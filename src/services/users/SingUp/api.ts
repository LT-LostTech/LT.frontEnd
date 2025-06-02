import axios from "axios";
import { Api_base } from "../../api_base";

export async function RegisterUser (username:string,email:string,password:string){
    const url = `${Api_base}/user/register`
    const response = axios.post(url,{username,email,password})
    console.log("teste:",password)
    console.log("teste:",email)
   

}