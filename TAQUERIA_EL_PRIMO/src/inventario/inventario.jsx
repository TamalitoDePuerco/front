import React, { useEffect, useState } from "react";
import Sidebar from "../components/shared/Siderbar";
import {
  MostrarInventario,
  EditarInventario,
  FinalizarInventario,
} from "./inventario_api";
import { FiEdit3 } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { FaRegSave } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import { Mensaje } from "../components/shared/mensaje";
import "./inventario.css";

const TableHead = () => (
  <thead className="bg-gray-300 h-14">
    <tr>
      <th className="w-1/4 ">Producto</th>
      <th>Había</th>
      <th>Entró</th>
      <th>Quedó</th>
      <th>Gastó</th>
      <th>Precio</th>
      <th className="">Modificar</th>
    </tr>
  </thead>
);

const isDecimal = (value) => {
  const decimalPattern = /^\d+(\.\d{0,2})?$/;
  return decimalPattern.test(value);
};

const Inventario = () => {
  const [fecha, setFecha] = useState(new Date());
  const [datosInventario, setDatosInventario] = useState([]);
  const [editarFilaId, setEditarFilaId] = useState(null);
  const [editarValores, setEditarValores] = useState({
    entro: "",
    quedo: "",
    precio: "",
  });
  const [finalizarInventarioLoading, setFinalizarInventarioLoading] =
    useState(false);
  const [mensaje, setMensaje] = useState(null);
  const [tipoMensaje, setTipoMensaje] = useState("success");
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  const getLista = async (fecha) => {
    try {
      const response = await MostrarInventario({ fecha });
      if (response && response["data:"]) {
        setDatosInventario(response["data:"]);
      } else {
        console.error("La respuesta o los datos son undefined:", response);
      }
    } catch (error) {
      setMensaje("Error en el servidor al obtener productos");
      setTipoMensaje("error");
      mostrarMensajeHandler();
      console.error("Error al obtener datos de inventario", error);
    }
  };

  const updateProducto = async (habia) => {
    try {
      const id = editarFilaId;
      const nuevosValores = {
        habia: habia,
        entro: editarValores.entro,
        quedo: editarValores.quedo,
        precio: editarValores.precio,
      };

      if (
        parseFloat(nuevosValores.habia) +
          parseFloat(nuevosValores.entro) <
        parseFloat(nuevosValores.quedo)
      ) {
        setMensaje(
          "Los valores no son permitidos. Verifica habia, entro y quedo."
        );
        setTipoMensaje("error");
        mostrarMensajeHandler();
        return;
      }

      const response = await EditarInventario(id, nuevosValores);
      getLista(fecha);
      setMensaje("Producto actualizado correctamente");
      setTipoMensaje("success");
      mostrarMensajeHandler();
    } catch (error) {
      console.error("Error al actualizar el producto", error);
      setMensaje("Error al actualizar el producto");
      setTipoMensaje("error");
      mostrarMensajeHandler();
    }
  };

  const finalizarInventario = async () => {
    setFinalizarInventarioLoading(true);
    try {
      const response = await FinalizarInventario(fecha);
      getLista(fecha);
      setMensaje("Inventario finalizado correctamente");
      setTipoMensaje("success");
      mostrarMensajeHandler();
    } catch (error) {
      console.error("Error al finalizar inventario", error);
      setMensaje("Error al finalizar el inventario");
      setTipoMensaje("error");
      mostrarMensajeHandler();
    } finally {
      setFinalizarInventarioLoading(false);
    }
  };

  useEffect(() => {
    getLista(fecha);
  }, [fecha]);

  const SeleccionarFecha = (fechaSeleccionada) => {
    setFecha(fechaSeleccionada);
  };

  const EditarCampos = (id) => {
    setEditarFilaId(id);
    const rowData = datosInventario.find((data) => data.id === id);
    setEditarValores({
      entro: rowData.entro.toString(),
      quedo: rowData.quedo.toString(),
      precio: rowData.precio.toString(),
    });
  };

  const BotonGuardar = (habia) => {
    updateProducto(habia);
  };

  const BotonCancelar = () => {
    setEditarFilaId(null);
    setEditarValores({ entro: "", quedo: "", precio: "" });
  };

  const mostrarMensajeHandler = () => {
    setMostrarMensaje(true);
    setTimeout(() => {
      setMostrarMensaje(false);
    }, 3000);
  };

  return (
    <div className="bg-[#F8F8F8] w-full min-h-screen flex">
      <div className="w-28">
        <Sidebar />
      </div>
      <section className="flex flex-col justify-self-center items-center flex-1 pb-8">
        <h1 className="text-2xl font-bold pt-10 pb-3">INVENTARIO</h1>
        <DatePicker
          selected={fecha}
          onChange={SeleccionarFecha}
          dateFormat="dd/MM/yyyy"
          className="bg-gray-200 rounded-3xl mb-6 text-center p-2 dashed-border"
          locale={es}
          placeholderText="Selecciona una fecha"
        />
        <table className="bg-gray-200 w-11/12 shadow-2xl dashed-border">
          <TableHead />
          <tbody className="">
            {datosInventario.map((data) => (
              <tr key={data.id}>
                <td className="w-1/12">{data.nombre}</td>
                <td className="w-1/12">
                  {editarFilaId === data.id ? (
                    <input
                      type="text"
                      value={data.habia}
                      disabled={true}
                      className="w-10/12 text-center"
                    />
                  ) : (
                    data.habia
                  )}
                </td>
                <td className="w-1/12">
                  {editarFilaId === data.id ? (
                    <input
                      type="text"
                      value={editarValores.entro}
                      onChange={(e) => {
                        const newValue = e.target.value;
                        if (isDecimal(newValue) || newValue === "") {
                          setEditarValores({
                            ...editarValores,
                            entro: newValue,
                          });
                        }
                      }}
                      className="w-10/12 text-center"
                    />
                  ) : (
                    data.entro
                  )}
                </td>
                <td className="w-1/12">
                  {editarFilaId === data.id ? (
                    <input
                      type="text"
                      value={editarValores.quedo}
                      onChange={(e) => {
                        const newValue = e.target.value;
                        if (isDecimal(newValue) || newValue === "") {
                          setEditarValores({
                            ...editarValores,
                            quedo: newValue,
                          });
                        }
                      }}
                      className="w-10/12 text-center"
                    />
                  ) : (
                    data.quedo
                  )}
                </td>
                <td className="w-1/12">{data.gasto}</td>
                <td className="w-1/12">
                  {editarFilaId === data.id ? (
                    <input
                      type="text"
                      value={editarValores.precio}
                      onChange={(e) => {
                        const newValue = e.target.value;
                        if (isDecimal(newValue) || newValue === "") {
                          setEditarValores({
                            ...editarValores,
                            precio: newValue,
                          });
                        }
                      }}
                      className="w-10/12 text-center"
                    />
                  ) : (
                    data.precio
                  )}
                </td>
                <td className="w-2/12">
                  {editarFilaId === data.id ? (
                    <>
                      <button onClick={() => BotonGuardar(data.habia)}>
                        <FaRegSave size="26px" className="mr-10" />
                      </button>
                      <button onClick={BotonCancelar}>
                        <RxCross2 size="26px" />
                      </button>
                    </>
                  ) : (
                    <button onClick={() => EditarCampos(data.id)}>
                      <FiEdit3 size="24px" />
                    </button>
                  )}
                </td>
              </tr>
            ))}
            {datosInventario.length === 0 && (
              <tr>
                <td colSpan="6">No hay datos disponibles</td>
              </tr>
            )}
          </tbody>
        </table>
        <button
          className="mt-10 mb-10 bg-red-500 text-white font-bold p-4 rounded-2xl"
          onClick={finalizarInventario}
          disabled={finalizarInventarioLoading}
        >
          {finalizarInventarioLoading
            ? "Cargando..."
            : "Finalizar inventario"}
        </button>

        {mensaje && mostrarMensaje && (
          <Mensaje
            mensaje={mensaje}
            tipo={tipoMensaje}
            onClose={() => setMostrarMensaje(false)}
          />
        )}
      </section>
    </div>
  );
};

export default Inventario;
