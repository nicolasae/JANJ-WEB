import React from 'react';
import '../../App.css';
import { BiBrain , BiBookAlt} from "react-icons/bi";
import { BsSearch, BsPuzzle} from "react-icons/bs";

export default function Services(){
    return(
        <section id="services">
            <div className="container">  
            <div className="section-header">
                <h3 className="section-title">Nuestros Servicios</h3>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-6" >
                <div className="box">
                    <div className="icon"><BiBrain size="3em" style={{color:'#EEE'}}  /></div>
                    <h4 className="title"><a href>Predicción</a></h4>
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
                <div className="col-lg-6 col-md-6">
                <div className="box">
                    <div className="icon"><BsSearch size="3em" style={{color:'#EEE'}}/></div>
                    <h4 className="title"><a href>Seguimiento</a></h4>
                    <p>
                        Se podrá observar el comportamiento
                        de las principales divisas y acciones
                        del mundo , actualizándose en tiempo
                        real para poder estar siempre
                        actualizado en los cambios que está
                        presentando la bolsa de valores
                    </p>
                </div>
                </div>
                
                <div className="col-lg-6 col-md-6" >
                <div className="box">
                    <div className="icon"><BsPuzzle size="3em" style={{color:'#EEE'}}/></div>
                    <h4 className="title"><a href>Simulación</a></h4>
                    <p>
                        Se accederá al simulador de inversión
                        de bolsa donde podrá aprender y
                        hacer pruebas de sus inversiones sin
                        arriesgar su capital
                    </p>
                </div>
                </div>
                <div className="col-lg-6 col-md-6">
                <div className="box">
                    <div className="icon"><BiBookAlt size="3em" style={{color:'#EEE'}}  /></div>
                    <h4 className="title"><a href>Educación</a></h4>
                    <p>
                        Con nosotros puedes aprender como
                        funciona la dinámica del mercado y
                        recibir la información necesaria para
                        aprovechar al máximo nuestros
                        servicios.
                    </p>
                </div>
                </div>
                
            </div>
            </div>
        </section>

    );
}

