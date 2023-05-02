import React from "react";
import img1 from "../katekallot.jpg";
import img2 from "../muthonikarubiu.jpeg";
import img3 from "../mwendamugendi.jpeg";
import img4 from "../clintonoduor.jpg";
import img5 from "../EshaniKaushal.jpeg";
import img6 from "../ChadiAssoualma.jpg";
import img7 from "../GeorgeGichuru.jpeg";
import img8 from "../LinnetMaina.jpeg";



export default class Person extends React.Component{
    constructor(){
        super()
        this.team = [{
                name : "Kate Kallot",
                image: img1,
                title: "Founder and CEO"
            },
            {
                name: "Muthoni Karubiu",
                image: img2,
                title: "Founder and CEO"
            },
            {
                name : "Mwenda Mugendi",
                image: img3,
                title: "Founder and CEO"
            },
            {
                name : "Clinton Oduor",
                image: img4,
                title: "Founder and CEO"
            },
            {
                name : "Eshani Kaushal",
                image: img5,
                title: "Founder and CEO"
            },
            {
                name : "Chadi Assoualma",
                image: img6,
                title: "Founder and CEO"
            },{
                name : "George Gichuru",
                image: img7,
                title: "Founder and CEO"
            },{
                name : "LinnetMaina",
                image: img8,
                title: "Founder and CEO"
            }]
            
    }
    
    render(){
        
        return(
            <div className="aminiTeamEnclosing">
                {this.team.map((key, index)=>{
                    return(
                        <div key = {index} className="aminiTeam">
                            <div className="memberImageContainer">
                                <img src={this.team[index].image} alt = {this.team[index].name}/>
                            </div>
                           
                            <p className="membername">{this.team[index].name}</p>
                            <p className="membertitle">{this.team[index].title}</p>
                        </div>
                    )
                })
            }
            </div>
        )
    }
}