import React, { useState, useEffect } from "react";
import Sidebar from "../components/shared/Siderbar";
import { CrearEmpleadoNuevo, ListaSucursales } from "./crear_empleado_nuevo";
import tortilla from "../components/assets/tortilla.png";
import quesadilla from "../components/assets/quesadilla.png";
import "../App.css";

function NuevoEmpleado() {
  const [contrasenaVisible, setContrasenaVisible] = useState(false);
  const [dataList, setDataList] = useState([]);
  const [passwordError, setPasswordError] = useState(false);
  const [telefonoError, setTelefonoError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    telefono: "",
    domicilio: "",
    id_sucursal: "",
    rol: "",
    confirmPassword: "",
  });

  const [validacionError, setValidacionError] = useState({
    nombre: false,
    email: false,
    password: false,
    telefono: false,
    domicilio: false,
    confirmPassword: false,
    id_sucursal: false,
    rol: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      // Verificar que haya al menos un "@" y un "."
      const atSymbolIndex = value.indexOf("@");
      const dotSymbolIndex = value.lastIndexOf(".");

      const isValidEmail =
        atSymbolIndex > 0 &&
        dotSymbolIndex > atSymbolIndex + 1 &&
        dotSymbolIndex < value.length - 1;

      setValidacionError({
        ...validacionError,
        email: !isValidEmail,
      });

      if (!isValidEmail) {
        setErrorMessage("El correo electrónico no es válido.");
      }
    }

    if (name === "telefono") {
      if (value.length > 10 || value.length < 10) {
        setTelefonoError(true);
        setErrorMessage("El número de teléfono no es valido.");
      } else {
        setTelefonoError(false);
      }
    }

    if (name === "id_sucursal_mostrar") {
      setFormData({
        ...formData,
        id_sucursal_mostrar: value,
        id_sucursal:
          dataList.find((sucursal) => sucursal.nombre === value)?.id || "",
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleCrearUsuario = async (e) => {
    e.preventDefault();

    setValidacionError({
      nombre: !formData.nombre,
      email: !formData.email,
      telefono: !formData.telefono,
      domicilio: !formData.domicilio,
      password: !formData.password,
      confirmPassword: formData.password !== formData.confirmPassword,
      id_sucursal: !formData.id_sucursal,
      rol: !formData.rol,
    });

    if (
      !formData.nombre ||
      !formData.email ||
      !formData.password ||
      formData.password !== formData.confirmPassword ||
      !formData.id_sucursal ||
      !formData.rol
    ) {
      setErrorMessage(
        "Los campos no pueden estar vacíos o las contraseñas no coinciden"
      );
      return;
    }

    if (formData.password.length < 8) {
      setPasswordError(true);
      setErrorMessage("La contraseña debe tener al menos 8 caracteres.");
      return;
    } else {
      setPasswordError(false);
    }

    try {
      const { nombre, email, password, telefono, domicilio, id_sucursal, rol } =
        formData;
      const data = await CrearEmpleadoNuevo({
        nombre,
        email,
        password,
        telefono,
        domicilio,
        id_sucursal,
        rol,
      });
      console.log(data);

      setFormData({
        nombre: "",
        email: "",
        password: "",
        telefono: "",
        domicilio: "",
        id_sucursal: "",
        rol: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error("Error al crear Usuario", error);
      if (error.message === "Error desconocido") {
        setErrorMessage("Parámetros incorrectos");
      } else {
        setErrorMessage(
          "No se pudo crear usuario debido a un error de servidor"
        );
      }
    }
  };

  const getListas = async () => {
    try {
      const fetchedDataList = await ListaSucursales();

      if (Array.isArray(fetchedDataList.Sucursal)) {
        const defaultSucursalId =
          fetchedDataList.Sucursal.length > 0
            ? fetchedDataList.Sucursal[0].id
            : "";
        setFormData({
          ...formData,
          id_sucursal: defaultSucursalId,
          id_sucursal_mostrar:
            fetchedDataList.Sucursal.length > 0
              ? fetchedDataList.Sucursal[0].nombre
              : "",
        });

        setDataList(fetchedDataList.Sucursal);
      } else {
        console.error(
          "La lista de sucursales no es un array:",
          fetchedDataList
        );
      }
    } catch (error) {
      console.error("Error al obtener sucursales", error);
    }
  };

  useEffect(() => {
    getListas();
  }, []);

  const verContrasena = () => {
    setContrasenaVisible((prevState) => !prevState);
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
            className="w-full pl-10 pr-10 pb-10 relative"
            onSubmit={handleCrearUsuario}
          >
            <input
              type="text"
              className="block w-full px-12 py-2 pl-5 mt-2 bg-white border rounded-lg text-xl"
              placeholder="Nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              className={`block w-full px-12 py-2 pl-5 mt-2 bg-white border rounded-lg text-xl ${
                validacionError.email ? "border-red-500" : ""
              }`}
              placeholder="Correo electrónico"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {validacionError.email && (
              <p className="text-red-500 mt-2">
                El correo electrónico no es válido.
              </p>
            )}

            <input
              type="number"
              placeholder="Telefono"
              className={`block w-full px-12 py-2 pl-5 mt-2 bg-white border rounded-lg text-xl ${
                telefonoError ? "border-red-500" : ""
              }`}
              value={formData.telefono}
              onChange={handleChange}
              name="telefono"
              required
            />
            {telefonoError && (
              <p className="text-red-500 mt-2">
                {formData.telefono.length < 10
                  ? "El número de teléfono no es válido. Debe tener al menos 10 dígitos."
                  : "El número de teléfono no puede tener más de 10 dígitos."}
              </p>
            )}

            <input
              type="text"
              placeholder="Domicilio"
              className="block w-full px-12 py-2 pl-5 mt-2 bg-white border rounded-lg text-xl"
              value={formData.domicilio}
              onChange={handleChange}
              name="domicilio"
              required
            />

            <select
              className="block w-full px-12 py-2 pl-5 mt-2 bg-white border rounded-lg text-xl"
              value={formData.id_sucursal_mostrar}
              onChange={handleChange}
              name="id_sucursal_mostrar"
            >
              <option value="" disabled>
                Sucursal
              </option>
              {dataList.map((sucursal) => (
                <option key={sucursal.id} value={sucursal.nombre}>
                  {sucursal.nombre}
                </option>
              ))}
            </select>

            <select
              className="block w-full px-12 py-2 pl-5 mt-2 bg-white border rounded-lg text-xl"
              value={formData.rol}
              onChange={handleChange}
              name="rol"
              required
            >
              <option value="" disabled>
                Rol
              </option>
              <option value="Admin">Admin</option>
              <option value="Mesero">Mesero</option>
              <option value="Cocina">Cocina</option>
              <option value="Encargado">Encargado</option>
            </select>

            <div className="mb-2 relative">
              <input
                type={contrasenaVisible ? "text" : "password"}
                className={`block w-full px-12 py-2 pl-5 mt-2 bg-white border rounded-lg text-xl ${
                  validacionError.password ? "border-red-500" : ""
                }`}
                placeholder="Contraseña"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {validacionError.password && (
                <p className="text-red-500 mt-2">
                  La contraseña no puede estar vacía.
                </p>
              )}
              {passwordError && (
                <p className="text-red-500 mt-2">
                  La contraseña debe tener al menos 8 caracteres.
                </p>
              )}
              <div className="absolute inset-y-0 right-0 flex items-center px-4">
                <button type="button" onClick={verContrasena}>
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
            </div>
            <input
              type="password"
              className={`block w-full px-12 py-2 pl-5 mt-2 bg-white border rounded-lg text-xl ${
                validacionError.confirmPassword ? "border-red-500" : ""
              }`}
              placeholder="Confirmar contraseña"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {validacionError.confirmPassword && (
              <p className="text-red-500 mt-2">
                Las contraseñas no coinciden. Por favor, inténtalo de nuevo.
              </p>
            )}
            <button
              type="submit"
              className="block w-72 px-4 py-2 mt-6 mx-auto bg-red-500 border rounded-3xl hover:bg-red-700 text-white text-xl"
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
