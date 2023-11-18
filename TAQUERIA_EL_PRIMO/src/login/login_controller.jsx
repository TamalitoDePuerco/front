import apiConfig from "../api/apiConfig";

async function LoginAuth(formData, navigate) {
  const baseURL = apiConfig.getBaseUrl();

  try {
    const response = await fetch(`${baseURL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();

      // Almacenar el token en el almacenamiento local
      localStorage.setItem('token', data.token);
      navigate("/menu");

      return data; // Devolver la información del token y su expiración
    } else {
      const errorData = await response.json(); // Obtener detalles del error
      console.error(`Error al iniciar sesión: ${errorData.message || 'Error desconocido'}`);
      throw new Error(errorData.message || 'Error desconocido');
    }
  } catch (error) {
    console.error("Error al iniciar sesión", error);
    throw error;
  }
}

export { LoginAuth };
