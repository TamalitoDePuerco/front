import React, { useState } from "react";
import Sidebar from "../components/shared/Siderbar"
import { CrearEmpleadoNuevo } from "./crear_empleado_nuevo";
import "../App.css";

function NuevoEmpleado() {
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    idSucursal: "",
    roles: "",
  });
  const [validacionError, setValidacionError] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
    idSucursal: false,
    roles: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCrearUsuario = async (e) => {
    e.preventDefault();

    setValidacionError({
      name: !formData.name,
      email: !formData.email,
      password: !formData.password,
      confirmPassword: formData.password !== formData.confirmPassword,
      idSucursal: !formData.idSucursal,
      roles: !formData.roles,
    });

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      formData.password !== formData.confirmPassword ||
      !formData.idSucursal ||
      !formData.roles
    ) {
      setErrorMessage("Los campos no pueden estar vacíos o las contraseñas no coinciden");
      return;
    }

    try {
      const data = await CrearEmpleadoNuevo(formData);
      console.log(data);
    } catch (error) {
      console.error("Error al crear Usuario", error);
      if (error.message === "Error desconocido") {
        setErrorMessage("Parámetros incorrectos");
      } else {
        setErrorMessage("No se pudo crear usuario debido a un error de servidor");
      }
    }
  };

  return (
    <div>
      <div className="relative flex flex-col justify-center items-center min-h-screen overflow-hidden">
        <div className="w-4/5 p-14 m-auto bg-gray-200 rounded-xl shadow-2xl lg:max-w-3xl dashed-border">
          <h5 className="text-2xl font-semibold text-center p-10">
            Crear Nuevo Empleado
          </h5>
          <form
            action=""
            className="w-full pl-10 pr-10 pb-10"
            onSubmit={handleCrearUsuario}
          >
            <input
              type="text"
              className={`block w-full px-12 py-3 pl-5 mt-2 bg-white border rounded-lg text-xl ${
                validacionError.name ? "border-red-500" : ""
              }`}
              placeholder="Nombre"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="text"
              className={`block w-full px-12 py-3 pl-5 mt-2 bg-white border rounded-lg text-xl ${
                validacionError.email ? "border-red-500" : ""
              }`}
              placeholder="Correo electrónico"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />

            <select
              className={`block w-full py-4 pl-4 mt-4 rounded-lg text-xl ${
                validacionError.idSucursal ? "border-red-500" : ""
              }`}
              value={formData.idSucursal}
              onChange={handleChange}
              name="idSucursal"
            >
              <option value="" disabled selected>
                Sucursal
              </option>
              <option value="1">1</option>
            </select>

            <select
              className={`block w-full py-4 pl-4 mt-4 rounded-lg text-xl ${
                validacionError.roles ? "border-red-500" : ""
              }`}
              value={formData.roles}
              onChange={handleChange}
              name="roles"
            >
              <option value="" disabled selected>
                Rol
              </option>
              <option value="Admin">Admin</option>
              <option value="Mesero">Mesero</option>
              <option value="Cocina">Cocina</option>
              <option value="Encargado">Encargado</option>
            </select>

            <input
              type="password"
              className={`block w-full px-12 py-3 pl-5 mt-4 bg-white border rounded-lg text-xl ${
                validacionError.password ? "border-red-500" : ""
              }`}
              placeholder="Contraseña"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />

            <input
              type="password"
              className={`block w-full px-12 py-3 pl-5 mt-4 bg-white border rounded-lg text-xl ${
                validacionError.confirmPassword ? "border-red-500" : ""
              }`}
              placeholder="Confirmar contraseña"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />

            <button
              type="submit"
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
