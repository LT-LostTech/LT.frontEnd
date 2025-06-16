import { ChangeEvent, useState } from "react";
import { BackOfficeProps, UserProps } from "../interfaces/interfaces.web";

export function useAuth() {
 const [user, setUser] = useState<UserProps>({
    username:"",
    email:"",
    password:""})
    
    function handleInputChange(e: ChangeEvent<HTMLInputElement>){
        const {name,value} = e.target
        setUser(prev => ({
            ...prev,
            [name]:value
        })) 
    }


    const [backoffice, setBackoffice] = useState<BackOfficeProps>({
        category:"",
        estimatedHours:0,
        progress:0,
        label:"",
        labels:"",
        levels:0,
        title:"",
        description:"",
        difficulty:""

    })


    function handleInputChangeRoadmaps(e: ChangeEvent<HTMLInputElement>){
        const {name,value} = e.target
        setBackoffice(prev => ({
            ...prev,
            [name]:value
        })) 
    }

    const [authStatus,setAuthStatus] = useState({
        loading:false,
        error:null as string |null,
        success: false
    })



    return  {user,handleInputChange,handleInputChangeRoadmaps,backoffice,authStatus,setAuthStatus}


}