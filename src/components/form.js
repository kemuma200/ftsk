import React from "react";
import "../App.css"


export default class ConnectForm extends React.Component{
    render(){
        return(
            <div className="newsletterForm">
            <h3>Feedback</h3>
            <form className="formInterior">
                <label>Name:</label>
                <input type="text" placeholder="John Doe"/><br/>
                <label>Email:</label>
                <input type="text" placeholder="johndoe@uon.ac.ke"/><br/>
                <label>Company:</label>
                <input type="text" placeholder="University of Nairobi"/><br/>
                <label>Message:</label>
                <input type="text" placeholder="I would like ....."/><br/>   
            </form>
            <button className="formButton">Submit</button> 
            </div>
        )
    }
}