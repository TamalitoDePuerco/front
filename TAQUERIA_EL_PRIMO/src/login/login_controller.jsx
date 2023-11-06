import apiConfig from "../api/apiConfig";

async function LoginController(formData) {
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
      localStorage.setItem('token', data.token);

      // Navegar a la pantalla protegida o realizar otras acciones
      // Puedes utilizar React Router o tu enfoque de navegación preferido aquí
    } else {
      console.error("Error al iniciar sesión");
    }
  } catch (error) {
    console.error("Error al iniciar sesión", error);
  }
}
export { LoginController };
