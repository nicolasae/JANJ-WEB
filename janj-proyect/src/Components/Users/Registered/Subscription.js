import React,{useState} from 'react'
import '../../../App.css';
import '../../../assets/css/style.css';
import NavBar from '../../navbar/NavbarU'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
const axios= require('axios')


export default class Subscription extends React.Component {
    constructor(props){
        super(props)
        this.state={
            currencyAvailable:[],
            inputValue:'',
            values:[],
            value:'',
            inputValue:'',
            mytickets:[],
            deletetickets:[],
            addtickets:[],
        }
        this.initial_state()
    }  

    Navbar=()=>{
        var html= NavBar(this.props.rol);
        return(
        <>
        {html}
        </>)
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
    
    addMyTickets=async()=>{
        var baseurl = String(process.env.REACT_APP_API_URL)
		var url = baseurl+'/agregar_suscripcion'
        var data = JSON.stringify({tickets: [this.state.value]})
        var config = {
            url: url,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':'Bearer ' + this.props.token
            },
            data:data
        }
		await axios(config)
		.then(response => response.data)
        .then(data => {
            console.log(data)
        })
    }
    delMyTickets=async()=>{
        var baseurl = String(process.env.REACT_APP_API_URL)
        var deleted = this.state.deletetickets
        var body = JSON.stringify({tickets: deleted})
		var url = baseurl+'/eliminar_suscripcion'
        var config = {
            url: url,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization':'Bearer ' + this.props.token
            },
            data:body
        }
		await axios(config)
		.then(response => response.data)
        .then(data => {
            console.log(data)
        })
    }
    getTickets=async()=>{
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
    setValue= (valueCurrency) => {
        this.setState({value:valueCurrency })
        
    }

    setInputValue = (inputValueCurrency) => {
        this.setState({inputValue:inputValueCurrency })
    }
    initial_state=async()=>{
        await this.getTickets()
        await this.getMyTickets()
    }
    renderMyTickets=()=>{
        const listItems = this.state.mytickets.map((number) => <li>{number}</li>);
        return listItems
    }
    RenderAutoCompleted = () =>{
        return (
            <> 
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
            </> 
        );
        
    }
    renderForDeletedTickets=()=>{
        const onChange =(e,i)=>{
            if(e.target.checked){
                var deleted = this.state.deletetickets
                deleted.push(e.target.value)
                this.setState({deletetickets:deleted})
            }
            if(!e.target.checked){
                var deleted = this.state.deletetickets
                var newDel =[]
                for(const i in deleted){
                    if(deleted[i] !== e.target.value)
                        newDel.push(deleted[i])
                }
                this.setState({deletetickets:newDel})
            }
        }
        const listItems = this.state.mytickets.map((number,i) =>
        <div className="row">
            <div className="col-lg-6">
                <input type='checkbox' name='deleteTickets' onChange={(e)=> onChange(e,i)}/> 
            </div>
            <div className="col-lg-6">
                <p>
                    {number}
                </p>
            </div>
        </div> );
        return listItems
    }

    render(){
    return(
        <section className="subscription">
            <this.Navbar/>
            <h1>Suscripción de divisas</h1>
            <div className="subscription-grid-container">
                <div className="subscription-grid-item">
                    <p>
                        Estas son las suscripciones de divisas que están
                        asociadas al correo electrónico:
                    </p>
                    {this.renderMyTickets()}
                    <p>
                        En el momento en que hayan cambios drásticos
                        impredecibles o favorables en una de estas divisas
                        se le notificará mediante correo electrónico.
                    </p>
                </div>
                <div className="subscription-grid-item">
                    <h2>Divisas Suscriptas:</h2>
                    <div className="row">
                        <div className="col-lg-6">
                            {this.renderForDeletedTickets()}
                        </div>
                        <div className="col-lg-6">
                            <Link to={{pathname:"/register/reloader"}}>
                                <button onClick={(e) =>this.delMyTickets(e)} className="btn-get-started">Eliminar Suscripción</button>
                            </Link>
                        </div>
                    </div>

                    <h2>Divisas por Suscribir:</h2>
                    <div className="row">
                        <div className="col-lg-6">
                        <this.RenderAutoCompleted/>
                        </div>
                        <div className="col-lg-6">
                            <Link to={{pathname:"/register/reloader"}}> 
                                <button onClick={(e) => this.addMyTickets(e)} className="btn-get-started">Agregar Suscripción</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
    }
}  
