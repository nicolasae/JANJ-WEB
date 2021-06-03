import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ModalRegistro } from '../pages/ModalRegistro';
import { ModalLogin } from '../pages/ModalLogin'
// import { GlobalStyle } from './globalStyles';

// Estilos 
import '../../styles/navbar/Navbar.css';
import '../../assets/vendor/bootstrap/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar'



const NavBar = props => {
  const [showModalRegistro, setShowModalRegistro] = useState(false);
  const openModalRegistro = () => {
    setShowModalRegistro(prev => !prev);
    setShowModalLogin(false);
  };
  const [showModalLogin, setShowModalLogin] = useState(false);
  const openModalLogin = () => {
    setShowModalLogin(prev => !prev);
    setShowModalRegistro(false);
  };
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
                <li><Link to="/premiumInfo">Premium</Link></li>
                {/* <li><Link to="/converter">Conversor</Link></li> */}
                <li><Link onClick={openModalLogin}>Iniciar Sesion</Link></li>
                <li><Link onClick={openModalRegistro} >Registrarse</Link></li>                               
              </ul>
            </nav>
          </div>
        </div>
        <ModalRegistro props={props} showModalRegistro={showModalRegistro} setShowModalRegistro={setShowModalRegistro} />
        <ModalLogin    props={props} showModalLogin={showModalLogin} setShowModalLogin={setShowModalLogin} />
    </header>
    
   
  );
}
export default NavBar