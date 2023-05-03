import React from "react";
import "../App.css";
import { NavLink} from "react-router-dom"
import {FaSearch} from "@react-icons/all-files/fa/FaSearch";
import {FaGlobe} from "@react-icons/all-files/fa/FaGlobe";

export default class Navbar extends React.Component{
    render(){
        return(
            <div className="aminiNavbar">
                <img className="aminiLogo" src="https://uploads-ssl.webflow.com/6412fbf355d47506a00f253d/6442254211d6837cb5aa6158_amini.png" alt="logo"/>
                <div className="navIdleSpace"></div>
                <ul className="navbarRoutes">
                        <NavLink to="/" activeStyle className="navItem">
                        <li>HOME</li>
                        </NavLink>
                        <NavLink to="/solutions" activeStyle className="navItem">
                        <li>SOLUTIONS</li>
                        </NavLink>
                        <NavLink to="/about" activeStyle className="navItem">
                        <li>ABOUT</li>
                        </NavLink>
                        <NavLink to="/contacts" activeStyle className="navItem">
                        <li>CONTACT</li>
                        </NavLink>
                        <NavLink to="/" activeStyle className="navItem">
                        <FaSearch title="search"/>
                        </NavLink>
                        <NavLink title="Choose your suitable language" to="/" activeStyle className="navItem">
                        <FaGlobe/>
                        </NavLink>
                       
                </ul>
                <div className="navSpace"></div>
                <button className="navbarButton">Talk to us</button>
               
            </div>
        )
    }
}