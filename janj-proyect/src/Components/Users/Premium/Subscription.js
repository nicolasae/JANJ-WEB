import React,{useState} from 'react'
import '../../../App.css';
import '../../../assets/css/style.css';
import NavBar from '../../navbar/NavbarU'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        "width": "150%",
        "margin-left": "40%"
    },

  });
//divisas disponibles para los clientes
const currencyAvailable =[
    { name: 'Apple', id: 1 },
    { name: 'Amazon', id: 2 },
    { name: 'BitCoin', id: 3 },
]

//divisas suscriptas 
const currencyList =[
    { name: 'Apple', id: 1 },
    { name: 'Amazon', id: 2 },
    { name: 'BitCoin', id: 3 },
    { name: 'Tesla', id:4 },
]


function AutoCompleteFunction(){
    const classes = useStyles();  
    return(
        <Autocomplete
        id="combo-box-demo"
        options={currencyAvailable}
        getOptionLabel={(option) => option.name}
        style={{ "width": "40%"}}
        renderInput={(params) => <TextField
            classes={{ 
                root:classes.root, 
                label: classes.label,
            }}
            style={{"border":"none","margin-bottom":"10%"}}
            {...params} label="Buscar Divisas"  />}
        />
    );
}

function CurrencyMap(){    
    const listItems = currencyList.map((number) => <li>{number.name}</li>);
    return listItems
}

function CurrencyMapDelete(){    
    const listItems = currencyList.map((number) =>
            <div className="row">
                <div className="col-lg-1">

                </div>
                <div className="col-lg-2">
                    <input type="checkbox"/>
                </div>
                <div className="col-lg-6">
                <p>{number.name}</p>
            </div>
        </div>);
    return listItems
}

function CurrencyMapAdd(){    
    const listItems = currencyAvailable.map((number) =>
            <div className="row">
                <div className="col-lg-1">

                </div>
                <div className="col-lg-2">
                    <input type="checkbox"/>
                </div>
                <div className="col-lg-6">
                <p>{number.name}</p>
            </div>
        </div>);
    return listItems
}

export default class Subscription extends React.Component {
    constructor(props){
        super(props)
        this.state={
            
        }
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
        <section className="subscription">
            <this.Navbar/>
            <h1>Suscripción de divisas</h1>
            <div className="subscription-grid-container">
                <div className="subscription-grid-item">
                    <p>
                        Estas son las suscripciones de divisas que están
                        asociadas al correo electrónico:
                    </p>
                    <CurrencyMap/>
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
                            <CurrencyMapDelete/>
                        </div>
                        <div className="col-lg-6">
                            <button className="btn-get-started">Eliminar Suscripción</button>
                        </div>
                    </div>

                    <h2>Divisas por Suscribir:</h2>
                    <AutoCompleteFunction/>
                    <div className="row">
                        <div className="col-lg-6">
                            <CurrencyMapAdd/>
                        </div>
                        <div className="col-lg-6">
                            <button className="btn-get-started">Agregar Suscripción</button>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
    }
}  
