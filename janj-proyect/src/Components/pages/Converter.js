import React, { Component } from "react";
import Navbar from '../navbar/Navbar';
import '../../assets/css/style.css'


class Converter extends Component{
    
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
                <h1 >Convertidor</h1>
              </div>
              <div className="row" >

                <div className="col-lg-4 ">
                  <h2>Cantidad a Convertir</h2>
                  <input placeholder="Ingrese cantidad a convertir"></input>
                </div>

                <div className="col-lg-4 ">
                <h2>De:</h2>
                <select className="" >
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                </div>

                <div className="col-lg-4 ">
                  <h2>A:</h2>
                  <select className="" >
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
            
          
          </div>
        </section>
      );
    }
}

export default  Converter;