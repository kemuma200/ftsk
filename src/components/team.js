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
                title: "Head of operations"
            },
            {
                name : "Mwenda Mugendi",
                image: img3,
                title: "Head of Technology"
            },
            {
                name : "Clinton Oduor",
                image: img4,
                title: "Machine Learning Engineer"
            },
            {
                name : "Eshani Kaushal",
                image: img5,
                title: "Head of business development and General Counsel"
            },
            {
                name : "Chadi Assoualma",
                image: img6,
                title: "Market Research Analyst Lead"
            },{
                name : "George Gichuru",
                image: img7,
                title: "Blockchain Engineer"
            },{
                name : "Linnet Maina",
                image: img8,
                title: "Finance and Admin"
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