import axios from "axios";
import { Api_base } from "../../api_base";

export async function RegisterUser(
  username: string | undefined,
  email: string,
  password: string | undefined
) {
  const url = `${Api_base}/user/register`;
  console.log("RegisterUser called with:", {
    username, 
    email,
    password
  });
   const response = await axios.post(url, { username, email, password });
  console.log("Response from RegisterUser:", response.data);
  } 

