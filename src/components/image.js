import React from "react";
import news1 from "../apollo.jpg";
import news2 from "../blackmoon3.jpg";
import news3 from "../planets.jpeg";
import news4 from "../moon2.webp";
import news5 from "../us.jpg";
import "./news.css"



export default class NewsItem extends React.Component{
    render(){
        const amini_news = {
            1: "STARSHIP SELECTED BY NASA TO SUPPORT SUSTAINED LUNAR EXPLORATION",
            2: "FIRST CREWMEMBERS OF STARSHIP’S SECOND COMMERCIAL SPACEFLIGHT AROUND THE MOON",
            3: "SPACEX INVITES WORLD'S CARRIERS TO COLLABORATE — NO MORE CELL PHONE DEAD ZONES",
            4: "NASA’s ShadowCam Images Lunar South Pole Region",
            5: "Alien replies to NASA's spacecraft signals might reach us by 2029"
        };
        const news_section = [news1, news2, news3, news4, news5]
        return(
            <div className="newsSegment">
                { Object.keys(amini_news).map((key, index)=>{
                    return(
                        <div key={index} className="newsIndividualSegment">
                            <img src={news_section[index]} alt="news_item"/>
                            <p className="newsText">{amini_news[index + 1]}</p>
                        </div>    
                    )
                    
                })}
               
            </div>
        )
    }
}