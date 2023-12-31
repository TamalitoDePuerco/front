import React, { useState } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Login from './login/login';
import Menu from './menu/menu';
import Inventario from './inventario/inventario';
import NuevoEmpleado from './Empleados/EmpleadoNuevo';
import OrdenesGeneradas from './ordenes/ordenes_generadas';
import { ProtectedRoute } from './components/shared/Protected_Route';

function App() {

  const token = localStorage.getItem('token');

  return (
    <BrowserRouter>
      <Routes>
        <Route exac path="/" element={<Login />} />
        <Route element={<ProtectedRoute token={token}/>}>
          <Route exac path='/menu' replace element = {<Menu/>}/>
          <Route exac path='/inventario' element={<Inventario/>} />
          <Route exac path='/add' element={<NuevoEmpleado/>} />
          <Route exac path='/ordenes' element={<OrdenesGeneradas/>}/>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function PageNotFound() {
  return (
    <div>
      <h2>404 Page not found</h2>
    </div>
  );
}
export default App;