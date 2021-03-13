import React from 'react';
import '../../App.css';
import '../../styles/home /About.css'

function About(){
    return (
        <div className="section-about">
            <h1>¿Quiénes Somos?</h1>
            <img src="janj-logo.png" className="derecha"/>
            <div className="card">

                <h2>Misión</h2>
                <p >
                    Facilitar el acceso y  seguimiento  a la 
                    información de las diferentes divisas  
                    para personas no expertas en el campo.
                </p>
                <h2>Visión</h2>
                <p>
                    Nuestra visión es en un futuro
                    normalizar el entendimiento de la
                    bolsa de valores y prestar consultoría
                    financiera mediante la plataforma y
                    los servicios que puede ofrecer.
                </p>
            </div>    
        </div>
    );
}
export default About