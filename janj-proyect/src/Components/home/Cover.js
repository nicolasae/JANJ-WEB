import React from 'react';
import '../../App.css';
import '../../styles/home /Cover.css'
import { Link } from 'react-router-dom';


function Cover(){
    return(
        <div className="cover">
            <div className="container-cover">
                
                <h1>JANJ</h1>

                <p>
                    {/* <img src="janj-symbol.png" /> */}

                    Permitimos el seguimiento,<br/>
                    preddicción, simulación además<br/>
                    de brindar información acerca<br/>
                    del estado actual de las divisas
                </p>
                <Link to='/signup' >
                    <button className='btn'>Aprende con nosotros</button>
                </Link>

            </div>
        </div>
    );
}



export default Cover