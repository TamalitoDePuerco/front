import React, { useState, useEffect } from "react";
import { LoginAuth } from "./login_controller";
import { useNavigate } from "react-router-dom";
import fondo from "../components/assets/taco-fondo.jpg";
import quesadilla from "../components/assets/quesadilla.png";
import tortilla from "../components/assets/tortilla.png";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [userClaims, setUserClaims] = useState(null);

  const [validacionError, setValidacionError] = useState({
    email: false,
    password: false,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setValidacionError({
        email: !formData.email,
        password: !formData.password,
      });
      setErrorMessage("Los campos no pueden estar vacíos");
      return;
    }


    try {
      const data = await LoginAuth(formData);
      localStorage.setItem("token", data.access_token);
      const expirationTime = new Date().getTime() + data.expires_in * 1000;
      localStorage.setItem("tokenExpiration", expirationTime);
      console.log(data);

      const token = localStorage.getItem("token");

      if(token){
        try {
          const decodedToken = decodeJwt(token);
          setUserClaims(decodedToken.payload);
          console.log("ROl", decodedToken.payload?.rol);

          if(decodedToken.payload?.rol === "Cocina"){
            setTimeout(() => {
              navigate("/ordenes");
            }, 2000);
          }else{
            setTimeout(() => {
              navigate("/menu");
            }, 2000);  
          }
        } catch (error) {
          setTimeout(() => {
            navigate("/menu");
          }, 2000);  
          console.error("Error decoding token:", error);
        }
      }
    } catch (error) {
      console.error("Error al iniciar sesión", error);
      if (error.message === "Error desconocido") {
        setErrorMessage("Correo electrónico y/o contraseña incorrectos");
      } else {
        setErrorMessage(
          "No se pudo iniciar sesión debido a problemas del servidor"
        );
      }
    }
  };

  function decodeJwt(token) {
    const [header, payload, signature] = token.split(".");
    const decodedHeader = atob(header);
    const decodedPayload = atob(payload);
    const headerObj = JSON.parse(decodedHeader);
    const payloadObj = JSON.parse(decodedPayload);
    return { header: headerObj, payload: payloadObj, signature };
  }
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

  useEffect(() => {
    const expirationTime = localStorage.getItem("tokenExpiration");

    if (expirationTime && new Date().getTime() > parseInt(expirationTime)) {
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiration");
    }
  }, []);

  return (
    <div
      className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden"
      style={fondoStyle}
    >
      <div
        className="w-7/12 p-14 m-auto bg-[#E6E6E6] rounded-3xl shadow-2xl lg:max-w-md"
        style={formularioStyle}
      >
        <h1 className="text-2xl font-semibold text-center">Bienvenido</h1>
        {errorMessage && (
          <div className="bg-red-500 text-white p-2 mt-3 rounded-md">
            {errorMessage}
          </div>
        )}
        <form action="" className="mt-8 w-full" onSubmit={handleLogin}>
          <div className="mb-2 relative">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full px-12 py-4 pl-10 mt-2 bg-white border rounded-2xl"
              placeholder="Correo electrónico"
            />
            <AiOutlineMail className="absolute inset-y-5 inset-x-4 left-3 flex text-black text-xl" />
          </div>
          <div className="mb-2 relative">
            <input
              type={contrasenaVisible ? "text" : "password"}
              className="block w-full px-12 py-4 pl-10 mt-8 bg-white border rounded-2xl pr-14"
              placeholder="Contraseña"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <AiOutlineLock className="absolute inset-y-5 inset-x-4 left-3 flex text-black text-xl" />
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
            type="submit"
            className="block w-72 px-4 py-4 mt-6 mx-auto bg-red-500 border rounded-3xl hover:bg-red-700 text-white"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
