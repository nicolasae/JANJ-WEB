import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Estilos 
import '../../styles/navbar/Navbar.css';
import '../../styles/navbar/Button.css';

// Componentes
import Dropdown from './Dropdown';

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
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          JANJ
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Quienes Somos?  
            </Link>
          </li>
          <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link  to='/'className='nav-links' onClick={handleDrop}>
              Historial <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/conversor'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Conversor
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/contactenos'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Contactenos
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/iniciosesion'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Inicio de Sesión
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='sign-up' onClick={closeMobileMenu}>
            <button className='btn'>Registro</button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;