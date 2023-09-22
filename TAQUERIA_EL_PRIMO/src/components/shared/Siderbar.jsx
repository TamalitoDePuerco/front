import React from "react";
import pencilImage from "../assets/pencil.png";
import boxImage from "../assets/box.png";
import { LiaNotesMedicalSolid } from "react-icons/lia";
import { MdOutlineInventory2 } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="bg-[#666f79] fixed left-4 top-24 w-25 h-3/4 rounded-3xl">
      <h1 className="text-2xl text-black uppercase font-bold text-center my-5"></h1>

      <ul className="pl-3 pt-28 space-y-5">
        <li className="bg-[#F8F8F8] p-3 rounded-tl-lg rounded-bl-lg">
          <a href="#" className="bg-[#DFDFDF] p-2 block rounded-lg">
            <LiaNotesMedicalSolid />
          </a>
        </li>

        <li className="p-3 rounded-tl-lg rounded-bl-lg hover:bg-[#F8F8F8] group transition-colors">
          <a
            href="#"
            className="p-2 block rounded-lg group-hover:bg-[#DFDFDF] transition-colors"
          >
            <MdOutlineInventory2 />
          </a>
        </li>
      </ul>

      <ul className="pl-3 pt-56 space-y-2">
        <li className="p-3 rounded-tl-lg rounded-bl-lg hover:bg-[#F8F8F8] group transition-colors">
          <a
            href="#"
            className="p-2 block rounded-lg group-hover:bg-[#DFDFDF] transition-colors"
          >
            <BiLogOut />
          </a>
        </li>
      </ul>
      
    </div>
  );
};

export default Sidebar;
