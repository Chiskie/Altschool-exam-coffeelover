import React from "react";
import '../App.css';
import {SiCoffeescript} from "react-icons/si"
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
        <div className="container">
            <div className="content">
            <h1>Ooopsieee!! Wrong Page</h1><br/>
            <p>Try the link below</p><br />
                

        <ul>
            <li>
                <Link className= "coffee-link" to= '/'>
                CoffeeLover <SiCoffeescript/>
                </Link>
            </li>
        </ul>
            </div>
        </div>
        
        
        </>
    )
}

export default NotFound;
