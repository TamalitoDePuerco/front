import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Login from './login/login';
import Menu from './menu/menu';

function App() {
  return (
    <Router>
      <Routes>
        <Route exac path="/" element={<Login />} />
        <Route exac path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}

export default App;
