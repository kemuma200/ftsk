import React from "react";
import "../App.css";
import { NavLink} from "react-router-dom";
import Dropdown from "./dropdown";
import ham from "../hamburger.jpg"

export default class Navbar extends React.Component{
    constructor() {
        super();
        this.state = {
          isOpen: false
        }
        this.openDropdown = this.openDropdown.bind(this);
      }
    
    
      openDropdown() {
        this.state.isOpen === false ?
        this.setState({ isOpen: true }) :
        this.setState({ isOpen: false })
      }
    
    render(){

        return(
            <div className="aminiNavbar">
                <img className="aminiLogo" src="https://uploads-ssl.webflow.com/6412fbf355d47506a00f253d/6442254211d6837cb5aa6158_amini.png" alt="logo"/>
                <div className="navSpace"></div>
                <ul className="navbarRoutes">
                        <NavLink to="/" activeStyle className="navItem nohamburger">
                        <li 
                        >HOME</li>
                        </NavLink>
                        <NavLink to="/about" activeStyle className="navItem nohamburger">
                        <li>ABOUT</li>
                        </NavLink>
                        <NavLink to="/contacts" activeStyle className="navItem nohamburger">
                        <li>CONTACT</li>
                        </NavLink>
                        <NavLink to="/solutions" activeStyle className="navItem nohamburger">
                        <li>SOLUTIONS</li>
                        </NavLink>
                        
                       
                       
                       
                </ul>
                <div className="navSpace"></div>
                <button className="navbarButton">Talk to us</button>
                <a className="hamburgerMenu" onClick={this.createText}><img src={ham} alt="dropdown"/>
                </a>
                {this.state.isOpen && <Dropdown />}
                
                
            </div>
        )
    }
}