import React from 'react';
import '../../App.css';
import '../../styles/home /Services.css'


export default function Services(){
    return(
        <section id="services">
            <div className="container" data-aos="fade-up">
            <div className="section-header">
                <h3 className="section-title">Servicios</h3>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-6" data-aos="zoom-in">
                <div className="box">
                    <div className="icon"><a href><i className="fa fa-desktop" /></a></div>
                    <h4 className="title"><a href>Predicción</a></h4>
                    <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </div>
                </div>
                <div className="col-lg-6 col-md-6" data-aos="zoom-in">
                <div className="box">
                    <div className="icon"><a href><i className="fa fa-bar-chart" /></a></div>
                    <h4 className="title"><a href>Seguimiento</a></h4>
                    <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                </div>
                </div>
                <div className="col-lg-6 col-md-6" data-aos="zoom-in">
                <div className="box">
                    <div className="icon"><a href><i className="fa fa-paper-plane" /></a></div>
                    <h4 className="title"><a href>Simulación</a></h4>
                    <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                </div>
                </div>
                <div className="col-lg-6 col-md-6" data-aos="zoom-in">
                <div className="box">
                    <div className="icon"><a href><i className="fa fa-photo" /></a></div>
                    <h4 className="title"><a href>Educación</a></h4>
                    <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
                </div>
                
            </div>
            </div>
        </section>
        // <div className="section-services">
        //     <h1>Servicios</h1>
        //     <div className="section-services-card1">
        //         <h2>Predicción</h2>
        //         <img src="prediccion.png" className="centro"/> 
        //         <p>
        //             Utilizando redes neuronales y
        //             modernos sistemas de predicción
        //             podemos determinar la tendencia del
        //             valor futuro de una divisa o acción a
        //             corto plazo y realizar recomendaciones
        //             acerca de un posible movimiento
        //             financiero.
        //         </p>
        //     </div>
        //     <div className="section-services-card1">
        //         <h2>Seguimiento</h2>
        //         <img src="seguimiento.png" className="centro"/> 
        //         <p>
        //             Se podrá observar el comportamiento
        //             de las principales divisas y acciones
        //             del mundo , actualizándose en tiempo
        //             real para poder estar siempre
        //             actualizado en los cambios que está
        //             presentando la bolsa de valores
        //         </p>
        //     </div>
        //     <div className="section-services-card1">
        //         <h2>Simulación</h2>
        //         <img src="simulacion.png" className="centro"/> 
        //         <p>
        //             Se accederá al simulador de inversión
        //             de bolsa donde podrá aprender y
        //             hacer pruebas de sus inversiones sin
        //             arriesgar su capital
        //         </p>
        //     </div>
        //     <div className="section-services-card1">
        //         <h2>Eduación</h2>
        //         <img src="educacion.png" className="centro"/> 
        //         <p>
        //             Con nosotros puedes aprender como
        //             funciona la dinámica del mercado y
        //             recibir la información necesaria para
        //             aprovechar al máximo nuestros
        //             servicios.
        //         </p>
        //     </div>

        // </div>
    );
}

