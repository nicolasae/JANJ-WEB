import React,{useState} from 'react'
import '../../../App.css';
import '../../../assets/css/style.css';
import NavBar from '../../navbar/NavbarU'
import Carousel from 'react-bootstrap/Carousel'

function Navbar(){
    var html= NavBar(1);
    return(
    <>
    {html}
    </>)
}
function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };  
    return (
        <>
        <Carousel className="border" activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <div className="row">
                    <div className="col-lg-2"/> 
                    <div className="col-lg-3"> 
                        <img src="apple.png" height="50px"/>
                        <h1>First slide label</h1>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                    <div className="col-lg-3"> 
                        <img src="bitcoin-logo.png" height="50px"/>
                    </div> 
                    <div className="col-lg-3"> 
                        <img src="png-clipart-amazon.png" height="50px"/>
                    </div> 
                    <div className="col-lg-2"/> 
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <h1>Second slide label</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Item>
            <Carousel.Item>
                <h1>Third slide label</h1>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur</p>
            </Carousel.Item>
        </Carousel>
        
        </>
    );
  }


export default function home(){

    return(
        <>
        <Navbar/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h1>Bienvenido</h1>
        <section id="carrousel"> 
            <div> 
                <ControlledCarousel />
            </div>
        </section>
        </>

    )

}