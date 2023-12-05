import apiConfig from "../api/apiConfig";

async function MostrarOrdenesMesero() {
  const baseURL = apiConfig.getBaseUrl();
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(
      `${baseURL}/api/orden_detalle/ordenes_mesero`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      const errorData = await response.json();
      console.error(
        `Error al obtener ordenes: ${errorData.message || "Error desconocido"}`
      );
      throw new Error(errorData.message || "Error desconocido");
    }
  } catch (error) {
    console.error(`Error al obtener ordenes: ${error || "Error desconocido"}`);
    throw new Error(error || "Error desconocido");
  }
}

async function MostrarOrdenesCocinero() {
  const baseURL = apiConfig.getBaseUrl();
  const token = localStorage.getItem("token");
  try {
    const response = await fetch(
      `${baseURL}/api/orden_detalle/ordenes_cocinero`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      const errorData = await response.json();
      console.error(
        `Error al obtener ordenes: ${errorData.message || "Error desconocido"}`
      );
      throw new Error(errorData.message || "Error desconocido");
    }
  } catch (error) {
    console.error(`Error al obtener ordenes: ${error || "Error desconocido"}`);
    throw new Error(error || "Error desconocido");
  }
}

async function Servido(id_orden) {
  const baseURL = apiConfig.getBaseUrl();
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(
      `${baseURL}/api/orden_detalle/servido/${id_orden}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if(response.ok){
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      const errorData = await response.json();
      console.error(`Error Servir ordenes: ${errorData.message || "Error desconocido"}`);
      throw new Error(errorData.message || "Error desconocido");
    }
  } catch (error) {
    console.error(`Error al Servir ordenes: ${error || "Error desconocido"}`);
    throw new Error(error || "Error desconocido");
  }
}


async function Eliminar(id) {
  const baseURL = apiConfig.getBaseUrl();
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(
      `${baseURL}/api/orden/delete/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if(response.ok){
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      const errorData = await response.json();
      console.error(`Error al eliminar orden: ${errorData.message || "Error desconocido"}`);
      throw new Error(errorData.message || "Error desconocido");
    }
  } catch (error) {
    console.error(`Error al eliminar orden: ${error || "Error desconocido"}`);
    throw new Error(error || "Error desconocido");
  }
}


export { MostrarOrdenesMesero, MostrarOrdenesCocinero, Servido, Eliminar };
