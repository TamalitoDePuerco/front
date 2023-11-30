
import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import './Orden.css';

function Orden({ ordenes, setOrdenes }) {

  const handleEliminarOrden = (index) => {
    const nuevasOrdenes = [...ordenes];
    nuevasOrdenes.splice(index, 1);
    setOrdenes(nuevasOrdenes);
  };

  return (
    <section className="flex flex-col justify-center h-5/6">
      <section className="rounded-lg text-xl fixed-top padding-mesa">
        <select name="Mesa" className="rounded-md p-1 shadow-md">
          <option disabled>Mesa #</option>
          <option >Mesa 1</option>
          <option >Mesa 2</option>
        </select>
      </section>
      <section className="h-full flex flex-col justify-center items-center">
        <div className="flex flex-col w-11/12 overflow-y-auto altura-campo-items">
          {ordenes.map((orden, index) => (
            <div key={index} className="bg-white text-left flex flex-col items-start justify-center p-1 shadow-md rounded-xl altura-x-items mb-2 relative">
              <h1 className="font-bold pl-2">{orden.title}</h1>
              <p className="pl-2 mb-2 mr-8">{orden.descripcion}</p>
              <p className="pl-2">Cantidad: {orden.Cantidad}</p>
              
              <button
                type="button"
                onClick={() => handleEliminarOrden(index)}
                className="bg-red-500 text-white p-2 rounded-xl absolute top-1/2 transform -translate-y-1/2 right-2"
              >
                <FaRegTrashAlt size={"24px"}/>
              </button>
            </div>
          ))}
        </div>
      </section>
      <button type="button" className="bg-red-500 text-white p-2 rounded-xl w-2/6 fixed-bottom">Ordenar</button>
    </section>
  );
}

export default Orden;
