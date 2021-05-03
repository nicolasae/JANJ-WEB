import React, { useState } from 'react';
import { MenuItemsRegister,MenuItemsPremium } from './MenuItems';
// import '../../styles/navbar/Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown(data) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  if (data.permiso === 'premium'){
    return (
      <>
        <ul
          onClick={handleClick}
          className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
        >
          {MenuItemsPremium.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className={item.cName}
                  to={item.path}
                  onClick={() => setClick(false)}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
  if (data.permiso === 'register'){
    return (
      <>
        <ul
          onClick={handleClick}
          className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
        >
          {MenuItemsRegister.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className={item.cName}
                  to={item.path}
                  onClick={() => setClick(false)}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
  
}

export default Dropdown;