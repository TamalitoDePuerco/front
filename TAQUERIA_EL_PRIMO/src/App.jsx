import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Login from './login/login';
import Menu from './menu/menu';
import Inventario from './inventario/inventario';

function App() {
  return (
    <Router>
      <Routes>
        <Route exac path="/" element={<Login />} />
        <Route exac path="/menu" element={<Menu />} />
        <Route exac path='/inventario' element={<Inventario/>} />
        
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
