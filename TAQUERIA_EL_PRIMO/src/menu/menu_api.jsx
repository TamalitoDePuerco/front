import apiConfig from "../api/apiConfig";

async function ObtenerProductos () {
    const baseURL = apiConfig.getBaseUrl();
    const token = localStorage.getItem("token");

    try {
        const response = await fetch(`${baseURL}/producto/index`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            }
        });

        if(response.ok) {
            const data = await response.json();
            console.log(data);
            return data;
        } else {
            const errorData = await response.json();
            console.error("Error al recibir productos", errorData);
        }
    } catch (error) {
        console.error("Error al obtener productos:", error)
    }
}