import React, { useState, useEffect } from "react";
import Sidebar from "../components/shared/Siderbar.jsx";
import Orden from "../components/shared/Orden";
import { HiPlus } from "react-icons/hi";
import { menuData, menuDataB } from "./menuData";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import "../components/shared/Modal.css";
import Modal from "../components/shared/Modal.jsx";
import "../menu/menu.css";
import { ObtenerProductos } from "./menu_api.jsx";

function Menu() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedImg, setSelectedImg] = useState("");
  const [selectedProductos, setSelectedProductos] = useState("");
  const [isOrdenVisible, setIsOrdenVisible] = useState(true);
  const [ordenes, setOrdenes] = useState([]);
  const [selectedIngredientes, setSelectedIngredientes] = useState("");
  const iniciado = localStorage.getItem("iniciado");
  console.log("Iniciado o no", iniciado);

  useEffect(() => {
    if (iniciado === "iniciado") {
      localStorage.removeItem("iniciado");
    }
  }, []);

  const openModal = async (title, img, ingredientes) => {
    if (title === "Agua") {
      handleAguaClick();
    } else {
      try {
        const data = await ObtenerProductos(title);
        setSelectedTitle(title);
        setSelectedImg(img);
        setSelectedProductos(data);
        setSelectedIngredientes(ingredientes);
        setIsModalOpen(true);
      } catch (error) {
        console.error("Error al obtener productos:", error);
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleOrdenVisibility = () => {
    setIsOrdenVisible(!isOrdenVisible);
  };

  const handleAguaClick = () => {
    console.log("Click en Agua");
  };

  const addToOrder = (nuevaOrden) => {
    setOrdenes([...ordenes, nuevaOrden]);
  };

  return (
    <div className="w-full min-h-screen flex">
      <div className="w-28">
        <Sidebar />
      </div>
      <div
        className={`w-${isOrdenVisible ? "4/6" : "full"} pt-7 pr-7 pb-7`}
        id="Menu"
      >
        <div className="h-full rounded-xl text-center flex flex-col items-center justify-center">
          <h1 className="p-4 font-bold text-2xl">PLATILLOS</h1>
          <div className="grid grid-cols-1 md:grid-rows-2 md:grid-cols-3 gap-7 p-4 h-3/4 w-4/6 ">
            {menuData.map((val, key) => {
              return (
                <div
                  key={key}
                  className="bg-white text-center flex flex-col items-center justify-center p-4 dashed-border shadow-2xl"
                >
                  <h1 className="mb-2 font-bold p-2">{val.title}</h1>
                  <img
                    src={val.img}
                    className="max-w-full max-h-full pb-6 pt-6"
                    alt={val.title}
                  ></img>
                  <button
                    type="button"
                    onClick={() =>
                      iniciado === "iniciado" ? openModal(val.title, val.img, val.ingredientes) : null
                    }
                    className="p-2"
                  >
                    <HiPlus
                      size="26px"
                      color="#FFF"
                      className={`bg-red-500 w-9 h-9 rounded-md ${
                        iniciado === null && "cursor-not-allowed"
                      }`}
                    />
                  </button>
                </div>
              );
            })}
          </div>
          {isModalOpen && (
            <Modal
              closeModal={closeModal}
              selectedTitle={selectedTitle}
              selectedImg={selectedImg}
              productos={selectedProductos.data}
              ingredientes={selectedIngredientes}
              addToOrder={addToOrder}
            />
          )}
          <h1 className="font-bold text-2xl">BEBIDAS</h1>
          <div className="grid grid-cols-1 md:grid-rows-2 md:grid-cols-3 gap-7 p-4 h-3/4 w-4/6">
            {menuDataB.map((val, key) => {
              return (
                <div
                  key={key}
                  className="bg-white text-center flex flex-col items-center justify-center p-4 dashed-border shadow-2xl"
                >
                  <h1 className="mb-2 font-bold p-2">{val.title}</h1>
                  <img
                    src={val.img}
                    className="max-w-full max-h-full pb-6 pt-6"
                    alt={val.title}
                  ></img>
                  <button
                  id="add"
                    type="button"
                    onClick={() =>
                      iniciado === "iniciado" ? openModal(val.title, val.img, val.ingredientes) : null
                    }
                    className="p-2"
                    disabled={iniciado === null}
                  >
                    <HiPlus
                      size="26px"
                      color="#FFF"
                      className={`bg-red-500 w-9 h-9 rounded-md ${
                        iniciado === null && "cursor-not-allowed"
                      }`}
                    />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        className={`w-2/6 pt-7 pr-7 pb-7 fixed right-0 h-screen ${
          isOrdenVisible ? "slide-in" : "slide-out"
        }`}
      >
        <div className="bg-slate-200 h-full rounded-xl shadow-2xl relative">
          <button
            type="button"
            onClick={toggleOrdenVisibility}
            className={`p-2 pr-7 absolute top-0 left-0 transform -translate-x-full ${
              isOrdenVisible ? "show-button" : "hide-button"
            }`}
          >
            {isOrdenVisible ? (
              <MdKeyboardDoubleArrowLeft size="24px" />
            ) : (
              <MdKeyboardDoubleArrowRight size="24px" />
            )}
          </button>
          <h1 className="text-center font-bold text-2xl p-6">Orden</h1>
          <Orden ordenes={ordenes} setOrdenes={setOrdenes}  />
          
        </div>
      </div>
      
    </div>
  );
}

export default Menu;
