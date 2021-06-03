import React,{useState} from 'react'
import '../../../App.css';
import '../../../assets/css/style.css';
import NavBar from '../../navbar/NavbarU'
import {Line} from 'react-chartjs-2';
import Carousel from 'react-bootstrap/Carousel'
const axios= require('axios')

const carrousel = [
    {
        title: 'AMZN',
        price: 123,
        currency: 'USD',
        status:'',
        data:{
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
            datasets: [
            {
                label: 'AMZN',
                data: [12, 19, 3, 5, 2, 3],
                // fill: false,
                backgroundColor: '#2dc997',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
            ],
        }
    },
    {
        title: 'BTC',
        price: 45,
        currency: 'USD',
        status:'',
        data:{
            labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
            datasets: [
            {
                label: 'AMZN',
                data: [12, 19, 3, 5, 2, 3],
                // fill: false,
                backgroundColor: '#2dc997',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
            ],
        }
    },

]


export default class home extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            index:0,
            mytickets:[],
            dates:[],
            values:[],
            value:'',
            graficos:[]

        }
        this.initial_state()
    } 
    getMyTickets=async()=>{
        var baseurl = String(process.env.REACT_APP_API_URL)
		var url = baseurl+'/listar_suscripcion'
        var config = {
            url: url,
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + this.props.token
            }
        }
		await axios(config)
		.then(response => response.data)
        .then(data => {
            this.setState({mytickets:data.divisas})
        })
    } 
    graphController =async (divisa) => {
		var baseurl = String(process.env.REACT_APP_API_URL)
        var url = baseurl+'/consulta_historial'
		var data = JSON.stringify({
			ticket:divisa,
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
		.then(async data => {
            console.log(data)
			var fecha=[];var value=[];
			for(const i in data){
				fecha.push(data[i].fecha)
				value.push(data[i].value)
			}
			await this.setState({ dates: fecha, values: value });
		})
        const datos = {
			labels: this.state.dates,
			datasets: [
				{
					label: divisa,
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
        var html = <Line data={datos} options={options} />
        return html
   
    }
    initial_state=async()=>{
        await this.getMyTickets()
        var graficos=[]
        for(const i in this.state.mytickets){
            var grafico = await this.graphController(this.state.mytickets[i])
            graficos.push(grafico)
        }
        await this.setState({graficos: graficos})

    }
    handleSelectCarrousel=(selectedIndex,e)=>{
        this.setState({ index:selectedIndex})
    } 

    ControlledCarousel=()=> {
        var html = []
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
        if(this.state.mytickets.length > 0 && this.state.graficos.length > 0) {
            for(const i in this.state.mytickets){
                var item = 
                <Carousel.Item className="item">
                    <div className="row">
                        <div className="col-lg-2"/> 
                        <div className="col-lg-4"> 
                            <h1> Divisa: {this.state.mytickets[i]} </h1>
                        </div>
                        <div className="col-lg-4"> 
                                {this.state.graficos[i]}
                        </div>
                    </div>
                </Carousel.Item>
                html.push(item)
            }
            return (<>
            <Carousel className="border carrousel" activeIndex={this.state.index} onSelect={this.handleSelectCarrousel}>
                {html}
            </Carousel>
            </>);
        }else return null
    }
    Navbar=()=>{
        var html= NavBar(this.props.rol);
        return(
        <>
        {html}
        </>)
    }
    render() {
        return(<>
            <this.Navbar/>
            <section id="carrousel"> 
                <h1>Bienvenido {this.props.nombre}</h1>
                <div> 
                    <this.ControlledCarousel/>
                </div>
            </section>
            </>)
        }
    }