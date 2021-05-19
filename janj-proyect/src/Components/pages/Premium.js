import React from 'react';
import '../../App.css';
import '../../assets/css/style.css';
import Navbar from '../navbar/Navbar';
import Testimonios from '../home/Testimonios';
import Table from 'react-bootstrap/Table'

const Premium=(props)=> {
    return (
        <div>
            <Navbar {...props}/>
            <section id="premium">
                <div className="row">
                    <div className="col-lg-1"/>
                    <div className="table-responsive col-lg-9">
                        <Table striped bordered hover >
                            <thead className="table-light">
                                <tr>
                                    <th>Servicios</th>
                                    <th>Básicos</th>
                                    <th>Premium</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Recibir información por correo</td>
                                    <td> X </td>
                                    <td> X </td>
                                </tr>
                                <tr>
                                    <td>Eduación Básica</td>
                                    <td> X </td>
                                    <td> X </td>
                                </tr>
                                <tr>
                                    <td>Seguimiento</td>
                                    <td> X </td>
                                    <td> X </td>
                                </tr>
                                <tr>
                                    <td>Educación Plus</td>
                                    <td> - </td>
                                    <td> X </td>
                                </tr>
                                <tr>
                                    <td>Predicción</td>
                                    <td> - </td>
                                    <td> X </td>
                                </tr>
                                <tr>
                                    <td>Simulación</td>
                                    <td> - </td>
                                    <td> X </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
                <div className="section-header">
                    <h1><strong>¿Cómo conseguir Premium?</strong></h1>
                </div>
                <div className="row">
                    <div className="col-lg-6 ">    
                        <p className = " responsive">
                        Puedes hacer muchas cosas con nosotros, nuestros
                        servicios disponibles actualmente mediante una
                        subscirpción de USD $5 por mes son:
                        <br/>
                        Para obtener el premium de la aplicación
                        y acceder a todos nuestros servicios,
                        consigna a la cuenta No. 84278111913 de
                        Ahorros en Bancolombia, Luego envía la
                        confirmación de la compra al número
                        3183909584 por WhatsApp y en las
                        siguientes 24 horas hábiles se te
                        notificara sobre el pago y habilitaran los
                        servicios de la plataforma.
                        </p>
                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-5 col-md-8">
                        <img src="janj-logo.png"/>
                    </div>

                </div>
            </section>
            {/* <Testimonios/> */}
        </div>

    );
  }
  
  export default Premium 
  