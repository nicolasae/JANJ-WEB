import React from 'react';
import '../../../../App.css';
import '../../../../assets/css/style.css';
import NavBar from '../../../navbar/NavbarU'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

import {Line} from 'react-chartjs-2';
const axios = require('axios');

const currencyAvailable= [ 'AMZN', 'APPL', 'BTC', 'USD', 'GBP']

//divisas disponibles para los clientes
const currencyAvailableGraph = [

   { 
        name: 'APPL',
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
        name: 'AMZN',
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
const prediccion = [{name: 'AMZN', color: '#F00', valor:"-50%"},{name: 'APPL', color: '#0F0',valor:"50%" }]

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


export default class Prediccion extends React.Component {
    constructor(props){
        super(props)
        this.state={
            value:'',
            inputValue:'',
            grafico:'',
			estado:'',
            currencyAvailable:[],
            dates:[],
            values:[],
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

    Navbar=()=>{
        var html= NavBar(this.props.rol);
        return(
        <>
        {html}
        </>)
    }
	RenderAutoCompleted = () =>{
        return ( 
            <Autocomplete
				className="col-lg-6"
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
                style={{ "width": "25%"}}
                renderInput={(params) =><TextField
                    // classes={{ 
                    //     root:classes.root, 
                    //     label: classes.label,
                    // }}
                    style={{"border":"none","margin-bottom":"10%"}}
                    {...params} label="Buscar Divisa"  />}
            />
        );
        
    }
	setValue= (valueCurrency) => {
        console.log(valueCurrency);
        this.setState({value:valueCurrency })
        
    }
    setInputValue = (inputValueCurrency) => {
        this.setState({inputValue:inputValueCurrency })
    }
    
    graphController =async () => {
		var baseurl = String(process.env.REACT_APP_API_URL)
        var url = baseurl+'/consulta_historial'
		var data = JSON.stringify({
			ticket:this.state.value,
			periodo:'1m',
		})	
		var config = {
            method: 'post',
            url: url,
            headers: { 
              'Content-Type': 'application/json'
            },
            data: data
          };
        await axios(config)
        .then(response => response.data) 
		.then(data => {
            console.log(data)
			var fecha=[];var value=[];
			for(const i in data){
				fecha.push(data[i].fecha)
				value.push(data[i].value)
			}
			this.setState({ dates: fecha, values: value });
		})
		await this.buildDataset()
   
    }
    buildDataset=async()=>{
        console.log(this.state.dates)
        console.log(this.state.values)
		const data = {
			labels: this.state.dates,
			datasets: [
				{
					label: this.state.value,
					data: this.state.values,
					fill: false,
					backgroundColor: '#2dc997',
					borderColor: '#2dc997',
				},
			],
		}
		
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
        var html = <Line data={data} options={options} />
		await this.setState({ grafico:html})
	
	}

	statusController = () => {
        if (prediccion.length > 0){
            for (const i in prediccion){
                if (prediccion[i].name == this.state.value){
                    var color = prediccion[i].color
                    var html = <div className="row">
						 Estado: <br/> <div className="col-lg-6" style={{background:color}}/> <br/>
						 Diferencia en un futuro cercano: {prediccion[i].valor}
					 </div>
                    this.setState({estado:html})                
                }
            }          
        }
        else{
            var html = <></>
            console.log(html)
            this.setState({estado:html})    
        }  
    }

	

    render(){
        return(
            <div>
                <this.Navbar/>
                <div id="prediccion">
					<div className="col-xl-12 text-center">
						<h1 >Prediccion</h1>
					</div>
					<div className="row"> 
						<div className="col-lg-1"/>
						<div className="col-lg-5">
							<div className="row">
								<this.RenderAutoCompleted/>
								<button className="btn-get-started " onClick={this.graphController}>Graficar
								</button>
							</div>
						{this.state.grafico}
						{this.state.estado}
						</div>
						<div className="col-lg-5 border">
							<h1> ¿Cómo funciona </h1> 
							<h4> El servicio de predicción brinda al usuario la posibilidad de entender y visualizar la variación de 
								las divisas. Manejamos diferentes estados para simplificar el entendimiento de del comportamiento y 
								las variaciones que se pueden encontrar en una divisa, estos pueden ser: <strong>Muy Favorable, Favorable
								 Riesgo desconocido, Poco Favorable o Muy Poco Favorable</strong>. Todos y cada uno de estos estados se refieren
								 al riesgo que se corre en un momento dado a la hora de realizar una inversión.
							</h4>
							<h5> 
								<strong style={{color:'#0f7'}}> Muy Favorable: </strong> La divisa se encuentra en un punto minimo parcial o va a emezar un crecimiento repentino 
								y la mayoría de inversiones van a generar ganancias a corto plazo
							</h5>
							<h5> 
								<strong style={{color:'#7f0'}}> Favorable: </strong> La divisa se encuentra subiendo gradualmente por lo que algunas inversiones pueden generar ganancias
							</h5>
							<h5> 
								<strong style={{color:'#cc0'}}>Riesgo Desconocido: </strong> La divisa está actualmente muy volatil y no se conoce cual puede ser su valor a corto plazo por lo que
								la inversión queda a riesgo del usuario
							</h5>
							<h5> 
								<strong style={{color:'#f50'}} >Poco Favorable: </strong> La divisa se encuentra en un descenso gradual por lo que algunas inversiones tieneden a perder dinero
							</h5>
							<h5> 
								<strong style={{color:'#f00'}}>Muy Poco Favorable: </strong> La divisa se encuentra en un descenso pronunciado y no asegura que suba en un corto plazo, por lo que la
								mayoría de inversiones pueden perder dinero 
							</h5>
						</div> 
						<div className="col-lg-1"/>
					</div>
                </div>
            </div>
        );
    }   
}