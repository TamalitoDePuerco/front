import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import "./modal_ordenes.css";

function Recibo({ datosRecibo, onClose }) {
  const totalOrden = datosRecibo.reduce((total, item) => parseFloat(item.total), 0).toFixed(2);

  return (
    <div className="modal">
      <div className="modal-content bg-white h-1/2 w-1/3 relative">
        <span className="absolute top-0 right-0 cursor-pointer text-xl p-1 bg-red-500 m-4 text-white rounded-lg" onClick={onClose}>
          <RxCross2 />
        </span>

        <h2 className="font-bold">Cuenta de la orden:</h2>
        {datosRecibo.map((item, index) => (
          <div key={index}>
            <p className="font-bold">{item.cantidad} {item.nombre} . . . . . . ${item.precio}</p>
          </div>
        ))}
        <p className="font-bold">Total: ${totalOrden}</p>
        <hr />
      </div>
    </div>
  );
}

export default Recibo;
