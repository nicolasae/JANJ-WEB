import React, { Component } from "react";
import Navbar from '../navbar/Navbar';
import '../../assets/css/style.css'

const { convert } = require('exchange-rates-api');

class Converter extends React.Component{
    
    constructor(props){
      super(props);
      this.state={  
        form:{
          desde: '',
          hacia: '',
          cantidad: ''
        },
      }
    }

    handleChange=async e=>{
      this.setState({
          form:{
              ...this.state.form,
              [e.target.name]:e.target.value
          }
      })
      console.log(e.target.name);
    }

    
    render(){          

      const conversor=()=>{
        var date = new Date()
        console.log(this.state.form);
        (async () => {
          let amount = await convert(2000, 'USD', 'EUR', '2018-01-01');
          console.log(amount);    // 1667.6394564000002
        })();
      }

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
                      <input id="cantidad" name="cantidad" type="number" placeholder="Ingrese cantidad a convertir" onChange = {this.handleChange}></input>

                      <div className="row">
                        <div className="col-lg-6 text-center ">
                          <h2>De:</h2>
                          <select className="" onChange = {this.handleChange} >
                            <option selected value="USD" name="desde">Dólar Estadounidense</option>
                            <option value="AUD" name="desde">Dólar Australiano</option>
                            <option value="BRL" name="desde">Real Brazileño</option>
                            <option value="GBP" name="desde">Libra Esterlina</option>
                            <option value="BGN" name="desde">Leva Búlgaro</option>
                            <option value="CAD" name="desde">Dólar Canadiense</option>
                            <option value="CNY" name="desde">Yuan</option>
                            <option value="HRK" name="desde">Kuna Croata</option>
                            <option value="CZK" name="desde">Corona Checa</option>
                            <option value="DKK" name="desde">Corona Danesa</option>
                            <option value="EUR" name="desde">Euro</option>
                            <option value="HKD" name="desde">Dólar Hongkonés</option>
                            <option value="HUF" name="desde">Forinto</option>
                            <option value="ISK" name="desde">Corona Islandesa</option>
                            <option value="IDR" name="desde">Rupia Indonesia</option>
                            <option value="INR" name="desde">Rupia India</option>
                            <option value="ILS" name="desde">Nuevo Séquel Israelí</option>
                            <option value="JPY" name="desde">Yen</option>
                            <option value="MYR" name="desde">Ringit</option>
                            <option value="MXN" name="desde">Peso Mexicano</option>
                            <option value="NZD" name="desde">Dólar Neozelandés</option>
                            <option value="NOK" name="desde">Corona Noruega</option>
                            <option value="PHP" name="desde">Peso Filipino</option>
                            <option value="PLN" name="desde">Esloti</option>
                            <option value="RON" name="desde">Leu Rumano</option>
                            <option value="RUV" name="desde">Rublo Ruso</option>
                            <option value="SGD" name="desde">Dólar Singapurense</option>
                            <option value="ZAR" name="desde">Rand</option>
                            <option value="KRW" name="desde">Won Surcoreano</option>
                            <option value="SEK" name="desde">Corona Sueca</option>
                            <option value="CHF" name="desde">Franco Suizo</option>
                            <option value="THB" name="desde">Bat</option>
                            <option value="TRY" name="desde">Libra Turca </option>
                            <option value="USD" name="desde">Dólar Estadounidense</option>                        
                          </select>
                        </div>

                      <div className="col-lg-6 text-center">
                        <h2>A:</h2>
                        <select className="" onChange = {this.handleChange}>
                          <option selected value="USD" name="hacia">Dólar Estadounidense</option>
                            <option value="AUD" name="hacia">Dólar Australiano</option>
                            <option value="BRL" name="hacia">Real Brazileño</option>
                            <option value="GBP" name="hacia">Libra Esterlina</option>
                            <option value="BGN" name="hacia">Leva Búlgaro</option>
                            <option value="CAD" name="hacia">Dólar Canadiense</option>
                            <option value="CNY" name="hacia">Yuan</option>
                            <option value="HRK" name="hacia">Kuna Croata</option>
                            <option value="CZK" name="hacia">Corona Checa</option>
                            <option value="DKK" name="hacia">Corona Danesa</option>
                            <option value="EUR" name="hacia">Euro</option>
                            <option value="HKD" name="hacia">Dólar Hongkonés</option>
                            <option value="HUF" name="hacia">Forinto</option>
                            <option value="ISK" name="hacia">Corona Islandesa</option>
                            <option value="IDR" name="hacia">Rupia Indonesia</option>
                            <option value="INR" name="hacia">Rupia India</option>
                            <option value="ILS" name="hacia">Nuevo Séquel Israelí</option>
                            <option value="JPY" name="hacia">Yen</option>
                            <option value="MYR" name="hacia">Ringit</option>
                            <option value="MXN" name="hacia">Peso Mexicano</option>
                            <option value="NZD" name="hacia">Dólar Neozelandés</option>
                            <option value="NOK" name="hacia">Corona Noruega</option>
                            <option value="PHP" name="hacia">Peso Filipino</option>
                            <option value="PLN" name="hacia">Esloti</option>
                            <option value="RON" name="hacia">Leu Rumano</option>
                            <option value="RUV" name="hacia">Rublo Ruso</option>
                            <option value="SGD" name="hacia">Dólar Singapurense</option>
                            <option value="ZAR" name="hacia">Rand</option>
                            <option value="KRW" name="hacia">Won Surcoreano</option>
                            <option value="SEK" name="hacia">Corona Sueca</option>
                            <option value="CHF" name="hacia">Franco Suizo</option>
                            <option value="THB" name="hacia">Bat</option>
                            <option value="TRY" name="hacia">Libra Turca </option>
                            <option value="USD" name="hacia">Dólar Estadounidense</option>     
                        </select>
                      </div>
                    </div>
                      <div className="col-lg-12 text-center">
                        <button className="btn-get-started" onClick={conversor}>Convertir</button>
                      </div>
                      <div>
                        <h2>El valor es:</h2>

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