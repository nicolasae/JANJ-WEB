import React, {Fragment} from 'react';
// Componentes
import NavBar from './navbar/Navbar';
import Hero from './home/Hero';
import About from './home/About'
import Services from './home/Services';
import Suscription from './home/Suscription';
import Contact from './home/Contact';
//Styles 
import '../assets/css/style.css'
import '../assets/vendor/bootstrap/css/bootstrap.css'
import '../assets/vendor/font-awesome/css/font-awesome.min.css'
import '../assets/vendor/boxicons/css/boxicons.min.css'
import '../assets/vendor/venobox/venobox.css'


function Query_text(){
    var baseurl = String(process.env.REACT_APP_API_URL)
	var url = baseurl+'/prueba'
    var json = {
        'hola':'que buena tula bro'
    }
	var data = JSON.stringify(json)
	var config = {
		method: 'get',
		url: 'http://localhost:5000/prueba',
		headers: { 
		'Content-Type': 'application/json'
		},
	};



}


const HomePage=props=>{
    
    console.log(props)
    return(
        <div>
        <div>
            
            <link href="../assets/img/favicon.png" rel="icon" />
            <link href="../assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
            {/* Google Fonts */}
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Poppins:300,400,500,700" rel="stylesheet" />
            {/* Template Main CSS File */}
            <link href="../assets/css/style.css" rel="stylesheet" />
            <NavBar {...props}/>
            {/* <NavBar setRol={props.setRol} setToken={props.setToken} setIdusuario={props.setIdusuario} setNombre={props.setNombre}/> */}
            <Hero/>
            <About/>
            <Services/>
            <Suscription/>
            <Contact/>
            
            {/* ======= Footer ======= */}
            <footer id="footer">
            <div className="footer-top">
                <div className="container">
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                © Copyright <strong>JANJ</strong>. All Rights Reserved
                </div>
            </div>
            </footer>{/* End Footer */}
        </div>
        </div>
    );
}

export default HomePage