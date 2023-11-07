import { useNavigate } from "react-router-dom";
import apiConfig from "../api/apiConfig";

async function LoginController(formData, navigate) {
  const baseURL = apiConfig.getBaseUrl();

  try {
    const response = await fetch(`${baseURL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      const data = await response.json();
      console.log(data)
      // Almacenar el token en el almacenamiento local
      await localStorage.setItem('token', data.token);
      
      setTimeout(() => {
        navigate('/menu');
      }, 2000);

    } else {
      console.error("Error al iniciar sesión");
    }
  } catch (error) {
    console.error("Error al iniciar sesión", error);
  }
}
export { LoginController };
