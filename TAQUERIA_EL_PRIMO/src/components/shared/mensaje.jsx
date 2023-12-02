import React, { useEffect, useState } from "react";
import "./mensaje.css";

export function Mensaje({ mensaje, tipo, onClose }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose(); 
    }, 2000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const containerClass = `fixed top-4 rounded-3xl w-1/5 p-4 text-white text-center ${
    tipo === "success" ? "bg-green-500" : "bg-red-500"
  } ${visible ? "mensaje-slide-in" : "mensaje-slide-out"}`;

  return (
    <section className={`flex items-center justify-center mensaje-container ${visible ? 'mensaje-visible' : 'mensaje-no-visible'}`}>
      {visible && (
        <div className={containerClass}>
          {mensaje}
        </div>
      )}
    </section>
  );
}
