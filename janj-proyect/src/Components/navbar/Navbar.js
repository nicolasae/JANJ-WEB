import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Estilos 
import '../../styles/navbar/Navbar.css';
import '../../assets/vendor/bootstrap/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar'


export default function NavBar() {
  return (
    <header id="header">
      <div className="row">
        <div className="container col-lg-11">
          <div id="logo">
            <Link to='/' >
              <img src="janj-symbol-redu.png" />
            </Link>
          </div>
            <nav id="nav-menu-container">
              <ul className="nav-menu ">
                <li><Link to="/premium">Premium</Link></li>
                <li><Link to="/converter">Convertidor</Link></li>
                <li><Link to="/login">Iniciar Sesion</Link></li>
                <li><Link to="/signup">Registrarse</Link></li>
              </ul>
            </nav>
          </div>
        </div>
    </header>
   
  );
}