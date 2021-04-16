import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Estilos 
import '../../styles/navbar/Navbar.css';
import '../../assets/vendor/bootstrap/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar'


export default function NavBar(idpermisos) {
  if(idpermisos==1){
    return (
      /* ======= Header ======= */
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
                <li><Link to="/servicios">Servicios</Link></li>
                <li><Link to="/suscripcion">Suscripción A Divisas</Link></li>
              </ul>
            </nav>
          </div>
          </div>
      </header>
    );
  }
  if(idpermisos==2){
    return (
      /* ======= Header ======= */
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
                <li><Link to="/">Premium</Link></li>
                <li><Link to="/login">Iniciar Sesion</Link></li>
                <li><Link to="/signup">Registrarse</Link></li>
              </ul>
            </nav>
              {/* #nav-menu-container */}
          </div>
          </div>
      </header>
    );
  }
  if(idpermisos==3){
    return (
      /* ======= Header ======= */
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
                <li><Link to="/">Premium</Link></li>
                <li><Link to="/login">Iniciar Sesion</Link></li>
                <li><Link to="/signup">Registrarse</Link></li>
              </ul>
            </nav>
              {/* #nav-menu-container */}
          </div>
          </div>
      </header>
    );
  }
  
}
// End Header
// <div>
//   <Navbar fixed="top" collapseOnSelect={true} bg="light" expand="lg">
//       <Navbar.Toggle  eventKey={2} aria-controls="responsive-navbar-nav" />
      // <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
      //   <img src="janj-symbol-redu.png" />
      // </Link>
//       <Navbar.Collapse id="responsive-navbar-nav">
//         <nav className="nav-menu ">
//             <a href="#About" className='nav-links' onClick={closeMobileMenu}>
//               Premium  
//             </a>
//               <Link
//                 to='/login'
//                 className='nav-links'
//                 onClick={closeMobileMenu}
//               >
//                 Inicio de Sesión
//             </Link>
//           <Link to='/signup' onClick={closeMobileMenu}>
//             <button  className='btn'>Registrarse</button>
//           </Link>
//         </nav>
//       </Navbar.Collapse>
//   </Navbar>
// </div>