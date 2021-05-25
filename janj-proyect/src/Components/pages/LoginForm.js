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
        console.log(config)
        await axios(config)
        .then(response => {
			this.props.setNombre(response.data.nombre + ' ' + response.data.apellido)
			this.props.setIdusuario(response.data.id_usuario)
			this.props.setToken(response.data.access_token)
			this.props.setRol(response.data.rol)
			
		})
    }
    responseGoogleSuccess=async(response)=>{
        console.log(response.profileObj)
        // var data = JSON.stringify({
        //     nombre:response.profileObj.givenName,
        //     apellidos: response.profileObj.familyName,
        //     email:response.profileObj.email,
        //     password:response.profileObj.googleId
        // });
        // var baseurl = String(process.env.REACT_APP_API_URL)
        // const url = baseurl+'/signup'
        // var config = {
        //     method: 'post',
        //     url: url,
        //     headers: { 
        //       'Content-Type': 'application/json'
        //     },
        //     data: data
        //   };
        // try{
        //     await axios(config)
        //     .then(register => {
        //         if(register.status == 200){
        //             axios.post(url+"/login",{},{
        //             data:{
        //                 email: response.profileObj.email,
        //                 password: response.profileObj.googleId
        //             }
        //             })
        //             .then(login => {
        //                 console.log(login)
        //                 // this.setState({responseLogin:login, redirect: login.data.body.userData.rolName})
        //                 // this.props.setIduser(login.data.body.userData._id)
        //                 // window.location.href = login.data.body.userData.rolName;
        //             })
        //         }
        //     })

        // }
        // catch(error){
        //     // console.log(error)
        //     await axios.post(url+"/login",{},{
        //     data:{
        //         email: response.profileObj.email,
        //         password: response.profileObj.googleId
        //     }
        //     })
        //     .then(login => {
        //         console.log(login)
        //         // this.setState({redirect: login.data.body.userData.rolName})
        //         // this.props.setRol(login.data.body.userData.rolName)
        //         // this.props.setNombre(login.data.body.userData.nombre)
        //         // this.props.setIduser(login.data.body.userData._id)
        //         // window.location.href = login.data.body.userData.rolName;
        //     })
        // }
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