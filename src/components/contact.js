import React from "react";
import image1 from "../xoplanet.jpg";
import "../contact.css";
import Navbar from "./navbar";
import Final from "./final";
import Footer from "./footer";
import CountDownTimer from "./countTimer";



export default class Contact extends React.Component{
    render(){
        const THREE_DAYS_IN_MS = 300 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
        return(
            <div className="contactsPage"> 
            <div className="beforefourthsection">
    <CountDownTimer  targetDate={dateTimeAfterThreeDays}/>
    </div>
    <Navbar/>
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
            
      <div className="footer">
      <Footer/>
      <Final/>
    </div>
            </div>
        )
    }
}