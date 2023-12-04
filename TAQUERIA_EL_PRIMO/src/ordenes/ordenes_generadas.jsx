import React, { useEffect, useState } from "react";
import Sidebar from "../components/shared/Siderbar";
import OrdenModal from "./modal_ordenes_acciones";
import { MostrarOrdenesMesero, MostrarOrdenesCocinero } from "./ordenes_api";

function OrdenesGeneradas() {
  const [ordenesData, setOrdenesData] = useState([]);
  const [userClaims, setUserClaims] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedOrden, setSelectedOrden] = useState(null);

  useEffect(() => {
    async function fetchOrdenes() {
      let response;
      const token = localStorage.getItem("token");

      if (token) {
        try {
          const decodedToken = decodeJwt(token);
          setUserClaims(decodedToken.payload);
          console.log("Rol del usuario:", decodedToken.payload?.rol);

          if (
            decodedToken.payload?.rol === "Mesero" ||
            decodedToken.payload?.rol === "Admin"
          ) {
            console.log("SOYMESEROOOOO");
            response = await MostrarOrdenesMesero();
          } else if (decodedToken.payload?.rol === "Cocina") {
            console.log("SOYCOCINEROOOOO");
            response = await MostrarOrdenesCocinero();
          } else {
            console.error("Rol de usuario no reconocido");
            return;
          }

          setOrdenesData(response["data:"]);
          console.log(response["data:"]);
        } catch (error) {
          console.error("Error decoding token:", error);
        }
      }
    }

    fetchOrdenes();
  }, []);

  // Group orders by "mesa" value
  const groupedOrdenesData = {};
  ordenesData.forEach((val) => {
    const mesa = val.mesa;
    if (!groupedOrdenesData[mesa]) {
      groupedOrdenesData[mesa] = [];
    }
    groupedOrdenesData[mesa].push(val);
  });

  const getOrdenStatusColor = (status) => {
    switch (status) {
      case "activo":
        return "bg-green-100";
      case "servido":
        return "bg-orange-200";
      default:
        return "bg-white";
    }
  };

  function decodeJwt(token) {
    const [header, payload, signature] = token.split(".");
    const decodedHeader = atob(header);
    const decodedPayload = atob(payload);
    const headerObj = JSON.parse(decodedHeader);
    const payloadObj = JSON.parse(decodedPayload);
    return { header: headerObj, payload: payloadObj, signature };
  }

  const handleOrdenClick = (val) => {
    console.log("Clickeaste en la orden:", val);
    setSelectedOrden(val);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="flex">
      <div className="w-28">
        <Sidebar />
      </div>
      <section className="flex-1 pt-7 pr-7 pb-7 overflow-y-auto">
        <section className="h-full rounded-xl text-center flex flex-col items-center justify-center">
          <h1 className="p-4 font-bold text-2xl">Ordenes</h1>
          <section className="grid grid-cols-1 md:grid-rows-6 md:grid-cols-3 gap-8 w-full">
            {Object.entries(groupedOrdenesData).map(([mesa, orders], groupIndex) => (
              <div
                key={groupIndex}
                className={`h-auto text-center flex flex-col items-center justify-center dashed-border shadow-xl ${getOrdenStatusColor(orders[0]?.estatus)}`}
                style={{ whiteSpace: "pre-line" }}
                onClick={() => handleOrdenClick(orders[0])}
              >
                <h1 className="font-bold">Mesa {mesa}</h1>
                {orders.map((val, orderIndex) => (
                  <div key={orderIndex} className="flex flex-col">
                    <p>Nombre: {val.nombre}</p>
                    <p>Platillo: {val.platillo}</p>
                    <p>Cantidad: {val.cantidad}</p>
                  </div>
                ))}
              </div>
            ))}
          </section>
        </section>
      </section>
  
      {selectedOrden && (
        <OrdenModal
          isOpen={modalIsOpen}
          closeModal={closeModal}
          orden={selectedOrden}
        />
      )}
    </div>
  );
}

export default OrdenesGeneradas;
