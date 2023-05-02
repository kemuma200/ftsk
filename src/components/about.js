import React from "react";
import Person from "./team";
import vidz from "../soh.mp4";
import "../about.css";
import CountDownTimer from "./countTimer";
import Navbar from "./navbar";
import Footer from "./footer";
import Final from "./final";

export default class About extends React.Component{
    render(){
        const THREE_DAYS_IN_MS = 300 * 24 * 60 * 60 * 1000;
        const NOW_IN_MS = new Date().getTime();

        const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
        return(
            <div className="aboutContainer">
            <div className="beforefourthsection">
            <CountDownTimer  targetDate={dateTimeAfterThreeDays}/>
            </div>
            <Navbar/>
            <video className="aboutVideo" src={vidz} loop autoPlay muted/>
                
                <div className="ch">
                <h1>Who are we?</h1>
                <p>Amini is the game-changer you have been waiting
                for. We are a deep tech startup that's 
                transforming Africa's climate data landscape! 
                Harnessing the power of satellites, blockchain, AI/ML, 
                and APIs to access vital climate insights for 
                businesses, governments, and global organizations is
                our area of expertise. To space and beyond!! 
               </p>
               </div>
               
               <div className="aboutteam">
                 <h2>Our Team</h2>
                 <p>Our talented team brings a unique combination of expertise in applied data science, AI/ML, blockchain, geospatial, embedded finance, and policy, with experience working for tech giants like NVIDIA, Microsoft, Intel, Arm, and leading African startups. 
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