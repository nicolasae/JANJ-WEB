import React, {Fragment} from 'react';
import Navbar from './navbar/Navbar';
import Cover from './home/Cover';
import Testimonios from './home/About'



export default function HomePage(){
    return(
        <div>
            <Navbar/>
            <Cover/>
            <Testimonios/>
        </div>
    );
}