import React from "react";
import { RxCross2 } from "react-icons/rx";
import "./modal_ordenes.css";

function OrdenModal({ isOpen, closeModal, orden, onServidoClick, onEliminarClick, onCuentaClick }) {
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

  const handleCuentaClick = async () => {
    onCuentaClick();
    closeModal();
  };

  return (
    <div className="modal">
      <div className="modal-content bg-white h-1/2 w-1/3  relative">
        <span
          className="absolute top-0 right-0 cursor-pointer text-xl p-1 bg-red-500 m-4 text-white rounded-lg"
          onClick={closeModal}
        >
          <RxCross2 />
        </span>

        <h1 className="font-bold mt-6">Orden: {orden.id}</h1>
        <p className="font-bold">Mesa: {orden.mesa}</p>
        <h2 className="font-bold mt-3">{orden.nombre} . . . . . {orden.cantidad}</h2>

        <button
          className="bg-red-500 text-white p-2 rounded-xl mt-10"
          onClick={handleServidoClick}
        >
          Servido
        </button>
        <button className="bg-red-500 text-white p-2 rounded-xl ml-3 mr-4"
        onClick={handleCuentaClick}>Finalizar</button>

      </div>
    </div>
  );
}

export default OrdenModal;

