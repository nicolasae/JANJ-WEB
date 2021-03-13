import React from 'react';
import '../../App.css';
import '../../styles/home /Cover.css'
import { Link } from 'react-router-dom';


function Cover(){
    return(
        <div className="section-cover">               
                <h1><img src="home_img.png" className="derecha"/>JANJ</h1>
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
    );
}



export default Cover