import React from "react";
import { SidebarData } from "./SidebarData";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = (title, link) => {
    if (title === "Cerrar Sesion") {
      localStorage.removeItem('token');
      console.log('Cerrando Sesion');
      navigate(link);
    } else {
      navigate(link);
    }
  };

  return (
    <div className="bg-gray-400 fixed top-1/2 transform -translate-y-1/2 h-full rounded-e-3xl flex flex-col justify-center items-center">
      <ul>
        {SidebarData.map((val, key) => {
          return (
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
              <div className={`pb-3 p-3 hover:bg-red-600 rounded-xl ${ window.location.pathname === val.link ? "bg-red-600" : ""}`}>{val.icon}</div>
            </li>
            
          );
        })}
      </ul>
    </div>
  );
}
export default Sidebar;
