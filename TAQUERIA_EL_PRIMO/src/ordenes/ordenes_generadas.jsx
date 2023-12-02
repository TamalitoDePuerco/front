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
    <div className="flex">
      <div className="w-28">
        <Sidebar />
      </div>
      <section className="flex-1 pt-7 pr-7 pb-7 overflow-y-auto">
        <section className="h-full rounded-xl text-center flex flex-col items-center justify-center">
          <h1 className="p-4 font-bold text-2xl">Ordenes</h1>
          <section className="grid grid-cols-1 md:grid-rows-3 md:grid-cols-3 gap-8 p-4 w-full">
            {ordenesData.map((val, key) => {
              const statusColorClass = getOrdenStatusColor(val.Estatus);
              return (
                <div
                  key={key}
                  className={`h-80 text-center flex flex-col items-center justify-center dashed-border shadow-xl ${statusColorClass}`}
                  style={{ whiteSpace: "pre-line" }}
                >
                  <h1 className="font-bold">{val.title}</h1>
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
