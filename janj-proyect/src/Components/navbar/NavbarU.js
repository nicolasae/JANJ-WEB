import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Estilos 
// import '../../styles/navbar/Navbar.css';
import '../../assets/vendor/bootstrap/css/bootstrap.css';
// Dropdown
import Dropdown from './Dropdown';
import DropdownProfile from './DropdownProfile';

export default function NavBar(idpermisos) {

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);


  
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
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

  if(idpermisos==1){
    return (
      /* ======= Header ======= */
      <header id="header">
        <div className="row">
        <div className="container col-lg-11">
          <div id="logo">
          <Link to='/homeR' >
            <img src="janj-symbol-redu.png" />
          </Link>
          </div>
            <nav id="nav-menu-container">
              <ul className="nav-menu ">
                <li 
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave} 
                >
                    <Link to="#">Servicios<i className='fas fa-caret-down' /></Link>
                    {dropdown && <Dropdown />}
                </li> 
                <li><Link to="/suscripcion">Suscripción A Divisas</Link></li>
                {/* <li 
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}>
                  <Link to="#"><i  className="fas fa-user-circle"/></Link>
                  {dropdown && <Dropdown />}
                </li> */}
                <li 
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave} 
                >
                    <Link to="#"><i className='fas fa-user-circle' /></Link>
                    {dropdown && <DropdownProfile />}
                </li> 
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
