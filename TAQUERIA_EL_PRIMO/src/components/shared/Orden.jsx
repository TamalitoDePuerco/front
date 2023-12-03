import React, { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { IniciarOrden } from "../../menu/menu_api";
import { format } from 'date-fns';
import { Mensaje } from "./mensaje";
import "./Orden.css";

function Orden({ ordenes, setOrdenes, mostrarMensajeHandler }) {
  const [userClaims, setUserClaims] = useState(null);
  const [selectedMesa, setSelectedMesa] = useState("");
  const [inputValue, setInputValue] = useState(1); // Cambiado de useState("") a useState(1)
  const [inputEditable, setInputEditable] = useState(true);
  const [ordenIniciada, setOrdenIniciada] = useState(false);
  const currentDate = format(new Date(), 'yyyy-MM-dd');

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = decodeJwt(token);
        setUserClaims(decodedToken.payload);
        console.log("ID del usuario:", decodedToken.payload?.id);
        console.log(currentDate);
      } catch (error) {
        console.error("Error al decodificar el token:", error);
      }
    }
  }, []);

  const handleSelectMesa = (event) => {
    setSelectedMesa(event.target.value);
    console.log(event.target.value);
  };

  const handleEliminarOrden = (index) => {
    const nuevasOrdenes = [...ordenes];
    nuevasOrdenes.splice(index, 1);
    setOrdenes(nuevasOrdenes);
  };

  const handleFijarBoton = () => {
    if (inputValue <= 0) {
      mostrarMensajeHandler("Ingresa un valor válido", "error");
      return;
    }

    setInputEditable(false);
    // Otras acciones que desees realizar al fijar el valor.
  };

  const IniciarOrdenBoton = async () => {
    if (selectedMesa === "" || selectedMesa === "Mesa #") {
      mostrarMensajeHandler("Selecciona una mesa válida", "error");
      return;
    }
  
    try {
      const idUsuario = userClaims?.id;
      const estatus = "activo";
      const { success, data } = await IniciarOrden(idUsuario, currentDate, estatus, selectedMesa);
      
      if (success) {
        console.log("jalo", success)
        mostrarMensajeHandler("Orden Iniciada", "success");
        setOrdenIniciada(true);
      } else {
        mostrarMensajeHandler(data.message || "Error al iniciar la orden", "error");
      }
    } catch (error) {
      mostrarMensajeHandler("Error al iniciar la orden", "error");
      console.error("Error al iniciar la orden", error);
    }
  };

  function decodeJwt(token) {
    const [header, payload, signature] = token.split('.');
    const decodedHeader = atob(header);
    const decodedPayload = atob(payload);
    const headerObj = JSON.parse(decodedHeader);
    const payloadObj = JSON.parse(decodedPayload);
    return { header: headerObj, payload: payloadObj, signature };
  }

  return (
    <section className="flex flex-col justify-center h-5/6">
      <section className="rounded-lg text-xl fixed-top padding-mesa">
        <select
          name="Mesa"
          className="rounded-md p-1 shadow-md"
          onChange={handleSelectMesa}
          value={selectedMesa}
        >
          <option defaultChecked>Mesa #</option>
          <option value="1">Mesa 1</option>
          <option value="2">Mesa 2</option>
          <option value="3">Mesa 3</option>
          <option value="4">Mesa 4</option>
          <option value="5">Mesa 5</option>
        </select>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="rounded-lg shadow-md w-1/4 ml-4 text-center p-1"
          disabled={!inputEditable}
        />
        <button
          onClick={handleFijarBoton}
          className="bg-red-500 text-center text-white p-1 ml-3 rounded-lg"
          disabled={inputValue <= 0 || !inputEditable}
        >
          Fijar
        </button>
      </section>

      <section className="h-full flex flex-col justify-center items-center">
        <div id="items" className="flex flex-col w-11/12 overflow-y-auto altura-campo-items">
          {ordenes.map((orden, index) => (
            <div
              key={index}
              className="bg-white text-left flex flex-col items-start justify-center p-1 shadow-md rounded-xl altura-x-items mb-2 relative"
            >
              <h1 className="font-bold pl-2">{orden.title}</h1>
              <p className="pl-2 mb-2 mr-8">{orden.descripcion}</p>
              <p className="pl-2">Cantidad: {orden.Cantidad}</p>

              <button
                type="button"
                onClick={() => handleEliminarOrden(index)}
                className="bg-red-500 text-white p-2 rounded-xl absolute top-1/2 transform -translate-y-1/2 right-2"
              >
                <FaRegTrashAlt size={"24px"} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {ordenIniciada && (
        <>
          <button
            type="button"
            className="bg-red-500 text-white p-2 rounded-xl w-2/6 fixed-bottom-ordenar"
          >
            Ordenar
          </button>
          <button
            type="button"
            className="bg-red-500 text-white p-2 rounded-xl w-2/6 fixed-bottom-finalizar-pedido"
          >
            Finalizar pedido del cliente
          </button>
        </>
      )}

      {!ordenIniciada && (
        <button
          type="button"
          onClick={IniciarOrdenBoton}
          className="bg-red-500 fixed-bottom-iniciar text-white w-2/6 p-2 rounded-xl"
        >
          Iniciar Orden
        </button>
      )}
    </section>
  );
}

export default Orden;
