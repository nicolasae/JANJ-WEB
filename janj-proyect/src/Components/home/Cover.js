import React from 'react';
import '../../App.css';
import '../../styles/home /Cover.css'
import { Link } from 'react-router-dom';


function Cover(){
    return(
        <div className="section-cover">
            <img src="home_img.png" className="central"/>               

            <div className="section-cover-info">
                <h1>JANJ</h1>
                <p>                    
                    Permitimos el seguimiento,<br/>
                    preddicción, simulación además<br/>
                    de brindar información acerca<br/>
                    del estado actual de las divisas
                </p>
                <Link to='/signup' >
                    <button className='btn'>Aprende con nosotros</button>
                </Link>
            </div>

            {/* <div className="section-cover-correo">
                <p>
                    Mantente al día 
                    con los cambios 
                    en las divisas y 
                    acciones, y recibe 
                    actualizaciones 
                    de nuevo 
                    contenido
                </p>
                <input type="email" id="corre_notificaciones" placeholder="Correo Electrónico"/>
                <button className='btn'>Enviar</button>
            </div> */}
        </div>
        
    );
}



export default Cover