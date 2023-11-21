import apiConfig from "../api/apiConfig";

async function MostrarInventario() {
  const baseURL = apiConfig.getBaseUrl();
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(`${baseURL}/inventario/index`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if(response.ok){
        const data = await response.json();
        console.log(data);
        return data;
    } else {
        const errorData = await response.json();
        console.error("Error al recibir Inventario", errorData);
    }
  } catch (e) {
    console.error("error al rebir la lista de inventario", e);
    throw e;
  }
}

export { MostrarInventario };
