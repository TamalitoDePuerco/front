import taco from "../assets/taco.png";
import quesadilla from "../assets/quesadilla.png";
import tortilla from "../assets/tortilla.png"
import { useState } from "react";

function Login() {
  const [contrasenaVisible, setContrasenaVisible] = useState(false);

  function verContrasena() {
    setContrasenaVisible((prevState) => !prevState);
  }

  return (
    <div className="bg-gray-200 max-w-md mx-auto rounded-md">
      <div className="grid justify-items-center">
        <img src={taco} alt="" className="mt-4" />
      </div>
      <form className="p-8 mb-1 grid">
        <div className=" w-full rounded-md relative">
        <input
          type="text"
          placeholder="Usuario"
          autoFocus
          className="p-3 w-full mb-4 rounded-md outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
        />
        </div>


        <div className=" w-full mb-4 rounded-md relative">
          <input
            type={contrasenaVisible ? "text" : "password"}
            placeholder="Contraseña"
            className="w-full px-4 py-2 text-base border rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
          />

          <button
            className="absolute inset-y-0 right-0 flex items-center px-4 text-gray-600"
            onClick={verContrasena}
          >
            {contrasenaVisible ? (
              <img src={tortilla} alt="Tortilla" height="20px" width="32px"/>
            ) : (
              <img src={quesadilla} alt="Quesadilla" height="20px" width="32px"/>
            )}
          </button>
        </div>
        <button className="bg-blue-500 rounded-md text-white px-3 py-1">
          Iniciar Sesion
        </button>
      </form>
    </div>
  );
}

export default Login;
