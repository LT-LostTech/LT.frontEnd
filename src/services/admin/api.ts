import axios from "axios";
import { Api_base } from "../api_base";

export async function LoginAdmin(email: string, password: string) {
  const url = `${Api_base}/login/admin`;
  const response = axios.post(url, { email, password });
  console.log((await response).statusText);
  const token = (await response).data;
  localStorage.setItem("token", token);

  const api = axios.create({
    baseURL: `${Api_base}/login/admin`,
  });

  //api.interceptors.request = intercepta cada requisição para colocar o token automaticamente
  api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
}
