import React from "react";
import pencilImage from "../assets/pencil.png";
import boxImage from "../assets/box.png";

const Sidebar = () => {
  return (
    <div className="bg-[#D8E2EC] fixed left-0 top-0 w-25 h-full">
      <h1 className="text-2xl text-black uppercase font-bold text-center my-5">
        Primo
      </h1>

      <ul className="pl-3">
        <li className="bg-[#F8F8F8] p-3 rounded-tl-lg rounded-bl-lg">
          <a href="#" className="bg-[#DFDFDF] p-2 block rounded-lg">
            <img src={pencilImage} alt="Pencil" className="h-11" />
          </a>
        </li>

        <li className="p-3 rounded-tl-lg rounded-bl-lg hover:bg-[#F8F8F8] group transition-colors">
          <a href="#" className="p-2 block rounded-lg group-hover:bg-[#DFDFDF] transition-colors">
            <img src={boxImage} alt="Box" className="h-11" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;