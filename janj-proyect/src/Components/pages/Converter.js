import React, { Component } from "react";
import Navbar from '../navbar/Navbar';
import '../../assets/css/style.css'
import CurrencyConverter from 'react-currency-conv';


class Converter extends React.Component{
    
    constructor(props){
      super(props);
      this.state={
        
      }
    }

    render(){
      return (
        <section id="converter">          
          <div>
          <Navbar/> 
          </div>      
            <div className="container">                  
                <div className="section-header">
                  <h1 >Conversor</h1>
                </div>
              </div>
              <div className="container">
                  
                  <div className="row">
                    {/* PARTE DE CONVERSIÓN */}
                    <div className="col-lg-6 text-center">
                      <div className="col-lg-12 ">
                        <h2>Cantidad a Convertir:</h2>
                      </div> 

                      <input placeholder="Ingrese cantidad a convertir"></input>
                      <div className="row">
                        <div className="col-lg-6 text-center ">
                          <h2>De:</h2>
                          <select className="" >
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>

                      <div className="col-lg-6 text-center">
                        <h2>A:</h2>
                        <select className="" >
                          <option selected>Open this select menu</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                      </div>
                    </div>
                      <div className="col-lg-12 text-center">
                        <button className="btn-get-started">Convertir</button>
                      </div>
                  </div>  
              
                  {/* PARTE DE INSTRUCCIONES */}
                  <div className="col-lg-6 ">
                    <div className="col-lg-12 text-center">
                      <h3>¿Cómo utilizar el conversor?</h3>
                    </div>
                    <ol>
                      <li>Ingrese la cantidad a <b>convertir</b></li>
                      <li>Seleccione en <b>“Desde la divisa”</b> la moneda que representa la cantidad a convertir</li>
                      <li>Seleccione en <b>“A la divisa” la moneda a la cual desea covertir la cantidad ingresada</b></li>
                      <li>Presione el botón <b>"Convertir"</b></li>
                    </ol>
                  </div>

                </div>
                
                
                

              </div>

              
              <div className="col-12 col-md-6">


            </div>         
        </section>
      );
    }
}

export default  Converter;