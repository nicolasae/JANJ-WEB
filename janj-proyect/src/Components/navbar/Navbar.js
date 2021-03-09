import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'

// Estilos 
import '../../styles/navbar/Navbar.css';
import '../../styles/navbar/Button.css';

// Componentes
import Dropdown from './Dropdown';
import Cover from "../../Components/home/Cover"


function Navbar() {
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
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <Image src="janj-symbol-redu.png" />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <a href="#About" className='nav-links' onClick={closeMobileMenu}>
              ¿Quiénes Somos?  
            </a>
          </li>
          <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link  to='/services'className='nav-links' onClick={handleClick}>
              Servicios<i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contáctenos
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/login'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Inicio de Sesión
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/signup' onClick={closeMobileMenu}>
              <button className='btn'>Suscripción</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;