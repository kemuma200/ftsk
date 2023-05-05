import React from "react";
import { FaTwitter} from "@react-icons/all-files/fa/FaTwitter";
import {FaInstagram} from "@react-icons/all-files/fa/FaInstagram";
import {FaFacebook} from "@react-icons/all-files/fa/FaFacebook";
import {FaLinkedin} from "@react-icons/all-files/fa/FaLinkedin";
import {FaYoutube} from "@react-icons/all-files/fa/FaYoutube";



export default class Final extends React.Component{
    render(){
        return(
            <div className="finalLineFooter">
                <div className="footerLeft">
                    <span className="footerInitials">
                        <p>&copy; 2023</p>
                        <p className="footerName"> Amini Inc.</p><br/>
                    </span>
                    <p className="cpyrightTag">All rights reserved</p>
                    
                </div>
                <div className="finalNewsletter">
                    <button >Subscribe to our newsletter</button>
                </div>
                
                <div>
                    <div className="socials" id="socials">
                    <FaLinkedin className="social-icon"/>
                    <FaYoutube className="social-icon"/>
                    <FaTwitter className="social-icon"/>
                    <FaFacebook className="social-icon"/>
                    <FaInstagram className="social-icon"/>
                    </div>
                  
                </div>
            </div>
        )
    }
}