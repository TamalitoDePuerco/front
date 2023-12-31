import React from "react";
import { SlNotebook } from "react-icons/sl";
import { MdOutlineInventory2 } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { BsBoxSeam } from "react-icons/bs";
import { AiOutlineUserAdd } from "react-icons/ai";

export const SidebarData = [
    {
        title: "menu",
        icon: <SlNotebook size="22px" color="#FFF"/>,
        link: "/menu"
    },
    {
        title: "Ordenes",
        icon: <MdOutlineInventory2 size="22px" color="#FFF"/>,
        link: "/ordenes"
    },
    {
        title: "Inventario",
        icon: <BsBoxSeam size="22px" color="#FFF"/>,
        link: "/inventario"
    },
    {
        title: "Nuevo Usuario",
        icon: <AiOutlineUserAdd size="22px" color="#FFF"/>,
        link: "/add"
    },
    {
        title: "Cerrar Sesion",
        icon: <BiLogOut size="22px" color="#FFF"/>,
        link: "/"
    }

]