import React from "react";
import Navbar from "./navbar";
import Example from "./carousel";
import "../App.css";
import seat from "../chair2.png"
import Person from "./team";
import arm from "../arm.png";
import nvid from "../nVidia.png";
import hyper from "../hypergiant.png";


export default class Home extends React.Component{
    render(){
        return(
            <div className="aminiHome">
                <Navbar/>
                <Example/>
                <div className="slideshowText">
                    <h1 className="slideshowHeader">Pioneering environmental progress through technology</h1>
                    <p className="slideshowExtraText">We are committed towards building the environmental data infastructure for Africa
                    by providing reliable climate data.</p>
                    
                </div>
                <div className="sectionTwo">
                    <img src={seat} alt="Seat"/>
                    <div className="engage">
                        <h2 className="sectionHeader">Grab a Seat</h2>
                        <p className="sectionText">Let’s chat about how you can use reliable 
                        trustworthy data to build a more resilient future 
                        for businesses, people and our planet.</p>
                    </div>
                    
                </div>
                
                <div className="thirdSection">
                    <h2 className="Header">Meet our Team</h2>
                    <p>Our talented team brings a unique combination 
                    of expertise in applied data science, AI/ML,blockchain, 
                    geospatial, embedded finance, and policy, with experience 
                    working for tech giantslike NVIDIA, Microsoft, Intel, Arm, 
                    and leading African startups.</p>
                    <Person className="homeTeam"/>
                    <a href="#" className="moreTeamMembers">See more</a>
                </div>
                <div className="beforefourthsection">
                    <h2 className="Header"> Amini Satellite Launch </h2>
                </div>
                <div className="fourthSection">
                    <h2 className="Header">Our Partners</h2>
                    <div className="partnerIcons">
                        <img src={arm} alt="arm"/>
                        <img src={nvid} alt="nvidia"/>
                        <img src={hyper} alt="hypergiant"/>
                    </div>

                </div>
                <div className="footer">
                    
                </div>

                

            </div>
            
            

        )
    }
}