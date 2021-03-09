import React, {Fragment} from 'react';
import Navbar from './navbar/Navbar';
import Cover from './home/Cover';
import About from './home/About'
import Testimonios from './home/Testimonios'



export default function HomePage(){
    return(
        <div>
            <Navbar/>
            
            <Cover/>
            <div id="About">
            <About/>
            </div>
            <div id="Testimonios">
            <Testimonios/>
            </div>
        </div>
    );
}