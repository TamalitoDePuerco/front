import React from "react";
import quesadilla from "../components/assets/quesadilla.png";
import taco from "../components/assets/taco.png"
import salchicha from "../components/assets/sausage.png"
import carne from "../components/assets/steak.png"
import agua from "../components/assets/agua.png"
import coca from "../components/assets/Coca.png"
import drink from "../components/assets/drink.png"
import coca_vidrio from "../components/assets/coca_vidrio.png";
import vampiro from "../components/assets/vampiro.png";

export const menuData = [
    {
        title: "Taco",
        img: taco,
        ingredientes: ["Lechuga", "Cebolla", "Salsa", "Dorado", "Semi-Dorado", "Con todo", "Natural"]
    },
    {
        title: "Mixta",
        img: quesadilla,
        ingredientes: ["Lechuga", "Cebolla", "Salsa", "Dorado", "Semi-Dorado", "Con todo", "Natural"]
    },
    {
        title: "Vampiro",
        img: vampiro,
        ingredientes: ["Lechuga", "Cebolla", "Salsa", "Dorado", "Semi-Dorado", "Con todo", "Natural"]
    },
]

export const menuDataB = [
    {
        title: "Agua Natural Medio",
        img: agua,
        ingredientes:[]
    },
    {
        title: "Agua Natural Litro",
        img: agua,
        ingredientes:[]
    },
    {
        title: "Coca De 600",
        img: coca,
        ingredientes: ["Naraja", "Sangria", "Coca-cola"]
    },
    {
        title: "Coca De Vidrio",
        img: coca_vidrio,
        ingredientes: ["Naraja", "Sangria", "Coca-cola"]
    },
    {
        title: "Agua De Sabor Medio",
        img: drink,
        ingredientes: ["Orchata", "Cebada", "Jamaica"]
    },
    {
        title: "Agua de sabor Litro",
        img: drink,
        ingredientes: ["Orchata", "Cebada", "Jamaica"]
    }

]