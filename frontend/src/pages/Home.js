import React from "react";
import "./home.css"
import BgVideo from "../img/video.mp4"
import Label from "../img/label.png"
import {Link} from "react-router-dom"

export default function Home() {
        return(
            <div className="home"> 
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
                                <Link to="events_map/" style={{ textDecoration: 'none', color: 'inherit' }}>events map</Link>
                            </li>
                            <li>news</li>
                            <li>science</li>  
                            <li>forum</li> 
                            <li>about us</li>   
                        </ul>
                    </div>
                </header>
                <div className="Intro">
                    <div className="presentation">
                        <div className="video">
                            <video src={BgVideo} autoPlay muted loop></video>
                        </div>
                        <div className="gray-rectangle"></div> 
                        <div className="intro__content">
                            <div className="title__intro">spaceY</div>
                            <div className="description">"spaceY: Path to the Stars" is a virtual space for space enthusiasts. We offer amazing discoveries, space news, an interactive event map, and scientific articles. Explore the world of stars and research with us!</div>
                        </div>
                    </div>
                </div>
                <footer>
                    spaceY | 2023 | support the project | All rights reserved &copy;
                </footer>
            </div>
        )
}

