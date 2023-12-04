import React, { useEffect, useState } from "react";
import { SidebarData } from "./SidebarData";
import { useNavigate } from "react-router-dom";
import { Logout } from "./logout";

function Sidebar() {
  const navigate = useNavigate();
  const [userClaims, setUserClaims] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = decodeJwt(token);
        setUserClaims(decodedToken.payload);
        console.log("Rol del usuario:", decodedToken.payload?.rol);
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
  }, []);

  const handleLogout = async (title, link) => {
    if (title === "Cerrar Sesion") {
      const data = await Logout();
      console.log(data);
      localStorage.removeItem('token');
      setUserClaims(null);
      console.log('Cerrando Sesion');
      navigate(link);
    } else {
      navigate(link);
    }
  };

  function decodeJwt(token) {
    const [header, payload, signature] = token.split('.');
    const decodedHeader = atob(header);
    const decodedPayload = atob(payload);
    const headerObj = JSON.parse(decodedHeader);
    const payloadObj = JSON.parse(decodedPayload);
    return { header: headerObj, payload: payloadObj, signature };
  }

  const canViewButton = (allowedRoles) => !userClaims?.rol || allowedRoles.includes(userClaims?.rol);

  return (
    <div className="bg-gray-400 fixed top-1/2 transform -translate-y-1/2 h-full rounded-e-3xl flex flex-col justify-center items-center">
      <ul>
        {SidebarData.map((val, key) => {
          const isVisible =
            canViewButton(["Admin", "Encargado"]) ||
            (canViewButton(["Mesero"]) && ["menu", "Ordenes"].includes(val.title)) ||
            (canViewButton(["Cocina"]) && val.title === "Ordenes") ||
            val.title === "Cerrar Sesion";

          return isVisible && (
            <li
              key={key}
              onClick={() => {
                handleLogout(val.title, val.link);
              }}
              className={`p-2 rounded-tl-xl rounded-bl-lg group transition-colors hover:bg-white ${
                window.location.pathname === val.link ? "bg-white" : ""
              }`}
              id={window.location.pathname === val.link ? "active" : ""}
              style={{ marginBottom: "10px", marginLeft: "10px" }}
            >
              <div className={`pb-3 p-3 hover:bg-red-600 rounded-xl ${window.location.pathname === val.link ? "bg-red-600" : ""}`}>{val.icon}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;