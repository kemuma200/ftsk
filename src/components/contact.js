import React from "react";
import image1 from "../xoplanet.jpg";
import "../contact.css";
import Navbar from "./navbar";
import Final from "./final";
import Footer from "./footer";
import CountDownTimer from "./countTimer";
import { FaTwitter} from "@react-icons/all-files/fa/FaTwitter";
import {FaInstagram} from "@react-icons/all-files/fa/FaInstagram";
import {FaFacebook} from "@react-icons/all-files/fa/FaFacebook";
import {FaLinkedin} from "@react-icons/all-files/fa/FaLinkedin";
import {FaYoutube} from "@react-icons/all-files/fa/FaYoutube";




export default class Contact extends React.Component{
    render(){
        return(
            <div className="contactsPage"> 
           
    <Navbar/>
            <img className="spacebinoculars" src={image1} alt="spacebinoculars"/>
            <h1 className="contactsHeader"> Get in touch</h1>
            <h1 className="smallscreenHeader">Get in touch</h1>
            <div className>
                <div className="contactMethods">
                    <div className="contactMeans deservesborder summer">
                        <p className="contactMeansTitle">Email</p>
                        <a href="mailto:jumanjisatellites@amini.co.ke">amanisatellies@amini.co.ke</a>
                    </div>
                    
                    <div className="contactMeans deservesborder contactSocials">
                        <p className="contactMeansTitle">Socials</p>
                        <div className="socials" id="socials">
                        <FaLinkedin className="social-icon"/>
                        <FaYoutube className="social-icon"/>
                        <FaTwitter className="social-icon"/>
                        <FaFacebook className="social-icon"/>
                        <FaInstagram className="social-icon"/>
                        </div>
                        
                    </div>
                    <div className="contactMeans noborder summer">
                        <p className="contactMeansTitle">Phone Number</p>
                        <p>+254733333333 | 020-78659876</p>
                    </div>
                </div>
                <div className="userInput">
                <p className="formInfo">To submit an inquiry, please fill out the form below.
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
                 <div className="item itemButton">
                     <div className="itemButton">
                        <button >Submit</button>
                     </div>
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