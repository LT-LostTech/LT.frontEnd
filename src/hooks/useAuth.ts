import { ChangeEvent, useState } from "react";
import { RoadmapsProps, UserProps } from "../interfaces/interfaces.web";

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


    const [roadmap, setRoadmap] = useState<RoadmapsProps>({
        category:"",
        estimatedHours:0,
        progress:0,
        label:"",
        levels:0})


    function handleInputChangeRoadmaps(e: ChangeEvent<HTMLInputElement>){
        const {name,value} = e.target
        setRoadmap(prev => ({
            ...prev,
            [name]:value
        })) 
    }

    const [authStatus,setAuthStatus] = useState({
        loading:false,
        error:null as string |null,
        success: false
    })



    return  {user,handleInputChange,handleInputChangeRoadmaps,roadmap,authStatus,setAuthStatus}


}