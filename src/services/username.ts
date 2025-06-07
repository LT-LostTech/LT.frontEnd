import {jwtDecode} from "jwt-decode";

type JWTUser = {
    sub: string;
}

export function GetUsername() {
    const token = localStorage.getItem('token')

    if(!token) return null
    
        try{
          const payload = jwtDecode<JWTUser>(token);
          console.log("payload", payload)
          return payload.sub
          }catch (error){
              console.log("erro token user errado", error)
          }return null;
    
}