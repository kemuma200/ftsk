import React from "react";
import Navbar from "./navbar";
import Example from "./carousel";
import "../App.css";
import seat from "../chair2.png"
import Person from "./team";
import arm from "../arm.png";
import nvid from "../nVidia.png";
import hyper from "../hypergiant.png";
import news1 from "../apollo.jpg";
import news2 from "../blackmoon3.jpg";
import news3 from "../planets.jpeg";
import news4 from "../moon2.webp";
import news5 from "../us.jpg";
import Footer from "./footer";
import Final from "./final";





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
                <div class="newsSection">
                    <h2 className="Header">What's New</h2>
                    <div class="newsSegment">
                        <img className="newstab1" src={news1} alt="apollonews"/>    
                        <img className="newstab2" src={news2} alt="blackmoon"/>
                        <div className="newstab3">
                            <img className="newstab_1" src={news3} alt="planetnews"/>
                            <img className="newstab_1" src={news4} alt="lunar"/>
                        </div>
                        <img className="newstab4" src={news5} alt="paradigm_shift"/>
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
                    <a href="/" className="moreTeamMembers">See more</a>
                </div>
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
            
            

        )
    }
}