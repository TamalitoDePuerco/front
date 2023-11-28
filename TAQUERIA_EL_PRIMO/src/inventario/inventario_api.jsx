import apiConfig from "../api/apiConfig";

async function MostrarInventario({ fecha }) {
  const baseURL = apiConfig.getBaseUrl();
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(`${baseURL}/api/inventario/index`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({ fecha }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("API",data);
      return data;
    } else {
      const errorData = await response.json();
      console.error("Error al recibir Inventario", errorData);
    }
  } catch (e) {
    console.error("Error al recibir la lista de inventario", e);
    throw e;
  }
}

export { MostrarInventario };