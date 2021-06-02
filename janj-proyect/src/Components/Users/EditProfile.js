import React from 'react'
import '../../App.css';
import '../../assets/css/style.css';
import NavBar from '../navbar/NavbarU'
import {Line} from 'react-chartjs-2';
import Carousel from 'react-bootstrap/Carousel'
import { Button } from '@material-ui/core';


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


const UserData={
    nombre:"Jorge Orobio Auz",
    correo:"jorge@gmail.com",
    contraseña:"password",
    pregunta:'buenas',
    respuesta:"hola",
}

const Preguntas=[ "buenas","hola", "adios", "malas"]

export default class Editprofile extends React.Component{
    constructor(props) {
        super(props)
        this.state={
            index:0,
            userData:{
                nombre:"",
                correo:"",
                contraseña:"",
            }
        }
        this.initial_state()
    }
    initial_state=()=>{
        this.setState({
            userData: {
                ...this.state.userData,
                nombre: UserData.nombre,
                correo: UserData.correo,
                contraseña: UserData.contraseña,
                pregunta: UserData.pregunta,
                respuesta: UserData.respuesta,
            }
        })
    }
    onChange=(e)=>{
        this.setState({
            userData:{
                ...this.state.userData,
                [e.target.name]:e.target.value
            }
        })
    }
    onSelect=(e)=>{
        this.setState({
            userData:{
                ...this.state.userData,
                pregunta:e.target.value
            }
        })
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
            <Carousel.Item>
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
        <Carousel className="border" activeIndex={this.state.index} onSelect={this.handleSelectCarrousel}>
            {html}
            <Carousel.Item>
                <h1>Second slide label</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Item>
            <Carousel.Item>
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
    sendUserData=()=>{
        alert("se envió")
    }
    sendPassword=()=>{
        console.log(this.state)
        alert("se envió")
    }
    renderEditarPerfil=()=>{
        return(<>
            <div className="col-lg-2"/> 
            <div className="col-lg-3" style={{border: "1px solid"}}> 
                <h3> Editar Perfil</h3>
                <br/>
                <input className="form-control" type="email" value={this.state.userData.correo} placeholder="Correo Electrónico"  name="correo" onChange={this.onChange} />
                <br/>
                <input className="form-control" type="text" value={this.state.userData.nombre} placeholder="Nombre Completo" name="nombre" onChange={this.onChange} />
                <br/>
                <input className="form-control" type="password" value={this.state.userData.contraseña} placeholder="Contraseña" name="contraseña" onChange={this.onChange} />
                <br/>
                <Button onClick={this.sendUserData}> Enviar </Button> 
            </div>
        
        </>)
    }
    renderOpcionesPreguntas=()=>{
        if(Preguntas.length > 0){
            var html=[]
            for(const i in Preguntas){
                html.push(<option value={Preguntas[i]}> {Preguntas[i]}</option> )
            }
            return html
        }else{
            return <></>
        }
    }
    renderPreguntaSeguridad=()=>{
        return(<>
            <div className="col-lg-3" style={{border: "1px solid"}}> 
                <h3> Pregunta de seguridad</h3>
                <br/>
                <select className="form-control" name="pregunta" value={this.state.userData.pregunta} onChange={this.onSelect} >
                    {this.renderOpcionesPreguntas()}
                </select>
                <br/>
                <input className="form-control" type="text" value={this.state.userData.nombre}  name="nombre" onChange={this.onChange} />
                <br/>
                <Button onClick={this.sendPassword}> Enviar </Button> 
            </div>
            <div className="col-lg-2"/>
        </>)
    }
    render() {
        return(<>
            <this.Navbar/>
            <section id="editarperfil"> 
                <div className="row">
                    <div className="col-lg-4"/>
                    <div className="col-lg-6">
                        <h1>Bienvenido {UserData.nombre}</h1>
                    </div>
                </div>
                <div className="row"> 
                {this.renderEditarPerfil()}
                <div className="col-lg-2"/>
                {this.renderPreguntaSeguridad()}
                </div>
                {/* <this.ControlledCarousel /> */}
            </section>
            </>)
        }
    }