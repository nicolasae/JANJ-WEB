import React, { useState } from 'react';
import '../../App.css';
import '../../assets/css/style.css';
import NavBar from '../navbar/NavbarU'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
// Caroussel 
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
// Imagenes carroussel
import inversion from '../../assets/img/crecimiento-del-dinero.png'
import divisa from '../../assets/img/cambio-de-divisas.png'
import mercadoDivisa from '../../assets/img/mercado.png'
import operaciones from '../../assets/img/kpi.png'
import sp from '../../assets/img/actuacion.png'
import bursatil from '../../assets/img/bursatil.png'


const tutorialSteps = [
    {
        label: '¿Qué es una inversión ?',
        imgPath: inversion,
        title:'Definición:',
        info: 'Una inversión es un activo comprado por un individuo u organización con la expectativa    de que generará ingresos o ganancias en el futuro. Ejemplos de inversiones pueden incluir acciones y bienes raíces.'
    },
    {
        label: '¿Qué es una acción ?',
        imgPath: divisa,
        title:'Definición:',
        info: 'Una acción es una unidad de propiedad en una empresa: si posee una acción, eso lo convierte en accionista, lo que significa que puede ser elegible para recibir dividendos si la empres tiene éxito y puede tener voto en algunas decisiones de la empresa.'
    },
    {
        label: '¿Qué es el mercado de divisas ?',
        imgPath: mercadoDivisa,
        title:'Definición:',
        info: 'El mercado de divisas es donde los compradores y vendedores se unen para negocias acciones de empresas elegibles.'
    },
    {
        label: '¿Qué operaciones hacemos en el trading ?',
        imgPath: operaciones,
        title: 'Definición:',
        info: '',
    },
    {
        label: '¿Qué es el S&P 500 ?',
        imgPath: sp,
        title: 'Definición:',
        info: '',
    },
    {
        label: '¿Qué es un índice bursátil ?',
        imgPath: bursatil,
        title: 'Definición:',
        info: '',
      },
  ];

  const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 650,
        flexGrow: 1,
        border: 'solid 5px',
        left: '200px',
        
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      height: 100,
      paddingLeft: theme.spacing(1),
      backgroundColor: 'white',
      color: 'black',
      

    },
    img: {
      height: 455,
      maxWidth: 590,
      overflow: 'hidden',
      display: 'block',
      width: '100%',
    },
  }));

  
function Navbar(){
    var html= NavBar(1);
    return(
    <>
    {html}
    </>)
}

export default function Educacion(){

    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = tutorialSteps.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const popover = (
        <Popover id="popover-basic" style={{"width":"50%", "height":"80%"}}>
          <Popover.Title as="h3"><h1><strong>{tutorialSteps[activeStep].title}</strong></h1></Popover.Title>
          <Popover.Content>
            <h2>{tutorialSteps[activeStep].info}</h2>
        </Popover.Content>
        </Popover>
      );
    
    

    return(
        <section id="educacion">
            <Navbar/>
            <div>
                <h1>Educación</h1>
                
                <div style={{"margin-left":"4%"}}className={classes.root}>
                    <Paper square elevation={6} className={classes.header}>
                        <Typography style={{"font-size":"2rem"}}>{tutorialSteps[activeStep].label}</Typography>
                    </Paper>
                    <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                        <img
                            style={{"margin-left":"2%"}}
                            className={classes.img}
                            src={tutorialSteps[activeStep].imgPath}
                            alt={tutorialSteps[activeStep].label}
                        />
                    </OverlayTrigger>
                    <MobileStepper
                        steps={maxSteps}
                        position="static"
                        variant="text"
                        activeStep={activeStep}
                        nextButton={
                        <Button 
                            style={{
                                "font-weight": "500",
                                "font-size": "16px",
                                "letter-spacing": "1px",
                                "display": "inline-block",
                                "border-radius":"50px",
                                "transition": "0.5s",
                                "background": "#2dc997",
                                "border": "2px solid #2dc997",
                                "color": "white",   
                            }}
                            stylesize="big" onClick={handleNext} disabled={activeStep === maxSteps - 1
                        }>
                            Siguiente
                            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                        </Button>
                        }
                        backButton={
                        <Button 
                            style={{
                                "font-weight": "500",
                                "font-size": "16px",
                                "letter-spacing": "1px",
                                "display": "inline-block",
                                "border-radius":"50px",
                                "transition": "0.5s",
                                "background": "#2dc997",
                                "border": "2px solid #2dc997",
                                "color": "white",   
                            }}
                        size="big" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                            Atrás
                        </Button>
                        }
                    />
                </div>
            </div>
        </section>
    );
}