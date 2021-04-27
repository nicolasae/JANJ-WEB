import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Modal } from '../pages/Modal';
import { ModalLogin } from '../pages/ModalLogin'
// import { GlobalStyle } from './globalStyles';

// Estilos 
import '../../styles/navbar/Navbar.css';
import '../../assets/vendor/bootstrap/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar'



export default function NavBar() {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev);
  };
  
  const [showModalLogin, setShowModalLogin] = useState(false);

  const openModalLogin = () => {
    setShowModalLogin(prev => !prev);
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
                <li><Link to="/premium">Premium</Link></li>
                <li><Link to="/converter">Conversor</Link></li>
                <li><Link onClick={openModalLogin}>Iniciar Sesion</Link></li>
                <li><Link onClick={openModal} >Registrarse</Link></li>                               
              </ul>
            </nav>
          </div>
        </div>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <ModalLogin showModalLogin={showModalLogin} setShowModalLogin={setShowModalLogin} />
    </header>
    
   
  );
}