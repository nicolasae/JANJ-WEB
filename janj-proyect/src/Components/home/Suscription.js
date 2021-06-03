import React from 'react';
import '../../App.css';
import '../../assets/vendor/bootstrap/css/bootstrap.css'
const axios= require('axios')


class Suscription extends React.Component {
    constructor(props){
        super(props);
        this.state={
            form:{
                email:'',
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

    SendMail=()=>{
        var body = {
            emails: [ this.state.form.email ]
        }
        var data = JSON.stringify(body);
        console.log(this.state.form.email)
        var baseurl = String(process.env.REACT_APP_API_URL)
        const url = baseurl+'/send_email'
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

    render() {

        return (
            <section id="call-to-action">
                <div className="container">
                    <div className="row" >
                        <div className="col-lg-9 text-center text-lg-left">
                        <h3 className="cta-title">Suscríbete</h3>
                        <p className="cta-text"> 
                        Mantente al día con los cambios en las divisas y acciones, y recibe actualizaciones de nuevo contenido
                        </p>
                        </div>

                        <div className="col-lg-3  text-center">
                        <input type='email' name='email' placeholder="Correo Eléctronico" onChange={(e)=> this.onChange(e)}/>
                        <a className="cta-btn align-middle" onClick={(e)=> this.SendMail(e)}>Enviar</a>
                        </div>
                    </div>
                </div>
            </section>
            );
        }
    }


export default Suscription