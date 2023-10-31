import React from "react";
import { RxCross2 } from "react-icons/rx";

function Modal(props) {
  return (
    <div className="modal">
      <div className="modal-content relative w-1/2 h-5/6">
        <button
          onClick={props.closeModal}
          className="bg-red-500 rounded-md absolute top-2 right-2 p-2"
          type="button"
        >
          <RxCross2 size="15px" color="#FFF" />
        </button>
        <h1 className="text-2xl font-bold pt-8">{props.selectedTitle} </h1>
        <img
          src={props.selectedImg}
          className="max-w-full max-h-full pb-4 bg-red-200"
        />

        <h2 className="font-bold text-xl start-1">Descripcion</h2>
        <div className="p-1">
          <p className="text-start p-2">{props.selectedDes}</p>
        </div>
        <h2 className="font-bold text-xl">Ingredientes</h2>
        <div>
          
        </div>
        <button className="bg-blue-500 text-white rounded-md p-2 mt-4">
          Añadir
        </button>
      </div>
    </div>
  );
}

export default Modal;
