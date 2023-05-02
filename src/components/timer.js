import React from "react";
import CountDownTimer from "./countTimer";
import "../App.css"

export default class Timer extends React.Component{
    render(){
        const THREE_DAYS_IN_MS = 300 * 24 * 60 * 60 * 1000;
        const NOW_IN_MS = new Date().getTime();

        const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
        return(
            <div className="beforefourthsection">
            <CountDownTimer  targetDate={dateTimeAfterThreeDays}/>
            </div>
        )
    }
}