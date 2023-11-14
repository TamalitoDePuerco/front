import React from "react";
import quesadilla from "../components/assets/quesadilla.png";
import taco from "../components/assets/taco.png"
import salchicha from "../components/assets/sausage.png"
import carne from "../components/assets/steak.png"
import agua from "../components/assets/agua.png"
import coca from "../components/assets/Coca.png"
import drink from "../components/assets/drink.png"

export const menuData = [
    {
        title: "Taco",
        img: taco,
        ingredientes: ["Lechuga", "Cebolla", "Salsa", "Dorado", "Semi-Dorado", "Con todo", "Natural"]
    },
    {
        title: "Quesadilla",
        img: quesadilla,
        ingredientes: ["Lechuga", "Cebolla", "Salsa", "Dorado", "Semi-Dorado", "Con todo", "Natural"]
    },
    {
        title: "Salchicha",
        img: salchicha,
        ingredientes: []
    },
    {
        title: "Carne Asada",
        img: carne,
        ingredientes: []
        
    }
]

export const menuDataB = [
    {
        title: "Agua",
        img: agua,
        ingredientes:[]
    },
    {
        title: "Refrescos",
        img: coca,
        ingredientes: ["Naraja", "Sangria", "Coca-cola"]
    },
    {
        title: "Agua de sabor",
        img: drink,
        ingredientes: ["Orchata", "Cebada", "Jamaica"]
    } 

]