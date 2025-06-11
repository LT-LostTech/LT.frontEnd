import axios from "axios";
import { Api_base } from "../../api_base";

export async function LoginUser(email: string, password: string | undefined) {
  const url = `${Api_base}/login/user`;

  const user = axios.post(url, { email, password });
  const token = (await user).data;
  localStorage.setItem("token", token);

  const api = axios.create({
    baseURL: `${Api_base}/login/user`,
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
