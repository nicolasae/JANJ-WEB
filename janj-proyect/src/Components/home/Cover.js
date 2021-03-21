import React from 'react';
import '../../App.css';
import '../../styles/home /Cover.css'
// import '../../assets/vendor/bootstrap/css/bootstrap.css'
import { Link } from 'react-router-dom';


function Cover(){
    return(

        <div className="section-cover container">
            <div className="row"> 
                <div className="seccion-cover-info col-sm col-lg-4">
                    <h1>JANJ</h1>
                    <p>                    
                        Permitimos el seguimiento,
                        preddicción, simulación además
                        de brindar información acerca
                        del estado actual de las divisas
                    </p>
                    <Link to='/signup' >
                        <button className='btn'>Aprende con nosotros</button>
                    </Link>
                </div>
                <div className="col-sm col-lg-4">
                    <img src="home_img.png" className="central"/>
                </div>
                <div className="col-sm col-lg-4">
                    <p>
                        Mantente al día 
                        con los cambios 
                        en las divisas y 
                        acciones, y recibe 
                        actualizaciones 
                        de nuevo 
                        contenido
                    </p>
                    <input type="email" id="correo_notificaciones" placeholder="Correo Electrónico"/>
                    <button className='btn'>Enviar</button>
                </div>
            </div>        
        </div>
        
    );
}



export default Cover


{/* <div className="container">
            <div className="row"> 
                <div className="seccion-cover-info col-sm col-lg-4">
                    <h1>JANJ</h1>
                    <p>                    
                        Permitimos el seguimiento,
                        preddicción, simulación además
                        de brindar información acerca
                        del estado actual de las divisas
                    </p>
                    <Link to='/signup' >
                        <button className='btn'>Aprende con nosotros</button>
                    </Link>
                </div>
                <div className="col-sm ">
                    <img src="home_img.png" className="central"/>
                </div>
                <div className="col-sm col-lg-4">
                    <p>
                        Mantente al día 
                        con los cambios 
                        en las divisas y 
                        acciones, y recibe 
                        actualizaciones 
                        de nuevo 
                        contenido
                    </p>
                    <input type="email" id="correo_notificaciones" placeholder="Correo Electrónico"/>
                    <button className='btn'>Enviar</button>
                </div>
            </div>
        </div> */}