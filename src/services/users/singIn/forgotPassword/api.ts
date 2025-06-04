import axios from "axios";
import { Api_base } from "../../../api_base";

export async function ForgotPasswordApi(email: string) {
    const url = `${Api_base}/login/forgot-password`;
    await axios.post(url, { email }) 
}

export async function CodeVerificationApi(email: string, code: string | undefined) {
    const url = `${Api_base}/login/verify-code`;
    await axios.post(url, { email,code });
}

export