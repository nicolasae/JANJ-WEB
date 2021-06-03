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
            currencyAvailable:[],
            dates:[],
            values:[],
            value:'',
            inputValue:'',
            grafico:'',
            price:'',
            date:'',
            cuantoGane:null,
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
    toggle =async () => {
        this.setState({isOpen: !this.state.isOpen});
        console.log(this.state.price, this.state.date)
        var body = JSON.stringify({
            ticket:this.state.value,
            fecha_inversion:this.state.date,
            dinero_invertido:this.state.price
            
        })
        var baseurl = String(process.env.REACT_APP_API_URL)
		var url = baseurl+'/simulacion'
        var config2 = {
            method: 'post',
            url: url,
            headers: { 
              'Content-Type': 'application/json'
            },
            data: body
          };

		await axios(config2)
		.then(response => response.data)
        .then(data => {
            console.log(data)
            var html = <p> De haber invertido la cantidad de <strong>{this.state.price}</strong> USD en la divisa <strong> {this.state.value}</strong>  y la fecha indicada a día de hoy tendría <strong> {data.dinero_final}</strong> USD  </p>
            this.setState({ cuantoGane:html })
        })
      }
      
    onChangeDate = (e) =>{
        var Date = String(e.target.value)
        Date = Date.replace(/-/g, '');
        this.setState({ date: Date})

    }
      
    onChange = (e) =>{
        this.setState({ price: e.target.value})
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
                                <input className="input-start col-lg-3" name="price" value={this.state.price} type="number" placeholder="Precio a Invertir" onChange={(e)=>this.onChange(e)}/>
                                <div className="col-lg-1"></div>
                                <input className="input-start col-lg-3 date" type="date" name="date"  min="2019-06-01" max="2021-04-01" onChange={(e)=>this.onChangeDate(e)}/>
                                <div className="col-lg-3">
                                    <button className="btn-get-started" onClick={this.toggle} aria-controls="example-collapse-text" aria-expanded={this.state.isOpen}>Calcular</button>
                                </div>
                            </div>
                            
                            {this.state.grafico}

                            <Collapse in={this.state.isOpen}>
                                <div className="simulacion-grid-item" style={{"margin-top": "3%"}}>
                                    {this.state.cuantoGane}
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
                                    <li>Seleccione una fecha anterior a la actual (Y superior al 1 de junio de 2019 )y un valor invertido</li>
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