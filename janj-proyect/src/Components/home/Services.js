import React from 'react';
import '../../App.css';
import '../../styles/home /Services.css'


function Services(){
    return(
        <div className="section-services">
            <h1>Servicios</h1>
            <div className="section-services-card1">
                <h2>Predicción</h2>
                <img src="prediccion.png" className="centro"/> 
                <p>
                    Utilizando redes neuronales y
                    modernos sistemas de predicción
                    podemos determinar la tendencia del
                    valor futuro de una divisa o acción a
                    corto plazo y realizar recomendaciones
                    acerca de un posible movimiento
                    financiero.
                </p>
            </div>
            <div className="section-services-card1">
                <h2>Seguimiento</h2>
                <img src="seguimiento.png" className="centro"/> 
                <p>
                    Se podrá observar el comportamiento
                    de las principales divisas y acciones
                    del mundo , actualizándose en tiempo
                    real para poder estar siempre
                    actualizado en los cambios que está
                    presentando la bolsa de valores
                </p>
            </div>
            <div className="section-services-card1">
                <h2>Simulación</h2>
                <img src="simulacion.png" className="centro"/> 
                <p>
                    Se accederá al simulador de inversión
                    de bolsa donde podrá aprender y
                    hacer pruebas de sus inversiones sin
                    arriesgar su capital
                </p>
            </div>
            <div className="section-services-card1">
                <h2>Eduación</h2>
                <img src="educacion.png" className="centro"/> 
                <p>
                    Con nosotros puedes aprender como
                    funciona la dinámica del mercado y
                    recibir la información necesaria para
                    aprovechar al máximo nuestros
                    servicios.
                </p>
            </div>

        </div>
    );
}

export default Services;