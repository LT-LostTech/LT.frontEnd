import {jwtDecode} from "jwt-decode";

type JWTUser = {
    sub: string;
}

export function GetUsername() {
    const token = localStorage.getItem('token')

    console.log(token, 'oi')
    if(!token) return null
    
        try{
          const payload = jwtDecode<JWTUser>('token');
          return payload.sub
          }catch (error){
              console.log("erro token user errado", error)
          }return null;
    
}