import React from "react";
import Sidebar from "../components/shared/Siderbar";

function NuevoEmpleado() {
  return (
    <div>
        <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
            <div className="w-7/12 p-14 m-auto bg-[#E6E6E6] rounded-xl shadow-2xl lg:max-w-md">
                <h5 className="text-2xl font-semibold text-center">Crear Nuevo Usuario</h5>
                <form action="" className="mt-8 w-full">
                    <input type="text" className="block w-full px-12 py-2 pl-5 mt-2 bg-white border rounded-lg" placeholder="Correo electrónico"/>
                    <input type="text" className="block w-full px-12 py-2 pl-5 mt-2 bg-white border rounded-lg" placeholder="Contraseña"/>
                    <input type="text" className="block w-full px-12 py-2 pl-5 mt-2 bg-white border rounded-lg" placeholder="Confirmar contraseña"/>
                    <button type="button" className="block w-72 px-4 py-2 mt-6 mx-auto bg-red-500 border rounded-3xl hover:bg-red-700">Crear</button>
                </form>
            </div>
        </div>
      <Sidebar />
    </div>
  );
}

export default NuevoEmpleado;
