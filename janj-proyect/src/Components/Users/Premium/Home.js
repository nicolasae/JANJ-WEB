import React,{useState} from 'react'
import '../../../App.css';
import '../../../assets/css/style.css';
import NavBar from '../../navbar/NavbarU'
import {Line} from 'react-chartjs-2';
import Carousel from 'react-bootstrap/Carousel'

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
        }
        this.initial_state()
    }
    initial_state=()=>{

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
        for(const i in carrousel){
            var item = 
            <Carousel.Item className="item">
                <div className="row">
                    <div className="col-lg-2"/> 
                    <div className="col-lg-4"> 
                        <h1> Divisa: {carrousel[i].title} </h1>
                        <p>Precio: {carrousel[i].price} {carrousel[i].currency}  </p>
                    </div>
                    <div className="col-lg-4"> 
                        <Line data={carrousel[i].data} options={options} />
                    </div>
                </div>
            </Carousel.Item>
            html.push(item)
        }
        return (<>
        <Carousel className="border carrousel" activeIndex={this.state.index} onSelect={this.handleSelectCarrousel}>
            {html}
            <Carousel.Item className="item">
                <h1>Second slide label</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Item>
            <Carousel.Item className="item">
                <h1>Third slide label</h1>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur</p>
            </Carousel.Item>
        </Carousel>
        </>);
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
                <h1>Bienvenido</h1>
                <div> 
                    <this.ControlledCarousel />
                </div>
            </section>
            </>)
        }
    }