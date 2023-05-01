import React from "react";
import "../App.css";

export default class Navbar extends React.Component{
    render(){
        return(
            <div className="aminiNavbar">
                <button className="navbarButton">Talk to us</button>
                <div className="navbarSpace"></div>
                <ul className="navbarRoutes">
                    <li>HOME</li>
                    <li>SOLUTIONS</li>
                    <li>TECHNOLOGY</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                    <img className="aminiLogo" src="https://uploads-ssl.webflow.com/6412fbf355d47506a00f253d/6442254211d6837cb5aa6158_amini.png" alt="logo"/>
                </ul>
               
            </div>
        )
    }
}