import React, { useState } from "react";
import fondo from "../components/assets/taco-fondo.jpg";
import quesadilla from "../components/assets/quesadilla.png";
import tortilla from "../components/assets/tortilla.png";

function Login() {
  const [contrasenaVisible, setContrasenaVisible] = useState(false);

  function verContrasena() {
    setContrasenaVisible((prevState) => !prevState);
  }

  const fondoStyle = {
    backgroundImage: `url(${fondo})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const formularioStyle = {
    backgroundColor: "rgba(230, 230, 230, 0.95)",
  };

  return (
    <div
      className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden "
      style={fondoStyle}
    >
      <div
        className="w-7/12 p-14 m-auto bg-[#E6E6E6] rounded-3xl shadow-2xl lg:max-w-md"
        style={formularioStyle}
      >
        <h1 className="text-2xl font-semibold text-center">Bienvenido</h1>
        <form action="" className="mt-8 w-full">
          <div className="mb-2 relative">
            <input
              type="email"
              className="block w-full px-4 py-4 mt-2 bg-white border rounded-2xl"
            />
          </div>
          <div className="mb-2 relative">
            <input
              type={contrasenaVisible ? "text" : "password"}
              className="block w-full px-4 py-4 mt-8 bg-white border rounded-2xl pr-14" // Agregamos pl-12 para dar espacio al botón de ver contraseña
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
              onClick={verContrasena}
            >
              {contrasenaVisible ? (
                <img src={tortilla} alt="Taco" height="20px" width="32px" />
              ) : (
                <img
                  src={quesadilla}
                  alt="Quesadilla"
                  height="20px"
                  width="32px"
                />
              )}
            </button>
          </div>

          <button
            type="button"
            className="block w-72 px-4 py-4 mt-6 mx-auto bg-red-500 border rounded-3xl"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
