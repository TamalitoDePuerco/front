import { Await } from "react-router-dom";
import apiConfig from "../../api/apiConfig";

async function Logout(){
    const baseURL = apiConfig.getBaseUrl();

    try {
        const response = await fetch(`${baseURL}/auth/logout`, {
            method: "GET",
            headers: {
                "Content-Type":"application/json",
            }
        });
    } catch(e) {

    }
}

export {Logout};