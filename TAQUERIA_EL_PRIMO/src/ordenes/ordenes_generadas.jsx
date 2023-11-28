import React from "react";
import Sidebar from "../components/shared/Siderbar";
import { ordenesData } from "./ejemplo_orden";
import "../menu/menu.css";

function OrdenesGeneradas() {

  const getOrdenStatusColor = (status) => {
    switch (status) {
      case "Activo":
        return "bg-green-100"; 
      case "Servido":
        return "bg-orange-200"; 
      default:
        return "bg-white"; 
    }
  };


  return (
    <div className="w-full min-h-screen flex">
      <div className="w-28">
        <Sidebar />
      </div>
      <section className="w-full pt-7 pr-7 pb-7">
        <section className="h-full rounded-xl text-center flex flex-col items-center justify-center">
          <h1 className="p-4 font-bold text-2xl ">Ordenes</h1>
          <section className="grid grid-cols-1 md:grid-rows-3 md:grid-cols-3 gap-7 p-4 h-full w-11/12 ">
            {ordenesData.map((val, key) => {
              const statusColorClass = getOrdenStatusColor(val.Estatus);
              return (
                <div
                  key={key}
                  className={`text-center flex flex-col items-center justify-center p-4 dashed-border shadow-2xl ${statusColorClass}`}
                  style={{ whiteSpace: "pre-line" }}
                >
                  <h1 className="font-bold ">{val.title}</h1>
                  <p>{val.Descripcion}</p>
                </div>
              );
            })}
          </section>
        </section>
      </section>
    </div>
  );
}

export default OrdenesGeneradas;
