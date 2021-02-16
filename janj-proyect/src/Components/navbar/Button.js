import React from 'react';
import '../../styles/NavBar.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='sign-up'>
      <button className='btn'>Iniciar Sesión</button>
    </Link>
  );
}