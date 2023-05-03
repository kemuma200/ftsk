import React from "react";
import "../App.css";
import { NavLink} from "react-router-dom";


export default class Dropdown extends React.Component{
    renderMatches(){
        return(
            <ul className="dropdown">
                <p>x</p>
                <NavLink to="/" activeStyle className="navItem ">Home</NavLink>
                <NavLink to="/about" activeStyle className="navItem ">About</NavLink>
                <NavLink to="/contacts" activeStyle className="navItem ">Contact</NavLink>
                <NavLink to="/solutions" activeStyle className="navItem ">Solutions</NavLink>
                <a href="#">Newsletter</a>
                <a href="#">Talk to us</a>
               
            </ul>

        )
    }
}