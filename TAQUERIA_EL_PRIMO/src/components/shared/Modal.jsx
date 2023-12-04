import React, { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { Mensaje } from "./mensaje";

function Modal(props) {
  const [selectedProductos, setSelectedProductos] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(1);
  const [platilloSeleccionado, setPlatilloSeleccionado] = useState(1);
  const [productos, setProductos] = useState([]);
  const [mensaje, setMensaje] = useState({});

  useEffect(() => {
    setProductos(props.productos);
  }, [props.productos]);

  const handleProductoToggle = (producto) => {
    if (selectedProductos.includes(producto)) {
      setSelectedProductos([]);
    } else {
      setSelectedProductos([producto]);
    }
  };

  const handleIngredientToggle = (ingredient) => {
    if (selectedIngredients.includes(ingredient)) {
      setSelectedIngredients(
        selectedIngredients.filter((item) => item !== ingredient)
      );
    } else {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
  };

  const handleAddToOrder = () => {
    if (selectedProductos.length === 0) {
      setMensaje({
        tipo: "error",
        texto: "Debes seleccionar al menos un producto",
      });
      return;
    }

    if (cantidadSeleccionada < 1 || platilloSeleccionado < 1) {
      setMensaje({
        tipo: "error",
        texto: "La cantidad y el platillo deben ser al menos 1",
      });
      return;
    }

    const productoSeleccionado = selectedProductos[0];
    const idOrden = parseInt(localStorage.getItem("id_orden"), 10); 
    const mesa = parseInt(localStorage.getItem("mesa"), 10); 
    const feria = parseInt(productoSeleccionado.precio_unitario, 10);

    const nuevaOrden = {
      title: productoSeleccionado.nombre,
      id_producto: productoSeleccionado.id,
      id_orden: idOrden,
      platillo: platilloSeleccionado,
      precio_unitario: feria,
      cantidad: cantidadSeleccionada,
      mesa: mesa,
      total: 0,
      descripcion: selectedIngredients.join(", "),
    };
    console.log("Contenido de la orden a añadir:", nuevaOrden);

    props.addToOrder(nuevaOrden);
    props.closeModal();
  };

  const handleSumarCantidad = () => {
    setCantidadSeleccionada(cantidadSeleccionada + 1);
  };

  const handleRestarCantidad = () => {
    if (cantidadSeleccionada > 1) {
      setCantidadSeleccionada(cantidadSeleccionada - 1);
    }
  };

  const handleSumarPlatillo = () => {
    setPlatilloSeleccionado(platilloSeleccionado + 1);
  };

  const handleRestarPlatillo = () => {
    if (platilloSeleccionado > 1) {
      setPlatilloSeleccionado(platilloSeleccionado - 1);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content relative w-1/2 h-5/6 mx-auto my-auto">
        <button
          onClick={props.closeModal}
          className="bg-red-500 rounded-md absolute top-2 right-2 p-2"
          type="button"
        >
          <RxCross2 size="15px" color="#FFF" />
        </button>
        <h1 className="text-2xl font-bold pt-8">{props.selectedTitle}</h1>
        <h2 className="font-bold text-xl mt-4">Productos</h2>
        <div className="my-2">
          {Array.isArray(props.productos) &&
            props.productos.map((producto, index) => (
              <div key={index} className="flex items-center centradito">
                <input
                  type="checkbox"
                  id={producto.nombre}
                  checked={selectedProductos.some(
                    (item) => item.id === producto.id
                  )}
                  onChange={() => handleProductoToggle(producto)}
                />
                <label htmlFor={producto.nombre} className="ml-2">
                  {producto.nombre}
                </label>
              </div>
            ))}
        </div>
        <h2 className="font-bold text-xl mt-4">Ingredientes/Sabores</h2>
        <div className="my-2">
          {props.ingredientes &&
            props.ingredientes.map((ingredient, index) => (
              <div key={index} className="flex items-center centradito">
                <input
                  type="checkbox"
                  id={ingredient}
                  checked={selectedIngredients.includes(ingredient)}
                  onChange={() => handleIngredientToggle(ingredient)}
                />
                <label htmlFor={ingredient} className="ml-2">
                  {ingredient}
                </label>
              </div>
            ))}
        </div>
        <h2 className="font-bold text-xl mt-4">Cantidad</h2>
        <div className="flex items-center mt-8 centradito-contador">
          <button
            className="bg-red-500 text-white rounded-md p-2 mr-2 w-1/12"
            onClick={handleRestarCantidad}
          >
            -
          </button>
          <span className="text-xl font-bold w-2/12">{cantidadSeleccionada}</span>
          <button
            className="bg-red-500 text-white rounded-md p-2 ml-2 w-1/12"
            onClick={handleSumarCantidad}
          >
            +
          </button>
        </div>
        <h2 className="text-xl font-bold m-4">Platillo</h2>
        <div className="flex items-center mt-8 centradito-contador">
          <button
            className="bg-red-500 text-white rounded-md p-2 mr-2 w-1/12"
            onClick={handleRestarPlatillo}
          >
            -
          </button>
          <span className="text-xl font-bold w-2/12">{platilloSeleccionado}</span>
          <button
            className="bg-red-500 text-white rounded-md p-2 ml-2 w-1/12"
            onClick={handleSumarPlatillo}
          >
            +
          </button>
        </div>
        <button
          className="bg-red-500 text-white rounded-md p-2 mt-10"
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
