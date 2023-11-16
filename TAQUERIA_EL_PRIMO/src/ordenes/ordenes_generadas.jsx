import React from "react";
import Sidebar from "../components/shared/Siderbar";

function OrdenesGeneradas() {
  return (
    <div className="w-full min-h-screen flex">
      <div className="w-28">
        <Sidebar />
      </div>
      <section className="w-full pt-7 pr-7 pb-7">
        <div className="h-full rounded-xl text-center flex flex-col items-center justify-center">
          <h1 className="p-4 font-bold text-2xl">Ordenes</h1>
          <div className="gird grid-cols-1 md:grid-rows-2 md:grid-cols-3 gap-7 p-4 h-full w-4/6">
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default OrdenesGeneradas;
