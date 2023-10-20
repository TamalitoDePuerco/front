import React from "react";
import { RxCross2 } from "react-icons/rx";

function Modal(props) {
  return (
    <div className="modal">
      <div className="modal-content">
        <button
          onClick={props.closeModal}
          className="bg-red-500 rounded-md "
          type="button"
        >
          <RxCross2 size="24px" color="#FFF" />
        </button>
        <h2>Producto</h2>
        <p>Contenido del modal... </p>
        <button>Añadir</button>
      </div>
    </div>
  );
}

export default Modal;
