import React, { useState } from "react";
import Sidebar from "../components/shared/Siderbar";
import { MostrarInventario } from "./inventario_api";
import "../inventario/inventario.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";

function Inventario() {
  const [dataList, setDataList] = useState(false);

  const getLista = async () => {
    try {
      const fetchedDataList = await MostrarInventario();
      // Realizar las operaciones necesarias con los datos
    } catch (error) {
      // Manejar errores aquí
    }
  };

  const [date, setDate] = useState(new Date());

  return (
    <div className="bg-[#F8F8F8] w-full min-h-screen flex">
      <div className="w-28">
        <Sidebar />
      </div>
      <section className="flex flex-col justify-self-center items-center flex-1">
        <h1 className="text-2xl font-bold pt-16 pb-3">INVENTARIO</h1>
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          dateFormat="dd/MM/yyyy"
          className="bg-gray-200 rounded-3xl mb-6 text-center"
          locale={es}
          placeholderText="Selecciona una fecha"
        />
        <table className="bg-gray-200">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Encabezado 1</th>
              <th>Encabezado 2</th>
              <th>Encabezado 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dato 1</td>
              <td>Dato 2</td>
              <td>Dato 3</td>
              <td>Dato 4</td>
            </tr>
            <tr>
              <td>Dato 4</td>
              <td>Dato 5</td>
              <td>Dato 6</td>
              <td>Dato 7</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Inventario;
