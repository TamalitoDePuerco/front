import React, { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { IniciarOrden, Ordenar } from "../../menu/menu_api";
import { format } from "date-fns";

import "./Orden.css";
import { Mensaje } from "./mensaje";

const Orden = ({ ordenes, setOrdenes, manejarMensajeOrden }) => {
  const [userClaims, setUserClaims] = useState(null);
  const [selectedMesa, setSelectedMesa] = useState("");
  const [inputValue, setInputValue] = useState(1);
  const [inputEditable, setInputEditable] = useState(true);
  const [ordenIniciada, setOrdenIniciada] = useState(false);
  const [mensajeOrden, setMensajeOrden] = useState(null);
  const [tipoMensajeOrden, setTipoMensajeOrden] = useState("success");
  const [currentOrderId, setCurrentOrderId] = useState(null);
  const currentDate = format(new Date(), "yyyy-MM-dd");;

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

  const handleIncrementar = () => {
    setInputValue((prevValue) => Math.max(1, prevValue + 1));
    setMensajeOrden(null);
    setTipoMensajeOrden(null);
  };

  const handleDecrementar = () => {
    setInputValue((prevValue) => Math.max(1, prevValue - 1));
    setMensajeOrden(null);
    setTipoMensajeOrden(null);
  };

  const handleFijarBoton = () => {
    if (inputValue <= 0) {
      setMensajeOrden("Ingresa un valor válido");
      setTipoMensajeOrden("error");
      return;
    }

    setInputEditable(false);
    setMensajeOrden(null);
    setTipoMensajeOrden(null);
  };

  const IniciarOrdenBoton = async () => {
    if (selectedMesa === "" || selectedMesa === "Mesa #") {
      setMensajeOrden("Selecciona una mesa válida");
      setTipoMensajeOrden("error");
      return;
    }

    try {
      const idUsuario = userClaims?.id;
      const estatus = "activo";
      const response = await IniciarOrden(
        idUsuario,
        currentDate,
        estatus,
        selectedMesa
      );

      if (response.success) {
        const orderId = response.data?.data?.id;
        const mesa = response.data?.data?.mesa;
        const iniciado = "iniciado";        
        setOrdenIniciada(true);
        setCurrentOrderId(orderId);
        console.log("JALOOOOO", orderId);
        console.log("AVEEEEER", response.data?.data?.mesa);
        localStorage.setItem("id_orden", orderId);
        localStorage.setItem("mesa", mesa);
        localStorage.setItem("iniciado", iniciado);
        setMensajeOrden("Orden Iniciada");
        setTipoMensajeOrden("success");
        setOrdenes([]);

      } else {
        setMensajeOrden(response.data?.message || "Error al iniciar la orden");
        setTipoMensajeOrden("error");
      }
    } catch (error) {
      setMensajeOrden("Error al iniciar la orden");
      setTipoMensajeOrden("error");
      console.error("Error al iniciar la orden", error);
    }
  };

  const handleOrdenar = async () => {
    try {
      console.log("Array de órdenes antes de Ordenar:", ordenes);

      const nuevasOrdenes = ordenes.map((orden) => {
        const { title, ...restoDePropiedades } = orden;
        console.log(restoDePropiedades);
        return restoDePropiedades;
      });

      const ordenesParaEnviar = { ordenes: nuevasOrdenes };

      console.log("apunto de ordenar", ordenesParaEnviar);
      const resultadoOrdenar = await Ordenar(ordenesParaEnviar);

      if (resultadoOrdenar) {
        setOrdenes([]);
        setMensajeOrden("Orden realizada con éxito");
        setTipoMensajeOrden("success");
        localStorage.removeItem("id_orden");
        localStorage.removeItem("iniciado");
        location.reload();
      } else {
        setMensajeOrden(
          resultadoOrdenar.data?.message || "Error al Ordenar"
        );
        setTipoMensajeOrden("error");
      }
    } catch (error) {
      setMensajeOrden("Error al Ordenar");
      setTipoMensajeOrden("error");
      console.error("Error al Ordenar", error);
    }
  };

  const mostrarMensajeOrdenHandler = (mensaje, tipo) => {
    setMensajeOrden(mensaje);
    setTipoMensajeOrden(tipo);
    setTimeout(() => {
      setMensajeOrden(null);
      setTipoMensajeOrden(null);
    }, 3000);
  };

  function decodeJwt(token) {
    const [header, payload, signature] = token.split(".");
    const decodedHeader = atob(header);
    const decodedPayload = atob(payload);
    const headerObj = JSON.parse(decodedHeader);
    const payloadObj = JSON.parse(decodedPayload);
    return { header: headerObj, payload: payloadObj, signature };
  }

  return (
    <section className="flex flex-col justify-center h-5/6">
      <section className="rounded-lg text-xl fixed-top padding-mesa flex items-center">
        <select
          name="Mesa"
          className="rounded-md p-1 shadow-md mr-4"
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
      </section>

      <section className="h-full flex flex-col justify-center items-center">
        <div
          id="items"
          className="flex flex-col w-11/12 overflow-y-auto altura-campo-items"
        >
          {ordenes.map((orden, index) => (
            <div
              key={index}
              className="bg-white text-left flex flex-col items-start justify-center p-1 shadow-md rounded-xl altura-x-items mb-2 relative"
            >
              <h1 className="font-bold pl-2">{orden.title}</h1>
              <p className="pl-2 mb-2 mr-8">{orden.descripcion}</p>
              <p className="pl-2">Cantidad: {orden.cantidad}</p>
              <p className="pl-2">Platillo: {orden.platillo}</p>
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
        <button
          type="button"
          onClick={handleOrdenar}
          className="bg-red-500 fixed-bottom-iniciar text-white w-2/6 p-2 rounded-xl"
        >
          Ordenar
        </button>
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

      {mensajeOrden && tipoMensajeOrden && (
        <Mensaje
          mensaje={mensajeOrden}
          tipo={tipoMensajeOrden}
          onClose={() => {
            setMensajeOrden(null);
            setTipoMensajeOrden(null);
          }}
        />
      )}
    </section>
  );
};

export default Orden;