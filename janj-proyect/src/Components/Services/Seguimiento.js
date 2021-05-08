import React, { useState } from 'react';
import '../../App.css';
import '../../assets/css/style.css';
import NavBar from '../navbar/NavbarU'

function Navbar(){
    var html= NavBar(1);
    return(
    <>
    {html}
    </>)
}

export default function Seguimiento(){
    return(
        <div>
            <Navbar/>
            <h1>Seguimiento</h1>
        </div>
    );
}