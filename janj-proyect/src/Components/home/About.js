import React from 'react';
import '../../App.css';
import '../../assets/vendor/bootstrap/css/bootstrap.css'


export default function About(){
    return (
        <section id="about">
            <div className="container" >
                <div className="row about-container">
                    <div className="col-lg-6 content  ">
                    <h2 className="title">¿Quiénes Somos?</h2>
                    <h3>Misión</h3>
                        <p >
                            Facilitar el acceso y  seguimiento  a la 
                            información de las diferentes divisas  
                            para personas no expertas en el campo.
                        </p>
                        <h3>Visión</h3>
                        <p>
                            Nuestra visión es en un futuro
                            normalizar el entendimiento de la
                            bolsa de valores y prestar consultoría
                            financiera mediante la plataforma y
                            los servicios que puede ofrecer.
                        </p>
                    </div>
                    {/* <div className="col-lg-6 background order-lg-2 order-1" /> */}
                    <img src="janj-logo.png"/>
                </div>
            </div>
        </section>
    );
}
