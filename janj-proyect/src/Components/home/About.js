import React from 'react';
import '../../App.css';
import '../../styles/home /About.css'
import '../../assets/vendor/bootstrap/css/bootstrap.css'


export default function About(){
    return (
        <section id="about">
            <div className="container" data-aos="fade-up">
                <div className="row about-container">
                    <div className="col-lg-5 content order-lg-1 order-2">
                    <h2 className="title">¿Quiénes Somos?</h2>
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
                    {/* <div className="col-lg-6 background order-lg-2 order-1" /> */}
                        <img src="janj-logo.png"/>
                </div>
            </div>
        </section>
    );
}
