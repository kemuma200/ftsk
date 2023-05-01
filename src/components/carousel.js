import React from 'react';
import "../App.css"
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import image1 from "../hiber-nanosatellites.jpg";
import image2 from "../Blockchain.jpg";
import image3 from "../CUBE-SATELLITES-NASA.jpg";
import image4 from "../114_web_1.jpg";
import image5 from "../Binance.jpg";

const buttonStyle = {
    display:"none",
};

const properties = {
    prevArrow: <button style={{ ...buttonStyle }}></button>,
    nextArrow: <button style={{ ...buttonStyle }}></button>
}

const Example = () => {
  return (
    <div className="homepageSlideshow">
        <Fade {...properties}>
        <img src={image1} alt ="1"/>
        <img src={image2} alt="2"/>
        <img src={image3} alt="2"/>
        <img src={image4} alt="2"/>
        <img src={image5} alt="2"/>
        </Fade>
        
    </div>
  );
};

export default Example;