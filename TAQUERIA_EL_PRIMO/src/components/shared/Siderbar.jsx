import React from "react";
import { SlNotebook } from "react-icons/sl";
import { MdOutlineInventory2 } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { BsBoxSeam } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="bg-red-800 fixed left-4 top-1/2 transform -translate-y-1/2 w-25 h-1/2 rounded-3xl flex flex-col justify-center items-center">

      <ul className="pl-3 space-y-5">
        <li className="p-3 rounded-tl-lg rounded-bl-lg hover:bg-[#F8F8F8] group transition-colors">
          <a href="#" className="p-2 block rounded-lg group-hover:bg-gray-400 transition-colors">
            <div className="flex items-center justify-center">
              <SlNotebook style={{ fontSize: "24px", color: "white" }} />
            </div>
          </a>
        </li>

        <li className="p-3 rounded-tl-lg rounded-bl-lg hover:bg-[#F8F8F8] group transition-colors">
          <a href="#" className="p-2 block rounded-lg group-hover:bg-gray-400 transition-colors">
            <div className="flex items-center justify-center">
              <BsBoxSeam style={{ fontSize: "24px", color: "white" }} />
            </div>
          </a>
        </li>

        <li className="p-3 rounded-tl-lg rounded-bl-lg hover:bg-[#F8F8F8] group transition-colors">
          <a
            href="#"
            className="p-2 block rounded-lg group-hover:bg-gray-400 transition-colors"
          >
            <div className="flex items-center justify-center">
              <MdOutlineInventory2 style={{ fontSize: "24px", color: "white" }} />
            </div>
          </a>
        </li>

        <li className="p-3 rounded-tl-lg rounded-bl-lg hover:bg-[#F8F8F8] group transition-colors">
          <a
            href="#"
            className="p-2 block rounded-lg group-hover:bg-gray-400 transition-colors"
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
