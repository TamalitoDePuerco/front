import React, { useState, useEffect } from "react";
import Sidebar from "../components/shared/Siderbar";
import { MostrarInventario } from "./inventario_api";
import { FiEdit3 } from "react-icons/fi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";

function Inventario() {
  const [dataList, setDataList] = useState([]);
  const [fecha, setFecha] = useState(new Date());

  const getLista = async (fecha) => {
    try {
      const fetchedDataList = await MostrarInventario({ fecha});
      
      setDataList(fetchedDataList);
      console.log(fecha);
    } catch (error) {
      console.error("Error al obtener datos de inventario", error);
    }
  };

  useEffect(() => {
    getLista(fecha);
  }, [fecha]);

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
              <th>Producto</th>
              <th>Habia</th>
              <th>Quedo</th>
              <th>Gasto</th>
              <th>Precio</th>
              <th>Modificar</th>
            </tr>
          </thead>
          <tbody>
            {dataList.map((item, index) => (
              <tr key={index}>
                <td>{item.nombre}</td>
                <td>{item.habia}</td>
                <td>{item.quedo}</td>
                <td>{item.gasto}</td>
                <td>{item.precio}</td>
                <td>
                  <button>
                    <FiEdit3 size="24px" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Inventario;
