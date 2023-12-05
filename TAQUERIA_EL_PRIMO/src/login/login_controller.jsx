import apiConfig from "../api/apiConfig";

async function LoginAuth(formData) {
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
      localStorage.setItem('token', data.token);

      return data;
    } else {
      const errorData = await response.json();
      console.error(`Error al iniciar sesión: ${errorData.message || 'Error desconocido'}`);
      throw new Error(errorData.message || 'Error desconocido');
    }
  } catch (error) {
    console.error("Error al iniciar sesión", error);
    throw error;
  }
}

export { LoginAuth };
