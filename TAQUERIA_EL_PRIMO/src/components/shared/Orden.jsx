import React from "react";

function Orden() {
  return (
      <section className="pl-6 pr-6 flex flex-col justify-center bg-red-200">
        <section className="bg-green-200 h-3/4 flex flex-col justify-center items-center">
          <div className="grid grid-cols-1 md:grid-rows-1 md:grid-cols-1 gap-5 p-3 h-3/4 w-4/6">
            
          </div>
        </section>
        <button type="button" className="bg-red-500 text-white p-2 rounded-xl w-2/6 mx-auto mb-4">Ordenar</button>
      </section>
  );
}

export default Orden;
