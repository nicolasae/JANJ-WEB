import React from 'react';
import '../../App.css';
import { GoogleLogin } from 'react-google-login';
const axios= require('axios')

export default class Login extends React.Component {
    constructor(props){
        super(props)
        this.state={
            alertFail:false,
            login:{
                email:"",
                password:"",
            }
        }
    }
    onChange =(event)=>{
        this.setState({
            login: {
            ...this.state.login,
            [event.target.name]:event.target.value,
             }
        })
    }
    directLogin=async()=>{
        console.log(this.props)
        var data = JSON.stringify({
            email:this.state.login.email,
            password:this.state.login.password
        });
        var baseurl = String(process.env.REACT_APP_API_URL)
        const url = baseurl+'/login'
        var config = {
            method: 'post',
            url: url,
            headers: { 
              'Content-Type': 'application/json'
            },
            data: data
          };
        await axios(config)
        .then(async(response) => {
            console.log(response)
			await this.props.setNombre(response.data.nombre + ' ' + response.data.apellido)
			await this.props.setEmail(response.data.email)
			await this.props.setIdusuario(response.data.id_usuario)
			await this.props.setToken(response.data.access_token)
			await this.props.setRol(response.data.rol)
			
		})
    }
    responseGoogleSuccess=async(response)=>{
        console.log(response.profileObj)
        var data = JSON.stringify({
            nombre:response.profileObj.givenName,
            apellido: response.profileObj.familyName,
            email:response.profileObj.email,
            pregunta:'Usted se Registro con Google, Por favor inicie sesión con Google',
            password:response.profileObj.googleId,
        });
        var baseurl = String(process.env.REACT_APP_API_URL)
        const url = baseurl+'/signup'
        var config = {
            method: 'post',
            url: url,
            headers: { 
              'Content-Type': 'application/json'
            },
            data: data
        };
        try{
            await axios(config)
            .then(register => {
                if(register.status == 200){
                    axios.post(baseurl+"/login",{},{
                    data:{
                        email: response.profileObj.email,
                        password: response.profileObj.googleId
                    }
                    })
                    .then(async login => {
                        console.log(login)
                        await this.props.setNombre(login.data.nombre + ' ' + login.data.apellido)
                        await this.props.setIdusuario(login.data.id_usuario)
            			await this.props.setEmail(login.data.email)
                        await this.props.setToken(login.data.access_token)
                        await this.props.setRol(login.data.rol)
                    })
                }
            })

        }
        catch(error){
            console.log(error)
            var data = {
                email: response.profileObj.email,
                password: response.profileObj.googleId  
            }
            console.log(data)
            var body = JSON.stringify(data)
            let url3= baseurl+"/login"
            let config2 = {
                method: 'post',
                url: url3,
                headers: { 
                'Content-Type': 'application/json'
                },
                data: body
            }
            console.log(config2)
            axios(config2)
            .then(async login => {
                console.log(login)
                await this.props.setNombre(login.data.nombre + ' ' + login.data.apellido)
                await this.props.setIdusuario(login.data.id_usuario)
                await this.props.setEmail(login.data.email)
                await this.props.setToken(login.data.access_token)
                await this.props.setRol(login.data.rol)
            })
        }
    }
    responseGoogleFail=(repsonse)=>{
        
    }
    
    render(){
        return (
            <div className="card card0 border-0">
                <div className="preview-login">
                        <div className="card2 card border-0 px-4 py-5">
                            <div className="row px-3 text-center"> 
                                <h6 className=" form-group-login">Correo Electrónico</h6>
                                <input className="mb-4" type="email" onChange={this.onChange} name="email" placeholder="Ingrese su correo electrónico"/>
                            </div>
                            <div className="row px-3 text-center"> 
                                <h6 className=" form-group-login">Contraseña</h6>
                                <input type="password" onChange={this.onChange} name="password" placeholder="Ingrese su contraseña"/>
                            </div>
                            <div className="row px-3 mb-4">
                                <a href="/recover" className="ml-auto mb-0 form-group-login-s">Olvidaste tu contraseña?</a>
                            </div>
                            <div className="row mb-3 px-3">
                                <button onClick={(e)=>this.directLogin()} type="submit" className="btn btn-blue text-center form-group-login">Ingresar</button>
                            </div>
                            <div className ="text-center">
                                <GoogleLogin
                                    clientId="952616300736-u6cn526c802tefo4nm28sucaqcgad9sg.apps.googleusercontent.com"
                                    buttonText="Iniciar Sesion Con Google"
                                    onSuccess={this.responseGoogleSuccess}
                                    onFailure={this.responseGoogleFail}
                                    cookiePolicy={'single_host_origin'}
                                />
                            </div>
                            </div>
                </div>
                            
            </div>
    
    
        );
      }  
    }