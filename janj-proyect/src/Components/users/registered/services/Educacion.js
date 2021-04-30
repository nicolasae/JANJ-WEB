import React from 'react';
import '../../../../App.css';
import '../../../../assets/css/style.css';
import NavBar from '../../../navbar/NavbarU'

export default class Educacion extends React.Component{
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
            <section>
                <this.Navbar/>
                <h1>Educación</h1>
            </section>
        );
    }
}