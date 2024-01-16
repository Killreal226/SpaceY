import React, {Component} from "react";

import "./header.css"
import Label from "../img/label.png"
import {Link} from "react-router-dom"

export default class Header extends Component{
    render(){
        return(
            <header>
                    <div>
                        <div className="gray-rectangle-top"></div>
                        <ul className="left-menu">
                            <li className="company">
                                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <img src={Label} className="label_company" alt="Эмблема" />
                                </Link>
                            </li>
                            <div className="sign-up-container">
                                <li className="sign-up">sign up</li>
                            </div>
                        </ul>
                        <ul className="nav">
                            <li>
                                <Link to="http://localhost:3000/events_map/" style={{ textDecoration: 'none', color: 'inherit' }}>events map</Link>
                            </li>
                            <li>news</li>
                            <li>science</li>  
                            <li>forum</li> 
                            <li>about us</li>   
                        </ul>
                    </div>
                </header>
        )
    }
}