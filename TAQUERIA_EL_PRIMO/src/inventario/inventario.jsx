import React, { useState, useEffect } from "react";
import Sidebar from "../components/shared/Siderbar";
import { MostrarInventario } from "./inventario_api";
import { FiEdit3 } from "react-icons/fi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import "./inventario.css";

function Inventario() {
  const [fecha, setFecha] = useState(new Date());
  const [datosInventario, setDatosInventario] = useState([]);

  const getLista = async (fecha) => {
    try {
      const response = await MostrarInventario({ fecha });
  
      console.log("Belico", response); 
      console.log("Respuesta de la API:", JSON.stringify(response));
      if (response && response["data:"]) {
        setDatosInventario(response["data:"]);
      } else {
        console.error("La respuesta o los datos son undefined:", response);
      }
    } catch (error) {
      console.error("Error al obtener datos de inventario", error);
    }
  };
  

  useEffect(() => {
    console.log("El componente se volvió a montar");
    getLista(fecha);
  }, [fecha]);

  useEffect(() => {
    console.log("Datos de inventario:", datosInventario);
  }, [datosInventario]);

  const handleDateChange = (selectedDate) => {
    setFecha(selectedDate);
  };

  return (
    <div className="bg-[#F8F8F8] w-full min-h-screen flex">
      <div className="w-28">
        <Sidebar />
      </div>
      <section className="flex flex-col justify-self-center items-center flex-1">
        <h1 className="text-2xl font-bold pt-16 pb-3">INVENTARIO</h1>
        <DatePicker
          selected={fecha}
          onChange={handleDateChange}
          dateFormat="dd/MM/yyyy"
          className="bg-gray-200 rounded-3xl mb-6 text-center"
          locale={es}
          placeholderText="Selecciona una fecha"
        />
        <table className="bg-gray-200 w-4/5">
          <thead>
            <tr>
              <th className="w-1/4">Producto</th>
              <th>Habia</th>
              <th>Quedo</th>
              <th>Gasto</th>
              <th>Precio</th>
              <th>Modificar</th>
            </tr>
          </thead>
          <tbody>
            {datosInventario.map((data) => (
              <tr key={data.id}>
                <td>{data.nombre}</td>
                <td>{data.habia}</td>
                <td>{data.quedo}</td>
                <td>{data.gasto}</td>
                <td>{data.precio}</td>
                <td>
                  <button>
                    <FiEdit3 size="24px" />
                  </button>
                </td>
              </tr>
            ))}
            {datosInventario.length === 0 && (
              <tr>
                <td colSpan="6">No hay datos disponibles</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Inventario;
