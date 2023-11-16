import React, { useState } from "react";
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

function Menu() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedImg, setSelectedImg] = useState("");
  const [selectedIngredientes, setSelectedIngredientes] = useState("");
  const [isOrdenVisible, setIsOrdenVisible] = useState(true);

  const openModal = (title, img, ingredientes) => {
    if (title === "Agua" || title === "Salchicha" || title === "Carne Asada") {
      handleAguaClick();
    } else {
      setSelectedTitle(title);
      setSelectedImg(img);
      setSelectedIngredientes(ingredientes);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleOrdenVisibility = () => {
    setIsOrdenVisible(!isOrdenVisible);
  };

  const handleAguaClick = () => {
    // Lógica específica para "Agua"
    console.log("Click en Agua");
    // Puedes agregar más lógica según tus necesidades
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
                      openModal(val.title, val.img, val.ingredientes)
                    }
                    className="p-2"
                  >
                    <HiPlus
                      size="26px"
                      color="#FFF"
                      className="bg-red-500 w-9 h-9 rounded-md"
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
              ingredientes={selectedIngredientes}
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
                    type="button"
                    onClick={() =>
                      openModal(val.title, val.img, val.ingredientes)
                    }
                    className="p-2"
                  >
                    <HiPlus
                      size="26px"
                      color="#FFF"
                      className="bg-red-500 w-9 h-9 rounded-md"
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
        <div className="bg-slate-100 h-full rounded-xl shadow-2xl relative">
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
          <Orden />
        </div>
      </div>
    </div>
  );
}

export default Menu;
