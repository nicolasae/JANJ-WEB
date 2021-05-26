import React from 'react';
import '../../App.css';
// import '../../assets/vendor/bootstrap/css/bootstrap.css'
import { Link } from 'react-router-dom';
import Grafico from './Grafico';

export default function Hero(){
      
    return(
        <section id="hero">
            <div className="hero-container"  >
                <div className= "row">
                    <div className="col-sm col-lg-6"> 
                    <h1>JANJ</h1>
                    <h2>                    
                        Permitimos el seguimiento,
                        preddicción, simulación además
                        de brindar información acerca
                        del estado actual de las divisas
                    </h2>            
                    <Link to='/premiumInfo' >
                        <a type="button" className='btn-get-started'>Aprende con nosotros</a>
                    </Link>
                    </div >
                <div className="col-sm col-lg-5">
                    <Grafico/>
                </div>
                </div>
            </div>
        </section>
        
    );
}



