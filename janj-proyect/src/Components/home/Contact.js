import React from 'react';
import '../../App.css';
import '../../assets/vendor/bootstrap/css/bootstrap.css'
const axios= require('axios')


class Contact extends React.Component {

    constructor(props){
        super(props);
        this.state={
            form:{
                name:'',
                email:'',
                subject:'',
                coments:'',
            }, 
        }
    }

    onChange =(event)=>{
        this.setState({
            form: {
            ...this.state.form,
            [event.target.name]:event.target.value,
             }
        })
    }

    directContact=()=>{
        var data = JSON.stringify({
            nombre:this.state.form.name,
            email:this.state.form.email,
            asunto:this.state.form.subject,
            mensaje:this.state.form.coments,

        });
        console.log(this.state.form.name)
        console.log(this.state.form.email)
        console.log(this.state.form.subject)
        console.log(this.state.form.coments)

        var baseurl = String(process.env.REACT_APP_API_URL)
        const url = baseurl+'/contactenos'
        var config = {
            method: 'post',
            url: url,
            headers: { 
              'Content-Type': 'application/json'
            },
            data: data
          };
        console.log(config)
        axios(config)
        .then(response => console.log(response))
    }

    render (){

        return (
            <section id="contact">
                <div class="container">
                    <div class="section-header">
                    <h3 class="section-title">Contáctenos</h3>
                    </div>
                </div>
                    <div class="container mt-5">
                        <div class="row justify-content-center">
                            <div class="col-lg-5 col-md-4">
                                <p>
                                    Nos encontramos en una mejora
                                    continúa por eso nos gustaría
                                    que nos compartieras tus
                                    opiniones, experiencias y
                                    recomendaciones acerca de la
                                    página, su funcionamiento o
                                    cualquier cosa que podamos
                                    hacer para mejorar nuestros
                                    servicios y atención al cliente.
                                </p>
                                <div class="social-links">
                                    <a href="https://www.facebook.com/profile.php?id=100066703532321"><i class="fa fa-facebook"></i></a>
                                    <a href="https://www.instagram.com/janj.finance/"><i class="fa fa-instagram"></i></a>
                                    <a href="https://www.youtube.com/channel/UCrpgmF4kKCsyYSnoM4mLBBg/featured"><i class="fa fa-youtube"></i></a>
                                    
                                </div>
                            </div>
                            <div class="col-lg-5 col-md-8">
                                <div class="form">
                                    <div className="form-group">
                                        <input type="text" name="name"  onChange={this.onChange} className="form-control" id="name" placeholder="Nombre" />
                                    <div className="validate"></div>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" onChange={this.onChange} name="email" id="email" placeholder="Correo"/>
                                    <div className="validate"></div>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" onChange={this.onChange} name="subject" id="subject" placeholder="Asunto" />
                                    <div class="validate"></div>
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" onChange={this.onChange}  name="coments" rows="7"  placeholder="Comentarios"></textarea>
                                    <div className="validate"></div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-center">
                                            <button onClick={this.directContact} className="btn-get-started">Enviar</button>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div> 
                    </div>
            </section>
        );
    }
  }
  
  export default Contact
  