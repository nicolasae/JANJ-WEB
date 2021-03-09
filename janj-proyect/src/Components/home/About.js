import React from 'react';
import '../../App.css';
import '../../styles/home /About.css'

function About(){
    return (
        <div className="section-about">
            <h1>¿Quiénes Somos?</h1>
            <div className="zoom">
                <h2>Misión</h2>
                <p>
                    Facilitar el acceso y seguimiento a la información <br/>
                    de las diferentes divisas para personas no <br/>
                    expertas en el campo.
                </p>
                <h2>Visión</h2>
                <p>
                    Nuestra visión es en un futuro normalizar <br/>
                    el entendimiento de la bolsa de valores y <br/>
                    prestar consultoría financiera mediante la <br/>
                    plataforma y los servicios que puede ofrecer.
                </p>
            </div>
        </div>
    );
}
export default About