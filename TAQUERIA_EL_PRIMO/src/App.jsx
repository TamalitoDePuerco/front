import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Login from './login/login';
import Menu from './menu/menu';
import Inventario from './inventario/inventario';
import NuevoEmpleado from './Empleados/EmpleadoNuevo';
import { ProtectedRoute } from './components/shared/Protected_Route';

function App() {

  const token = localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        <Route exac path="/" element={<Login />} />
        <Route element={<ProtectedRoute token={token}/>}>
          <Route exac path='/menu' element = {<Menu/>}/>
          <Route exac path='/inventario' element={<Inventario/>} />
          <Route exac path='/add' element={<NuevoEmpleado/>} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
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