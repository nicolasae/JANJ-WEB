import React from 'react';
import '../../../../App.css';
import '../../../../assets/css/style.css';
import NavBar from '../../../navbar/NavbarU'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {Line} from 'react-chartjs-2';
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

export default class Seguimiento extends React.Component{    
    constructor(props){
        super(props)
        this.state={
            idCurrency:'',
            nameCurrency:'',
            value:'',
            inputValue:'',
            grafico:'',
            currencyAvailable:[],
            data:null,
            options:null,
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
                            // classes={{ 
                            //     root:classes.root, 
                            //     label: classes.label,
                            // }}
                            style={{"border":"none","margin-bottom":"10%"}}
                            {...params} label="Buscar Divisa"  />}
                    />    
                </div>
                <div className="col-lg-6">
                    <button className="btn-get-started-right" onClick={this.graphController}>Graficar
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
    Navbar=()=>{
        var html= NavBar(this.props.rol);
        return(
        <>
        {html}
        </>)
    }
    
    render(){
        return(
            <section className="seguimiento">
                <this.Navbar/>
                <h1>Seguimiento</h1>
                <div className="row">
                    <div className="seguimiento-grid-container">
                        <div className="seguimiento-grid-item">
                            <this.RenderAutoCompleted/>
                            
                            {this.state.grafico}

                        </div>
                        <div className="seguimiento-grid-item">
                            <h2>¿Cómo funciona?</h2>
                            <p>
                                Nuestro sistema se seguimiento permite
                                monitorear las divisas de las empresas más
                                importantes del mercado, solamente tienes que
                                elegir la divisa que quieres analizar y podrás
                                visualizar diferentes gráficos que muestran el valor
                                histórico que ha tenido la divisa en un intervalo de
                                tiempo.
                            </p>
                        </div>
                    </div>

                </div>


            </section>

);
    }
}