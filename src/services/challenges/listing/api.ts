import axios from "axios";
import { Api_base } from "../../api_base";

export async function ListingChallengesApi () {
    const url = `${Api_base}/challenges/all`;

    const response = await axios.get(url)
    console.log(response.data)
    
    return response.data
}