import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'

// Estilos 
import '../../styles/navbar/Navbar.css';
import '../../assets/vendor/bootstrap/css/bootstrap.css';
import Navbar from 'react-bootstrap/Navbar'

// Componentes
import Dropdown from './Dropdown';
import Cover from "../../Components/home/Cover"


function NavBar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const handleDrop = () => setDropdown(!dropdown);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    console.log(window.innerWidth);
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };



  return (
    <div>
      <Navbar fixed="top" collapseOnSelect={true} bg="light" expand="lg">
          <Navbar.Toggle  eventKey={2} aria-controls="responsive-navbar-nav" />
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src="janj-symbol-redu.png" />
          </Link>
          <Navbar.Collapse id="responsive-navbar-nav">
            <nav className="nav-menu ">
                <a href="#About" className='nav-links' onClick={closeMobileMenu}>
                  Premium  
                </a>
                  <Link
                    to='/login'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    Inicio de Sesión
                </Link>
              <Link to='/signup' onClick={closeMobileMenu}>
                <button  className='btn'>Registrarse</button>
              </Link>
            </nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;