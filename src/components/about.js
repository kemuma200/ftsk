import React from "react";
import Person from "./team";
import vidz from "../soh.mp4";
import "../about.css";
import Navbar from "./navbar";
import Footer from "./footer";
import Final from "./final";

export default class About extends React.Component{
    render(){
       
        return(
            <div className="aboutContainer">
            <Navbar/>
            <div className="videoSection">
                <video className="aboutVideo" src={vidz} loop autoPlay muted/>
            </div>
                
                <div className="ch">
                <h1>Who are we?</h1>
              
               </div>
               <div className="encloseMissionVision">
               <div className="missionVision">
               <div className="mission">
               <h3>Mission</h3>
               <p>To bridge Africa's data gap and enable the resilience of 1 billion people by 2030.  </p>
               </div>
               <div>
               <h3>Vision</h3>
               <p>A world where people can utilize data to produce global change.</p>
               </div>
          </div>
          <div className="values">
              <ul>
                 <h3>Values</h3>
                 <li>Integrity</li>
                 <li>Innovation</li>
                 <li>Creativity</li>
                 <li>Professionalism</li>
                 <li>Customer focus</li>
              </ul>
          </div>
               </div>
               
               
               
               <div className="aboutteam">
                 <h2>Our Team</h2>
                 <p className="aboutteamdescription">Our talented team brings a unique combination of expertise in applied data science, AI/ML, blockchain, geospatial, embedded finance, and policy, with experience working for tech giants like NVIDIA, Microsoft, Intel, Arm, and leading African startups. 
                 </p>
                 <Person/>
               </div>
               
      <div className="footer">
      <Footer/>
      <Final/>
    </div>
            </div>
        )
    }
}