import React from "react";
import video1 from "../so.mov";
import a from "../sol1.jpeg";
import b from "../sol2.jpg";
import c from "../sol3.jpg";
import "../solutions.css";
import arm from "../arm.png";
import nvid from "../nVidia.png";
import hyper from "../hypergiant.png";
import Navbar from "./navbar";
import Final from "./final";
import Footer from "./footer";


import CountDownTimer from "./countTimer";

export default class Solutions extends React.Component{
    render(){
        const THREE_DAYS_IN_MS = 300 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
        return(
            <div className="solutions">
            <div className="beforefourthsection">
    <CountDownTimer  targetDate={dateTimeAfterThreeDays}/>
    </div>
    <Navbar/>
            <video className="solutionVideo" src={video1} loop autoPlay muted/>
            <div className="headerText">
            <h1>Amini Solutions</h1>
            <p>Unlock a sustainable future with Amini! We're dedicated to providing reliable climate data for impactful collaborations with businesses, governments, and global organizations.</p>
            
            </div>
            <div className="solutionSection">
            <h1>Our data is</h1>
                <div className="solutionOne">
                    <div className="solutionImage">
                    <img src={c} alt="solution1"/>
                    </div>
                    <div className="solutionData">
                        <h2>Coutured for Africa</h2>
                        <p>We deploy a combination of multiple data collection methods, providing multiple data types with high quality insights to our clients</p>
                    </div>
                </div>
                <div className="solutionOne">
                    <div className="solutionData">
                        <h2>Immutable</h2>
                        <p>Our immutability starts at the source right down to the individual farm, meaning all data collected and verified is recorded and cannot be tampered with. </p>
                    </div>
                    <div className="solutionImage">
                    <img src={b} alt="solution1"/>
                    </div>
                </div>
                <div className="solutionOne">
                    <div className="solutionImage">
                    <img src={a} alt="solution1"/>
                    </div>
                    <div className="solutionData">
                        <h2>Superpowered</h2>
                        <p>Many satellites that are currently deployed focus on collecting data in the global North. We are designing a constellation of IOT integrated Nano-Satellites localized for Africa.</p>
                    </div>
                </div>
                <p className="solutionStatement">At Amini, passionate technologists are committed to bridging the data gap in Africa.
                Our groundbreaking solution involves launching a constellation of IOT-integrated nanosatellites, providing real-time and low-cost actionable data, and building the environmental data infrastructure for Africa.
                </p>
                <div className="fourthSection">
                    <h2 className="Header">Our Partners</h2>
                    <div className="partnerIcons">
                        <div class="encloseImage">
                        <img src={arm} alt="arm"/>
                        </div>
                        <div class="encloseImage">
                        <img src={hyper} alt="arm"/>
                        </div>
                        <div class="encloseImage">
                        <img src={nvid} alt="arm"/>
                        </div>
                       
                        
        
                    </div>

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