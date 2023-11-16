import React from "react";
import Sidebar from "../components/shared/Siderbar";
import "../App.css"

function NuevoEmpleado() {
  return (
    <div>
      <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
        <div className="w-4/5 p-14 m-auto bg-gray-200 rounded-xl shadow-2xl lg:max-w-3xl dashed-border">
          <h5 className="text-2xl font-semibold text-center p-10">
            Crear Nuevo Empleado
          </h5>
          <form action="" className="w-full pl-10 pr-10 pb-10">
            <input
              type="text"
              className="block w-full px-12 py-3 pl-5 mt-2 bg-white border rounded-lg text-xl"
              placeholder="Correo electrónico"
            />

            <select className="block w-full py-4 pl-4 mt-4 rounded-lg text-xl">
              <option selected>Sucursal</option>
            </select>

            <select className="block w-full py-4 pl-4 mt-4 rounded-lg text-xl">
              <option selected>Role</option>
              <option value="">Mesero</option>
              <option value="">Cocina</option>
              <option value="">Gerente</option>
            </select>

            <input
              type="text"
              className="block w-full px-12 py-3 pl-5 mt-4 bg-white border rounded-lg text-xl"
              placeholder="Contraseña"
            />
            <input
              type="text"
              className="block w-full px-12 py-3 pl-5 mt-4 bg-white border rounded-lg text-xl"
              placeholder="Confirmar contraseña"
            />
            <button
              type="button"
              className="block w-72 px-4 py-3 mt-6 mx-auto bg-red-500 border rounded-3xl hover:bg-red-700 text-white text-xl"
            >
              Crear
            </button>
          </form>
        </div>
      </div>
      <Sidebar />
    </div>
  );
}

export default NuevoEmpleado;
