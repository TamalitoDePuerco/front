import { Await } from "react-router-dom";
import apiConfig from "../../api/apiConfig";

async function Logout(){
    const baseURL = apiConfig.getBaseUrl();
    const token = localStorage.getItem('token');

    try {
        const response = await fetch(`${baseURL}/api/auth/logout`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                "Authorization":`Bearer ${token}`
            }
        });

        if(response.ok){
            const data = await response.json();
            console.log(data);
            return data;
        }else {
            const erroData = await response.json();
            console.error(erroData);
        }
    } catch(e) {
        
    }
}

export {Logout};