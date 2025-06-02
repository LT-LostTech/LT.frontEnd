import { useNavigate } from "react-router-dom";

export function Exit() {
    const navigate = useNavigate();

    navigate("/");
    const token = localStorage.removeItem('token')
    console.log('certinho', token)
}