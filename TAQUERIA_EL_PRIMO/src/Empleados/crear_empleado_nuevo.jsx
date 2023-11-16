import apiConfig from "../api/apiConfig";

async function CrearEmpleadoNuevo(formData) {
    const baseURL = apiConfig.getBaseUrl();
    const token = localStorage.getItem('token');
    try {
        const response = await fetch(`${baseURL}/register`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                "Autorization":`Bearer ${token}`

            },
            body: JSON.stringify(formData),
        });

        if(response.ok) {
            const data = await response.json();

            return data;
        }else{
            const errorData = await response.json();
            console.error(`Error al crear usuario: ${errorData.message || 'Error desconocido'}`);
            throw new Error(errorData.message || 'Erro desconocido');
        }
    } catch (error) {
        console.error("Error al crear usuario", error);
        throw error;    
    }
}

export {CrearEmpleadoNuevo};