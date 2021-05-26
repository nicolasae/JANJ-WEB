import React from 'react';
import '../../../../App.css';
import '../../../../assets/css/style.css';
import NavBar from '../../../navbar/NavbarU'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {Line} from 'react-chartjs-2';
import Collapse from 'react-bootstrap/Collapse'
const axios = require('axios');





const useStyles = makeStyles({
    root: {
        "width": "150%",
        "margin-left": "40%"
    },
  });


const currencyAvailable=[
    'Apple','Amazon'
] 

//divisas disponibles para los clientes
const currencyAvailableGraph = [

   { 
        name: 'Apple',
        id: '1', 
        data:{
            labels: ['1', '2', '3', '4', '5', '6'],
            datasets: [
            {
                label: 'Apple',
                data: [12, 19, 3, 5, 2, 3],
                fill: false,
                backgroundColor: '#2dc997',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
            ],
            }
    },

    {
        name: 'Amazon',
        id: '2', 
        data:{
            labels: ['2', '4', '6', '8', '10', '12'],
            datasets: [
            {
                label: 'Amazon',
                data: [12, 29, 8, 12, 2, 3],
                fill: false,
                backgroundColor: '#2dc997',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
            ],
        }
    },
      
]

const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }


export default class Simulacion extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isOpen : false,
            idCurrency:'',
            nameCurrency:'',
            value:'',
            inputValue:'',
            grafico:'',
            price:'',
            date:'',
        }
        this.currencyAvailable()
    }

    currencyAvailable = async()=>{
        var baseurl = String(process.env.REACT_APP_API_URL)
		var url = baseurl+'/listar_tickets'
		await axios.get(url)
		.then(response => response.data)
        .then(data => {
            var currency = [];
            for(const i in data ){
                currency.push(data[i].ticket)
            }
            this.setState({currencyAvailable:currency})
        })
    }
    toggle = () => {
        this.setState({isOpen: !this.state.isOpen});
      }
      

    RenderAutoCompleted = () =>{

        return (
            <> 
            <div className="row"> 
                <div className="col-lg-6">
                    <Autocomplete
                        value={this.state.value}
                        onChange={(event, newValue) => {
                        this.setValue(newValue);
                        }}
                        inputValue={this.state.inputValue}
                        onInputChange={(event, newInputValue) => {
                        this.setInputValue(newInputValue);
                        }}
                        id="controllable-states-demo"
                        options={this.state.currencyAvailable}
                        renderInput={(params) =><TextField
                            style={{"border":"none","margin-bottom":"10%"}}
                            {...params} label="Buscar Divisa"  />}
                    />    
                </div>
                <div className="col-lg-5">
                    <button className="btn-get-started" onClick={this.graphController}>Graficar
                    </button>
                </div>
            </div>
            </> 
        );
        
    }

    setValue= (valueCurrency) => {
        console.log(valueCurrency);
        this.setState({value:valueCurrency })
        
    }

    setInputValue = (inputValueCurrency) => {
        this.setState({inputValue:inputValueCurrency })
    }

    graphController = () => {
        if (currencyAvailableGraph.length > 0){
            for (const i in currencyAvailableGraph){
                if (currencyAvailableGraph[i].name == this.state.value){
                    console.log(currencyAvailableGraph[i].data)
                    var dataValues = currencyAvailableGraph[i].data
                    console.log(dataValues)
                    var html = <Line data={dataValues} options={options} />
                    console.log(html)
                    this.setState({grafico:html})                
                }
            }          
        }
        else{
            var html = <></>
            console.log(html)
            this.setState({grafico:html})    
        }  
    }

    Navbar=()=>{
        console.log(this.props)
        var html= NavBar(this.props.rol);
        return(
        <>
        {html}
        </>)
    }
    render(){
        return(

           <section className="simulacion">
                <this.Navbar/>
                <h1>Simulación</h1>

                <div className="row">
                    <div className="simulacion-grid-container">
                        <div className="simulacion-grid-item">
                            <this.RenderAutoCompleted/>
                            <div className="row" style={{"margin-left":"0.2%"}}>
                                <input className="input-start col-lg-3" placeholder="Precio a Invertir"/>
                                <div className="col-lg-1"></div>
                                <input className="input-start col-lg-3" placeholder="Fecha de Inversión"/>
                                <div className="col-lg-3">
                                    <button className="btn-get-started" onClick={this.toggle} aria-controls="example-collapse-text" aria-expanded={this.state.isOpen}>Calcular</button>
                                </div>
                            </div>
                            
                            {this.state.grafico}

                            <Collapse in={this.state.isOpen}>
                                <div className="simulacion-grid-item" style={{"margin-top": "3%"}}>
                                    <p>
                                        De haber invertido la
                                        cantidad de $ 50 en
                                        Bitcoin para la fecha de
                                        15/02/2021 a día de
                                        hoy tendrías $ 62.15
                                        generando una
                                        ganancia de
                                        aproximadamente el
                                        20% de lo invertido
                                    </p>
                                </div>
                            </Collapse>

                        </div>
                        <div className="simulacion-grid-item">
                            <h2>¿Cómo funciona?</h2>
                            <p>
                                Con nuestro simulador puedes interactuar de
                                manera directa con el valor de las divisas y
                                hacerte a la idea del impacto que hubieran tenido
                                ciertas inversiones en tu utilidad
                                <ol style={{"margin-left":"10%","margin-top":"5%","text-align":"justify"}}>
                                    <li>Seleccione una de las divisas</li>
                                    <li>Oprima el botón de "Gráficar"</li>
                                    <li>Seleccione una fecha anterior a la actual y un valor invertido</li>
                                    <li>Oprima el botón de "Calcular"</li>
                                    
                                </ol>
                                
                            </p>
                        </div>
                        
                    </div>

                </div>


            </section>
        );
    }
}