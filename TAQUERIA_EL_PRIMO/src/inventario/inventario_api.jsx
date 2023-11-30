
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { utcToZonedTime } from 'date-fns-tz';
import apiConfig from "../api/apiConfig";

async function MostrarInventario({ fecha }) {
  const baseURL = apiConfig.getBaseUrl();
  const token = localStorage.getItem("token");
  const fechaMazatlan = utcToZonedTime(fecha, 'America/Mazatlan');
  const formattedFecha = format(fechaMazatlan, 'yyyy-MM-dd', { locale: es });

  try {
    const response = await fetch(`${baseURL}/api/inventario/index`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ fecha: formattedFecha }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("se visito:", formattedFecha)
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

async function EditarInventario(id, datos) {
  const baseURL = apiConfig.getBaseUrl();
  const token = localStorage.getItem("token");

  try {
    const response = await fetch(`${baseURL}/api/inventario/update/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(datos),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      const errorData = await response.json();
      console.error("Error al recibir Inventario", errorData);
    }
  } catch (e) {
    console.error("Error: ", e);
    throw e;
  }
}

async function FinalizarInventario(fecha) {
  const baseURL = apiConfig.getBaseUrl();
  const token = localStorage.getItem("token");
  const fechaMazatlan = utcToZonedTime(fecha, 'America/Mazatlan');
  const formattedFecha = format(fechaMazatlan, 'yyyy-MM-dd', { locale: es });


  try {
    const response = await fetch(`${baseURL}/api/inventario/nuevo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ fecha: formattedFecha }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("se finalizo el inventario del: ", formattedFecha)
      return data;
    } else {
      const errorData = await response.json();
      console.error("Error al recibir Inventario", errorData);
    }
  } catch (e) {
    console.error("Error: ", e);
    throw e;
  }
}
export { MostrarInventario, EditarInventario, FinalizarInventario };
