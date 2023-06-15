import {React, useEffect, useRef} from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
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


export default function Home() {
    const titleAnime= useAnimation();
    const bodyAnime = useAnimation();
    const [titleRef, inView] = useInView();


    useEffect(()=>{
        if(inView){
            titleAnime.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 1, bounce: 0.3
                }
            });
            bodyAnime.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 1.2, bounce: 0.3
                }
            })
        }
        if (!inView){
            titleAnime.start({
                x: '-100vw',
            });
            bodyAnime.start({
                x: '200vw'
            })
        }
    }, [inView])
        return(
            <div className="aminiHome" ref={titleRef}>
                <Navbar/>
                <Example/>
                <div className="slideshowText" >
                    <motion.h1 className="slideshowHeader" animate={titleAnime} >Amini: Pioneering environmental progress through technology
                    </motion.h1>
                    <motion.div className="slideshowExtraTextEnclose" animate={bodyAnime}>
                    <p className="slideshowExtraText" >Welcome to Amini, the game-changing deep tech startup that's transforming Africa's climate data landscape! Harness the power of satellites, blockchain, AI/ML, and APIs to access vital climate insights for businesses, governments, and global organizations.
                    We're a team of passionate professionals driven by a shared vision of creating a thriving ecosystem of human progress in space.
                    </p>
                    <button animate={bodyAnime}>Learn more</button>
                    </motion.div>
                   
                    
                </div>
               
                <div class="newsSection">
                    <h2 className="Header">News</h2>
                    <motion.div className="newsPacks" animate={bodyAnime}>
                        <NewsItem/>
                    </motion.div>
                   
                </div>
                
                <div className="thirdSection" >
                    <motion.h2 className="Header" animate={titleAnime}>Meet our Team</motion.h2>
                    <motion.p className="afterHeaderIntroText" animate={bodyAnime}>Our talented team brings a unique combination 
                    of expertise in applied data science, AI/ML,blockchain, 
                    geospatial, embedded finance, and policy, with experience 
                    working for tech giantslike NVIDIA, Microsoft, Intel, Arm, 
                    and leading African startups.</motion.p>
                    <Person className="homeTeam"/>
                    <motion.a href="/" className="moreTeamMembers" animate={bodyAnime}>See more...</motion.a>
                </div>
                <div className="sectionTwo">
                    <motion.p className="sectionText" animate={bodyAnime}>Let’s chat about how you can use reliable 
                    trustworthy data to build a more resilient future 
                    for businesses, people and our planet.</motion.p>
                </div>
                <div className="fourthSection">
                    <motion.h2 className="Header" animate={titleAnime}>Our Partners</motion.h2>
                    <div className="enclosePartnerIcons">
                        <div className="partnerIcons">
                            <motion.div class="encloseImage" animate={bodyAnime}>
                                <img src={arm} alt="arm"/>
                            </motion.div>
                            <motion.div class="encloseImage" animate={bodyAnime}>
                                <img src={hyper} alt="arm"/>
                            </motion.div>
                            <motion.div className="encloseImage" animate={bodyAnime}>
                                <img src={nvid} alt="arm"/>
                            </motion.div>
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
