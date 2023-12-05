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

        <h1 className="font-bold mt-6 text-3xl">Orden: {orden.id}</h1>
        <p className="font-bold text-3xl">Mesa: {orden.mesa}</p>

        <button
          className="bg-red-500 text-white p-2 rounded-xl mt-10 text-3xl"
          onClick={handleServidoClick}
        >
          Servido
        </button>
        <button className="bg-red-500 text-white p-2 rounded-xl ml-3 mr-4 text-3xl"
        onClick={handleCuentaClick}>Finalizar</button>

      </div>
    </div>
  );
}

export default OrdenModal;

