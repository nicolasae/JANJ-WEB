import React,{useState} from 'react'
import '../../../App.css';
import '../../../assets/css/style.css';
import NavBar from '../../navbar/NavbarU'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

const currency =[
    
    { name: 'Apple', id: 1 },
    { name: 'Amazon', id: 2 },
    { name: 'BitCoin', id: 3 },
    
]
    


export default class Subscription extends React.Component {

    constructor(props){
        super(props)
        this.state={
            
        }
    }  

    Navbar=()=>{
        var html= NavBar(1);
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
                <Autocomplete
                    id="combo-box-demo"
                    options={currency}
                    getOptionLabel={(option) => option.name}
                    style={{ "width": "40%", "margin-left":"3%", "border":"none"}}
                    renderInput={(params) => <TextField {...params} label="Divisas disponibles" variant="outlined" />}
                />
                </div>
                <div className="subscription-grid-item">
                    <h2>Divisas Suscriptas</h2>
                </div>
            </div>

        </section>
    );
    }
}  
