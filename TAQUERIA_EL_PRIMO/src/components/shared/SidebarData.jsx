import React from "react";
import { SlNotebook } from "react-icons/sl";
import { MdOutlineInventory2 } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { BsBoxSeam } from "react-icons/bs";
import { AiOutlineUserAdd } from "react-icons/ai";

export const SidebarData = [
    {
        title: "menu",
        icon: <SlNotebook size="24px" color="#FFF"/>,
        link: "/menu"
    },
    {
        title: "Ordenes",
        icon: <MdOutlineInventory2 size="24px" color="#FFF"/>,
        link: ""
    },
    {
        title: "Inventario",
        icon: <BsBoxSeam size="24px" color="#FFF"/>,
        link: "/inventario"
    },
    {
        title: "Nuevo Usuario",
        icon: <AiOutlineUserAdd size="24px" color="#FFF"/>,
        link: "/add"
    },
    {
        title: "Cerras Sesion",
        icon: <BiLogOut size="24px" color="#FFF"/>,
        link: "/"
    }

]