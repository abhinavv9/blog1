import React, { useState } from 'react'
import './home.css'
import Bulb from './bulb-light.svg';
import Navigation from '../navbar/navbar';
import { Link } from "react-scroll"
// import Burger from '../navbar/burger';
// import VisibilitySensor from 'react-visibility-sensor'
// import { Waypoint } from 'react-waypoint';



function Home(props) {

    return (
        <div>
            <div className="home-bg">

                <div className="logo">
                    <h1>Pytrix</h1>
                    <h5 className="dis">A Tech wanderer!</h5>
                </div>
                    <div>
                        <Navigation />
                    </div>
           
                <div style={props.render}>

                </div>
                <div className="main-sec">
                    <img className="sec-left" src={Bulb} alt="bulb" />
                    <div className="sec-right">
                        <h1><span className="grad">BRAIN</span></h1>
                        <h2>STORMING</h2>
                        <p>is a group creativity technique by which efforts are made to find a conclusion for a specific problem by gathering a list of ideas spontaneously contributed by its members.</p>
                    </div>
                    <div className="newsletter">
                        <input className="form-email" type="email" name="email" required="" placeholder="Enter your email" autoComplete="email" inputMode="email" />
                        <button type="button" className="btn btn-sub">Subscribe</button>
                    </div>
                    <Link className="down" to="topPosts" smooth={true} duration={170}>
                        <i className="fa fa-chevron-down fa-2x"></i>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
