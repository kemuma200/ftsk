import React from "react";
import "../App.css";
import { NavLink} from "react-router-dom"

export default class Navbar extends React.Component{
    render(){
        return(
            <div className="aminiNavbar">
                <button className="navbarButton">Talk to us</button>
                <div className="navbarSpace"></div>
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
                    
                    <img className="aminiLogo" src="https://uploads-ssl.webflow.com/6412fbf355d47506a00f253d/6442254211d6837cb5aa6158_amini.png" alt="logo"/>
                </ul>
                
              
                
                

               
            </div>
        )
    }
}