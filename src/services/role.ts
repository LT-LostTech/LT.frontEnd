import { jwtDecode } from "jwt-decode"

type JwtRole = {
    role:string;
}

export const GetRole = ():string | null => {
        const token = localStorage.getItem('token')
        if(!token) return null

        try{
        const payload = jwtDecode<JwtRole>(token);
        return payload.role
        }catch (error){
            console.log("erro token role", error)
        }
        return null;
   
}