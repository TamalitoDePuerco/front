import React from "react";
import { OrdenesGeneradasEjemplos } from "./Orden_Ejemplo";
import './Orden.css';

function Orden() {
 return (
      <section className="flex flex-col justify-center h-5/6">
        <section className="rounded-lg text-xl fixed-top padding-mesa ">
          <select name="Mesa" className="rounded-md p-1 shadow-md">
            <option disabled>Mesa #</option>
            <option >Mesa 1</option>
            <option >Mesa 2</option>
          </select>
        </section>
        <section className="h-full flex flex-col justify-center items-center">
          <div className="flex flex-col w-11/12 overflow-y-auto altura-campo-items">
            {OrdenesGeneradasEjemplos.map((val, key) => {
               return (
                <div key={key}
                className="bg-white text-left flex flex-col items-start justify-center p-1 shadow-md rounded-xl altura-x-items mb-2">
                 <h1 className="font-bold pl-2">{val.title}</h1>
                 <p className="pl-2">{val.descripcion}</p>
                 <p className="pl-2">Cantidad: {val.Cantidad}</p>
                </div>
               );
            })}
          </div>
        </section>
        <button type="button" className="bg-red-500 text-white p-2 rounded-xl w-2/6 fixed-bottom">Ordenar</button>
      </section>
 );
}

export default Orden;
