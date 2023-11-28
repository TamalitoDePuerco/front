import apiConfig from "../api/apiConfig";

async function CrearEmpleadoNuevo(formData) {
  const baseURL = apiConfig.getBaseUrl();
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(`${baseURL}/api/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();

      return data;
    } else {
      const errorData = await response.json();
      console.error(
        `Error al crear usuario: ${errorData.message || "Error desconocido"}`
      );
      throw new Error(errorData.message || "Erro desconocido");
    }
  } catch (error) {
    console.error("Error al crear usuario", error);
    throw error;
  }
}

async function ListaSucursales() {
  const baseURL = apiConfig.getBaseUrl();
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(`${baseURL}/api/sucursal/index`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      const errorData = await response.json();
      console.error("Error al recibir sucursales", errorData);
    }
  } catch (e) {
    console.error("Error al recibir lista", e);
    throw e;
  }
}

export { CrearEmpleadoNuevo, ListaSucursales };
