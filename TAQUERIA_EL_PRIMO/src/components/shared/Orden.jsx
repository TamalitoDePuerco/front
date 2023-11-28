import React from "react";
import { OrdenesGeneradasEjemplos } from "./Orden_Ejemplo";

function Orden() {
  return (
      <section className="flex flex-col justify-center bg-red-200">
        <section className="px-12 pl-8 rounded-lg text-xl">
          <select name="Mesa">
            <option disabled>Mesa #</option>
            <option >Mesa 1</option>
            <option >Mesa 2</option>
          </select>
        </section>
        <section className="bg-green-200 h-3/4 flex flex-col justify-center items-center">
          <div className="grid grid-cols-1 md:grid-rows-1 md:grid-cols-1 gap-3 p-3 h-3/4 w-11/12">
            {OrdenesGeneradasEjemplos.map((val, key) => {
               return (
                <div key={key}
                className="bg-white text-left flex flex-col items-start justify-center p-1 shadow-2xl rounded-xl">
                  <h1 className="font-bold pl-2">{val.title}</h1>
                  <p className="pl-2">{val.descripcion}</p>
                  <p className="pl-2">Cantidad: {val.Cantidad}</p>
                </div>
               );
            })}
          </div>
        </section>
        <button type="button" className="bg-red-500 text-white p-2 rounded-xl w-2/6 mx-auto mb-4">Ordenar</button>
      </section>
  );
}

export default Orden;
