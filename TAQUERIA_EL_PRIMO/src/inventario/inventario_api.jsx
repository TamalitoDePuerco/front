import apiConfig from "../api/apiConfig";

async function MostrarInventario({ fecha }) {
  const baseURL = apiConfig.getBaseUrl();
  const token = localStorage.getItem("token");
  const csrfToken = document.querySelector('meta[name="csrf-token"]').content;
  try {
    const response = await fetch(`${baseURL}/inventario/index`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
        "X-CSRF-TOKEN": csrfToken,
      },
      body: JSON.stringify({ fecha }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
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
