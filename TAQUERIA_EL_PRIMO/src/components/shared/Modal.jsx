import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { Mensaje } from "./mensaje";

function Modal(props) {
  const [selectedProductos, setSelectedProductos] = useState([]);
  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(0);
  const [productos, setProductos] = useState([]);
  const [mensaje, setMensaje] = useState({});

  useEffect(() => {
    console.log("Props en useEffect:", props);
    setProductos(props.productos);
  }, [props.productos]);

  const handleIngredientToggle = (productos) => {
    if (selectedProductos.includes(productos)) {
      setSelectedProductos([]);
    } else {
      setSelectedProductos([productos]);
    }
  };

  const handleAddToOrder = () => {
    console.log("Añadir a la orden - Productos:", productos);
    console.log("Añadir a la orden - Productos:", selectedProductos);

    if (selectedProductos.length === 0) {
      setMensaje({
        tipo: "error",
        texto: "Debes seleccionar al menos un producto",
      });
      return;
    }

    const nuevaOrden = {
      title: props.selectedTitle,
      descripcion: selectedProductos.join(", "),
      Cantidad: cantidadSeleccionada,
    };

    props.addToOrder(nuevaOrden);
    props.closeModal();
  };

  console.log("Renderizando Modal - Productos:", productos);

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
        <h1 className="text-2xl font-bold pt-8">{props.selectedTitle}</h1>
        <h2 className="font-bold text-xl">Productos</h2>
        <div>
          {Array.isArray(props.productos) &&
            props.productos.map((productos, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={productos.nombre}
                  checked={selectedProductos.some(
                    (item) => item.id === productos.id
                  )}
                  onChange={() => handleIngredientToggle(productos)}
                />
                <label htmlFor={productos.nombre} className="ml-2">
                  {productos.nombre}
                </label>
              </div>
            ))}
        </div>
        <h2 className="font-bold text-xl">Ingredientes/Sabores</h2>
        <div>{/* Coloca aquí el código para mostrar los productos si es necesario */}</div>
        <button
          className="bg-red-500 text-white rounded-md p-2 mt-4"
          onClick={handleAddToOrder}
        >
          Añadir
        </button>
        {mensaje.texto && (
          <Mensaje
            mensaje={mensaje.texto}
            tipo={mensaje.tipo}
            onClose={() => setMensaje({})}
          />
        )}
      </div>
    </div>
  );
}

export default Modal;
