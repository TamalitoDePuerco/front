import React from "react";
import { RxCross2 } from "react-icons/rx";
import "./modal_ordenes.css";

function OrdenModal({ isOpen, closeModal, orden, onServidoClick, onEliminarClick }) {
  if (!isOpen) {
    return null;
  }

  const handleServidoClick = async () => {
    onServidoClick();
    closeModal();
  };

  const handleEliminarClick = async () => {
    onEliminarClick();
    closeModal();
  };


  return (
    <div className="modal">
      <div className="modal-content bg-white h-1/2 w-1/3 text-center relative">
        <span
          className="absolute top-0 right-0 cursor-pointer text-xl p-1 bg-red-500 m-4 text-white rounded-lg"
          onClick={closeModal}
        >
          <RxCross2 />
        </span>

        <h2 className="font-bold mt-6">{orden.nombre}</h2>
        <p className="font-bold">Mesa: {orden.mesa}</p>
        <p className="font-bold">Platillo: {orden.platillo}</p>
        <p className="font-bold">Cantidad: {orden.cantidad}</p>
        <button
          className="bg-red-500 text-white p-2 rounded-xl mt-10"
          onClick={handleServidoClick}
        >
          Servido
        </button>
        <button className="bg-red-500 text-white p-2 rounded-xl ml-3 mr-4">Editar</button>
        <button className="bg-red-500 text-white p-2 rounded-xl"
        onClick={handleEliminarClick}>Eliminar</button>
      </div>
    </div>
  );
}

export default OrdenModal;
