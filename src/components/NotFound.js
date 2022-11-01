import React from "react";
import {SiCoffeescript} from "react-icons/si"
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
        <div className="container">
            <h1>Ooopsieee!! Wrong Page</h1><br/>
            <p>Try the link below</p>

        <ul>
            <li>
                <Link to= '/'>
                CoffeeLover <SiCoffeescript/>
                </Link>
            </li>
        </ul>
        </div>
        
        
        </>
    )
}

export default NotFound;
