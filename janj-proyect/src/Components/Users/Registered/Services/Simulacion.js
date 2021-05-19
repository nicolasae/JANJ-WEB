import React from 'react';
import '../../../../App.css';
import '../../../../assets/css/style.css';
import NavBar from '../../../navbar/NavbarU'

export default class Simulacion extends React.Component{
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
            <div>
                <this.Navbar/>
                <h1>Simulacion</h1>
            </div>
        );
    }
}