import apiConfig from "../api/apiConfig";

async function ObtenerProductos(tipo) {
  const baseURL = apiConfig.getBaseUrl();
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(`${baseURL}/api/producto/index`, {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ tipo }), 
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    } else {
      const errorData = await response.json();
      console.error("Error al recibir productos", errorData);
    }
  } catch (error) {
    console.error("Error al obtener productos:", error);
  }
}
async function IniciarOrden(idUsuario, fecha, estatus, mesa) {
    const baseURL = apiConfig.getBaseUrl();
    const token = localStorage.getItem("token");
  
    const body = JSON.stringify({
      id_usuario: idUsuario,
      fecha: fecha,
      estatus: estatus,
      mesa: mesa,
    });
  
    try {
      const response = await fetch(`${baseURL}/api/orden/store`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: body,
      });
  
      if (response.ok) {
        const data = await response.json();
        return { success: true, data };
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al iniciar la orden");
      }
    } catch (error) {
      throw new Error(`Error al iniciar la orden: ${error.message}`);
    }
  }

  async function Ordenar(ordenData) {
    const baseURL = apiConfig.getBaseUrl();
    const token = localStorage.getItem("token");

  
    try {
      const response = await fetch(`${baseURL}/api/orden_detalle/store`, {
        method: "POST",
        headers: {
         "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(ordenData),

      });
  
      if (response.ok) {
        const data = await response.json();
        console.log("JALA", data)
        return data;
      } else {
        const errorData = await response.json();
        console.log("Objeto con clave 'ordenes' enviado a Ordenar, estoy en Ordenar:", JSON.stringify(ordenData, null, 2));
        throw new Error(errorData.message || "Error al Ordenar");
      }
    } catch (error) {
      console.log("Objeto con clave 'ordenes' enviado a Ordenar, estoy en Ordenar:", JSON.stringify(ordenData, null, 2));
      throw new Error(`Error al Ordenar: ${error.message}`);
    }
  }
  
  export { ObtenerProductos, IniciarOrden, Ordenar};
  
