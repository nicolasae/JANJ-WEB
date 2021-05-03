import React from 'react';
import '../../../../App.css';
import '../../../../assets/css/style.css';
import NavBar from '../../../navbar/NavbarU'

export default class Prediccion extends React.Component {
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
            <div>
                <this.Navbar/>
                <h1>Prediccion</h1>
            </div>
        );
    }   
}