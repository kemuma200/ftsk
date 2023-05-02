import React from "react";
import ConnectForm from "./form";
import "../App.css";


export default class Footer extends React.Component{
    render(){
        return(
            <div>
                <div className="footerEnclosing">
                    <ul className="a">
                        <h3>Company</h3>
                        <li>Careers</li>
                        <li>leadership</li>
                        <li>investors</li>
                        <li>media kit</li>
                        <li>contact</li>
                    </ul>
                    <ul className="b">
                        <h3>Resources</h3>
                        <li>Amini blog</li>
                        <li>Case studies</li>
                        <li>webinars</li>
                        <li>news and events</li>
                        
                    </ul>
                    <ul className="c">
                        <h3>Sectors</h3>
                        <li>Agriculture</li>
                        <li>Technology</li>
                        <li>Environment</li>
                        <li>Research</li>
                    </ul>
                    
                    <ConnectForm className="d"/>
                </div>
            </div>
        )
    }
}