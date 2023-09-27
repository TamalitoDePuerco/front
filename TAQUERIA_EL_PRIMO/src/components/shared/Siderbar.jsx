import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SlNotebook } from "react-icons/sl";
import { MdOutlineInventory2 } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { BsBoxSeam } from "react-icons/bs";
import { AiOutlineUserAdd } from "react-icons/ai";

const Sidebar = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="bg-gray-400 fixed top-1/2 transform -translate-y-1/2 w-25 h-full rounded-e-3xl flex flex-col justify-center items-center">
      <ul className="pl-3 space-y-5">
      <li
          className={`p-3 rounded-tl-lg rounded-bl-lg group transition-colors ${
            selectedOption === "notebook"
              ? "bg-[#F8F8F8]"
              : "hover:bg-[#F8F8F8]"
          }`}
        >
          <Link
            to="/menu" 
            className={`p-2 block rounded-lg ${
              selectedOption === "notebook" ? "bg-red-600" : "hover:bg-red-600"
            }`}
            onClick={() => handleOptionClick("notebook")}
          >
            <div className="flex items-center justify-center">
              <SlNotebook style={{ fontSize: "24px", color: "white" }} />
            </div>
          </Link>
        </li>

        <li
          className={`p-3 rounded-tl-lg rounded-bl-lg group transition-colors ${
            selectedOption === "pedidos"
              ? "bg-[#F8F8F8]"
              : "hover:bg-[#F8F8F8]"
          }`}
        >
          <Link
            to="/inventario" 
            className={`p-2 block rounded-lg ${
              selectedOption === "pedidos" ? "bg-red-600" : "hover:bg-red-600"
            }`}
            onClick={() => handleOptionClick("pedidos")}
          >
            <div className="flex items-center justify-center">
              <MdOutlineInventory2 style={{ fontSize: "24px", color: "white" }} />
            </div>
          </Link>
        </li>

        <li
          className={`p-3 rounded-tl-lg rounded-bl-lg group transition-colors ${
            selectedOption === "inventario"
              ? "bg-[#F8F8F8]"
              : "hover:bg-[#F8F8F8]"
          }`}
        >
          <a
            href="#"
            className={`p-2 block rounded-lg ${
              selectedOption === "inventario" ? "bg-red-600" : "hover:bg-red-600"
            }`}
            onClick={() => handleOptionClick("inventario")}
          >
            <div className="flex items-center justify-center">
              <BsBoxSeam style={{ fontSize: "24px", color: "white" }} />
            </div>
          </a>
        </li>

        <li
          className={`p-3 rounded-tl-lg rounded-bl-lg group transition-colors ${
            selectedOption === "nuevoUsuario"
              ? "bg-[#F8F8F8]"
              : "hover:bg-[#F8F8F8]"
          }`}
        >
          <a
            href="#"
            className={`p-2 block rounded-lg ${
              selectedOption === "nuevoUsuario" ? "bg-red-600" : "hover:bg-red-600"
            }`}
            onClick={() => handleOptionClick("nuevoUsuario")}
          >
            <div className="flex items-center justify-center">
              <AiOutlineUserAdd style={{ fontSize: "24px", color: "white" }} />
            </div>
          </a>
        </li>

        <li
          className={`p-3 rounded-tl-lg rounded-bl-lg group transition-colors ${
            selectedOption === "logout"
              ? "bg-[#F8F8F8]"
              : "hover:bg-[#F8F8F8]"
          }`}
        >
          <a
            href="#"
            className={`p-2 block rounded-lg ${
              selectedOption === "logout" ? "bg-red-600" : "hover:bg-red-600"
            }`}
            onClick={() => handleOptionClick("logout")}
          >
            <div className="flex items-center justify-center">
              <BiLogOut style={{ fontSize: "24px", color: "white" }} />
            </div>
          </a>
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;
