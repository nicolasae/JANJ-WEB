import React from 'react';
import '../../../../App.css';
import '../../../../assets/css/style.css';
import NavBar from '../../../navbar/NavbarU'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {Line} from 'react-chartjs-2';


const useStyles = makeStyles({
    root: {
        "width": "150%",
        "margin-left": "40%"
    },
  });


const currencyAvailable=[
    'Apple','Amazon'
] 

//divisas disponibles para los clientes
const currencyAvailableGraph = [

   { 
        name: 'Apple',
        id: '1', 
        data:{
            labels: ['1', '2', '3', '4', '5', '6'],
            datasets: [
            {
                label: 'Apple',
                data: [12, 19, 3, 5, 2, 3],
                fill: false,
                backgroundColor: '#2dc997',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
            ],
            }
    },

    {
        name: 'Amazon',
        id: '2', 
        data:{
            labels: ['2', '4', '6', '8', '10', '12'],
            datasets: [
            {
                label: 'Amazon',
                data: [12, 29, 8, 12, 2, 3],
                fill: false,
                backgroundColor: '#2dc997',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
            ],
        }
    },
      
]

const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }


// function AutoCompleteFunction(){
//     const classes = useStyles();
//     const [value, setValue] = React.useState(options[0]);
//     const [inputValue, setInputValue] = React.useState('');

//     return(

//     );
// }


export default class Seguimiento extends React.Component{    
    constructor(props){
        super(props)
        this.state={
            idCurrency:'',
            nameCurrency:'',
            value:'',
            inputValue:'',
            grafico:'',
        }
    }

    RenderAutoCompleted = () =>{

        return (
            <> 
            <div className="row"> 
                <div className="col-lg-6">
                    <Autocomplete
                        value={this.state.value}
                        onChange={(event, newValue) => {
                        this.setValue(newValue);
                        }}
                        inputValue={this.state.inputValue}
                        onInputChange={(event, newInputValue) => {
                        this.setInputValue(newInputValue);
                        }}
                        id="controllable-states-demo"
                        options={currencyAvailable}
                        renderInput={(params) =><TextField
                            // classes={{ 
                            //     root:classes.root, 
                            //     label: classes.label,
                            // }}
                            style={{"border":"none","margin-bottom":"10%"}}
                            {...params} label="Buscar Divisa"  />}
                    />    
                </div>
                <div className="col-lg-6">
                    <button className="btn-get-started-right" onClick={this.graphController}>Graficar
                    </button>
                </div>
            </div>
            </> 
        );
        
    }

    setValue= (valueCurrency) => {
        console.log(valueCurrency);
        this.setState({value:valueCurrency })
        
    }

    setInputValue = (inputValueCurrency) => {
        this.setState({inputValue:inputValueCurrency })
    }

    graphController = () => {
        if (currencyAvailableGraph.length > 0){
            for (const i in currencyAvailableGraph){
                if (currencyAvailableGraph[i].name == this.state.value){
                    console.log(currencyAvailableGraph[i].data)
                    var dataValues = currencyAvailableGraph[i].data
                    console.log(dataValues)
                    var html = <Line data={dataValues} options={options} />
                    console.log(html)
                    this.setState({grafico:html})                
                }
            }          
        }
        else{
            var html = <></>
            console.log(html)
            this.setState({grafico:html})    
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
            <section className="seguimiento">
                <this.Navbar/>
                <h1>Seguimiento</h1>
                <div className="row">
                    <div className="seguimiento-grid-container">
                        <div className="seguimiento-grid-item">
                            <this.RenderAutoCompleted/>
                            
                            {this.state.grafico}

                        </div>
                        <div className="seguimiento-grid-item">
                            <h2>¿Cómo funciona?</h2>
                            <p>
                                Nuestro sistema se seguimiento permite
                                monitorear las divisas de las empresas más
                                importantes del mercado, solamente tienes que
                                elegir la divisa que quieres analizar y podrás
                                visualizar diferentes gráficos que muestran el valor
                                histórico que ha tenido la divisa en un intervalo de
                                tiempo.
                            </p>
                        </div>
                    </div>

                </div>


            </section>

);
    }
}