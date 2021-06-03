import React, { Component } from "react";
import Navbar from '../navbar/Navbar';
import '../../assets/css/style.css'
import Collapse from 'react-bootstrap/Collapse'
const axios = require('axios');


const { convert } = require('exchange-rates-api');


class Converter extends React.Component{
    
    constructor(props){
      super(props);
      this.state={  
        isOpen : false,
        form:{
          desde: '',
          hacia: '',
          cantidad: ''
        },
        valor_convertido:"",
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

    toggle = () => {
      this.setState({isOpen: !this.state.isOpen});
    }
    
    render(){          

      const conversor=()=>{
        var date = new Date();
        // console.log(date);
        (async () => {

          if ( this.state.form.desde == ""){
            await this.setState({form:{ ...this.state.form, desde: "USD"}})
          };
          console.log(this.state.form.desde);

          if (this.state.form.hacia == ""){
            await this.setState({form:{ ...this.state.form, hacia: "EUR"}})
          };
          console.log(this.state.form.hacia);

          let amount;
          var url = 'http://api.currencies.zone/v1/quotes/'+this.state.form.desde+'/'+this.state.form.hacia+'/json'
          var config = {
              method: 'post',
              url: url,
              headers: { 
                'Content-Type': 'application/json',
                
              },
              params:{
                qty:this.state.form.cantidad,
                key:'9010|7kUD*cFEStaVpMUxR5DOKoLJ*c_C^_en'
              }
            };
          await axios(config)
          .then(response => console.log(response))
          this.setState({valor_convertido:amount})
          console.log(amount);    // 1667.6394564000002
          this.toggle();
        })();
      }

      return (
        <section id="converter">          
          <div>
          <Navbar {...this.props}/> 
          </div>      
            <div className="container">                  
                <div className="section-header">
                  <h1 >Conversor</h1>
                </div>
              </div>
              <div className="container">
                  
                  <div className="row">
                    {/* PARTE DE CONVERSIÓN */}
                    <div className="col-lg-5 text-center">
                      <div className="col-lg-12 ">
                        <h2>Cantidad a Convertir:</h2>
                      </div> 
                      <input id="cantidad" name="cantidad" type="number" placeholder="Ingrese cantidad a convertir" onChange = {this.handleChange}></input>

                      <div className="row">
                        <div className="col-lg-6 text-center ">
                          <h2>De:</h2>
                          <select className="" onChange = {this.handleChange} name="desde" >
                            <option selected value="USD">Dólar Estadounidense</option>
                            <option value="AUD">Dólar Australiano</option>
                            <option value="BRL">Real Brazileño</option>
                            <option value="GBP">Libra Esterlina</option>
                            <option value="BGN">Leva Búlgaro</option>
                            <option value="CAD">Dólar Canadiense</option>
                            <option value="CNY">Yuan</option>
                            <option value="HRK">Kuna Croata</option>
                            <option value="CZK">Corona Checa</option>
                            <option value="DKK">Corona Danesa</option>
                            <option value="EUR">Euro</option>
                            <option value="HKD">Dólar Hongkonés</option>
                            <option value="HUF">Forinto</option>
                            <option value="ISK">Corona Islandesa</option>
                            <option value="IDR">Rupia Indonesia</option>
                            <option value="INR">Rupia India</option>
                            <option value="ILS">Nuevo Séquel Israelí</option>
                            <option value="JPY">Yen</option>
                            <option value="MYR">Ringit</option>
                            <option value="MXN">Peso Mexicano</option>
                            <option value="NZD">Dólar Neozelandés</option>
                            <option value="NOK">Corona Noruega</option>
                            <option value="PHP">Peso Filipino</option>
                            <option value="PLN">Esloti</option>
                            <option value="RON">Leu Rumano</option>
                            <option value="RUV">Rublo Ruso</option>
                            <option value="SGD">Dólar Singapurense</option>
                            <option value="ZAR">Rand</option>
                            <option value="KRW">Won Surcoreano</option>
                            <option value="SEK">Corona Sueca</option>
                            <option value="CHF">Franco Suizo</option>
                            <option value="THB">Bat</option>
                            <option value="TRY">Libra Turca </option>
                            <option value="USD">Dólar Estadounidense</option>                        
                          </select>
                        </div>

                      <div className="col-lg-6 text-center">
                        <h2>A:</h2>
                        <select className="" onChange = {this.handleChange} name="hacia">
                          <option selected value="EUR" >Euro</option>
                            <option value="AUD">Dólar Australiano</option>
                            <option value="BRL">Real Brazileño</option>
                            <option value="GBP">Libra Esterlina</option>
                            <option value="BGN">Leva Búlgaro</option>
                            <option value="CAD">Dólar Canadiense</option>
                            <option value="CNY">Yuan</option>
                            <option value="HRK">Kuna Croata</option>
                            <option value="CZK">Corona Checa</option>
                            <option value="DKK">Corona Danesa</option>
                            <option value="EUR">Euro</option>
                            <option value="HKD">Dólar Hongkonés</option>
                            <option value="HUF">Forinto</option>
                            <option value="ISK">Corona Islandesa</option>
                            <option value="IDR">Rupia Indonesia</option>
                            <option value="INR">Rupia India</option>
                            <option value="ILS">Nuevo Séquel Israelí</option>
                            <option value="JPY">Yen</option>
                            <option value="MYR">Ringit</option>
                            <option value="MXN">Peso Mexicano</option>
                            <option value="NZD">Dólar Neozelandés</option>
                            <option value="NOK">Corona Noruega</option>
                            <option value="PHP">Peso Filipino</option>
                            <option value="PLN">Esloti</option>
                            <option value="RON">Leu Rumano</option>
                            <option value="RUV">Rublo Ruso</option>
                            <option value="SGD">Dólar Singapurense</option>
                            <option value="ZAR">Rand</option>
                            <option value="KRW">Won Surcoreano</option>
                            <option value="SEK">Corona Sueca</option>
                            <option value="CHF">Franco Suizo</option>
                            <option value="THB">Bat</option>
                            <option value="TRY">Libra Turca </option>
                            <option value="USD">Dólar Estadounidense</option>     
                        </select>
                      </div>
                    </div>
                      <div className="col-lg-12 text-center">
                        <button className="btn-get-started" onClick={conversor} aria-controls="example-collapse-text" aria-expanded={this.state.isOpen}>Convertir</button>
                        </div>
                      <Collapse in={this.state.isOpen}>
                        <div id="example-collapse-text">
                          <h2>El valor es: {this.state.valor_convertido}</h2>
                        </div>
                      </Collapse>

                  </div>  
                  <div className="col-lg-2"/>
                  {/* PARTE DE INSTRUCCIONES */}
                  <div className="col-lg-5 ">
                    <div className="col-lg-12 text-center">
                      <h3>¿Cómo utilizar el conversor?</h3>
                    </div>
                    <ul>
                      <li>Ingrese la cantidad a <b>convertir</b></li>
                      <li>Seleccione en <b>“Desde la divisa”</b> la moneda que representa la cantidad a convertir</li>
                      <li>Seleccione en <b>“A la divisa” la moneda a la cual desea covertir la cantidad ingresada</b></li>
                      <li>Presione el botón <b>"Convertir"</b></li>
                    </ul>
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