import React from "react";
import image1 from "../xoplanet.jpg";
import "../contact.css";



export default class Contact extends React.Component{
    render(){
        return(
            <div className="contactsPage"> 
            <img className="spacebinoculars" src={image1} alt="spacebinoculars"/>
            <h1 className="contactsHeader">We would love to hear from you</h1>
            <div>
                <div className="contactMethods">
                    <div className="contactMeans">
                        <p>Email</p>
                        <p>jumanjisatellites@amini.co.ke</p>
                    </div>
                    <div className="contactMeans">
                        <p>Phone Number</p>
                        <p>00000000000000</p>
                    </div>
                    <div className="contactMeans">
                        <p>Via social Media</p>
                        
                    </div>
                </div>
                <div>
                <p>To submit an inquiry, please fill out the form below.
                Our representative will get back to you.</p>
                 <form className="inquiryForm">
                 <div className="item">
                    <label>Select Country</label><br/>
                    <input/><br/>
                 </div>
                 <div className="item">
                    <label>First Name</label><br/>
                    <input/><br/>
                 </div>
                 <div className="item">
                    <label>Last Name</label><br/>
                    <input/><br/>
                 </div>
                 <div className="item">
                    <label>Email</label><br/>
                    <input/><br/>
                 </div>
                 <div className="item">
                    <label>Phone Number</label><br/>
                    <input/><br/>
                 </div>
                 <div className="item">
                    <label>Company</label><br/>
                    <input/><br/>
                 </div>
                 <div className="item">
                 <label>Select job foundation</label><br/>
                 <input/><br/>
              </div>
              <div className="item">
                 <label>Select Industry</label><br/>
                 <input/><br/>
              </div>
                 <div className="item">
                    <label>Job Title</label><br/>
                    <input/><br/>
                 </div>
                 <div className="item">
                    <label>Data usage purpose</label><br/>
                    <input/><br/>
                 </div>
                 <div className="item">
                    <label>Level of satellite imagery</label><br/>
                    <input/><br/>
                 </div>
                
                    
                 </form>
                </div>
            </div>
            </div>
        )
    }
}