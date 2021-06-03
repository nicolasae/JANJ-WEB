import React,{ Component} from 'react'
import { Redirect } from 'react-router'
export default class ReloaderEntrada extends Component {
    render(){
        return(<Redirect push to={{pathname:"/register/subscription"}}> </Redirect>)
    }
}
  