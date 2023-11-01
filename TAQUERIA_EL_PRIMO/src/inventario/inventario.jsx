import React, { useState } from "react";
import Sidebar from "../components/shared/Siderbar";

function Inventario() {
  return (
    <div className="bg-[#F8F8F8] w-full min-h-screen flex">
      <div className="w-28">
        <Sidebar />
      </div>
      <section className="flex flex-col justify-self-center items-center flex-1">
        <h1 className="text-2xl font-bold pt-16 pb-10">INVENTARIO</h1>
        <table>
          <thead>
            <tr>
              <th>Encabezado 1</th>
              <th>Encabezado 2</th>
              <th>Encabezado 3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dato 1</td>
              <td>Dato 2</td>
              <td>Dato 3</td>
            </tr>
            <tr>
              <td>Dato 4</td>
              <td>Dato 5</td>
              <td>Dato 6</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Inventario;

