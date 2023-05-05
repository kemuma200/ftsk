import React from "react";
import Navbar from "./navbar";
import Example from "./carousel";
import "../App.css";
import seat from "../chair2.png"
import Person from "./team";
import arm from "../arm.png";
import nvid from "../nVidia.png";
import hyper from "../hypergiant.png";
import Footer from "./footer";
import Final from "./final";
import CountDownTimer from "./countTimer";
import Timer from "./timer";
import NewsItem from "./image"


export default class Home extends React.Component{
    render(){
        
        return(
            <div className="aminiHome">
            
                <Navbar/>
                <Example/>
                <div className="slideshowText">
                    <h1 className="slideshowHeader">Amini: Pioneering environmental progress through technology
                    </h1>
                    <p className="slideshowExtraText">Welcome to Amini, the game-changing deep tech startup that's transforming Africa's climate data landscape! Harness the power of satellites, blockchain, AI/ML, and APIs to access vital climate insights for businesses, governments, and global organizations.
                    We're a team of passionate professionals driven by a shared vision of creating a thriving ecosystem of human progress in space.
                    </p>
                    <button>Learn more</button>
                    
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
                    <h2 className="Header">News</h2>
                    <div className="newsPacks">
                        <NewsItem/>
                    </div>
                   
                </div>
                
                <div className="thirdSection">
                    <h2 className="Header">Meet our Team</h2>
                    <p className="afterHeaderIntroText">Our talented team brings a unique combination 
                    of expertise in applied data science, AI/ML,blockchain, 
                    geospatial, embedded finance, and policy, with experience 
                    working for tech giantslike NVIDIA, Microsoft, Intel, Arm, 
                    and leading African startups.</p>
                    <Person className="homeTeam"/>
                    <a href="/" className="moreTeamMembers">See more...</a>
                </div>
                <div className="fourthSection">
                    <h2 className="Header">Our Partners</h2>
                    <div className="enclosePartnerIcons">
                        <div className="partnerIcons">
                            <div class="encloseImage">
                                <img src={arm} alt="arm"/>
                            </div>
                            <div class="encloseImage">
                                <img src={hyper} alt="arm"/>
                            </div>
                            <div className="encloseImage">
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