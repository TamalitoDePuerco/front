import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

function Modal(props) {
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const handleIngredientToggle = (ingredient) => {
    if (selectedIngredients.includes(ingredient)) {
      setSelectedIngredients(selectedIngredients.filter((item) => item !== ingredient));
    } else {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content relative w-1/2 h-5/6">
        <button
          onClick={props.closeModal}
          className="bg-red-500 rounded-md absolute top-2 right-2 p-2"
          type="button"
        >
          <RxCross2 size="15px" color="#FFF" />
        </button>
        <h1 className="text-2xl font-bold pt-8">{props.selectedTitle}</h1>
        <h2 className="font-bold text-xl">Ingredientes/Sabores</h2>
        <div>
          {props.ingredientes && props.ingredientes.map((ingredient, index) => (
            <div key={index} className="flex items-center">
              <input
                type="checkbox"
                id={ingredient}
                checked={selectedIngredients.includes(ingredient)}
                onChange={() => handleIngredientToggle(ingredient)}
              />
              <label htmlFor={ingredient} className="ml-2">
                {ingredient}
              </label>
            </div>
          ))}
        </div>
        <button className="bg-blue-500 text-white rounded-md p-2 mt-4">
          Añadir
        </button>
      </div>
    </div>
  );
}

export default Modal;
