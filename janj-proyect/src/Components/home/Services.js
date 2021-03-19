import React from 'react';
import '../../App.css';
import '../../styles/home /Services.css'


function Services(){
    return(
        <div className="section-services">
            <h1>Servicios</h1>
            <div className="section-services-card1">
                <h2>Predicción</h2>
                <img src="prediccion.png"/> 
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
        </div>
    );
}

export default Services;