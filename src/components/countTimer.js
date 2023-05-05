import React from 'react';
import { useCountdown } from './countdown';
import "../App.css";
import DateTimeDisplay from './DateTimeDisplay';


const ExpiredNotice = () => {
    return (
      <div className="expired-notice">
        <span>Expired!!!</span>
        <p>Please select a future date and time.</p>
      </div>
    );
  };

  const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="show-counter">
      <h2 className="countDownFont">Amini DIJKSTRA-1 launch</h2>
        <a
          href="#"
          className="countdown-link"
        >
        
        <div classNaame="counterbox">
       
        <div className ="theCounter">
          <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
          :
          <DateTimeDisplay value={hours} type={'Hrs'} isDanger={false} />
          :
          <DateTimeDisplay value={minutes} type={'Min'} isDanger={false} />
          :
          <DateTimeDisplay value={seconds} type={'Sec'} isDanger={false} />
        </div>
        </div>
            
        </a>
      </div>
    );
  };
  
  
export default function CountDownTimer({ targetDate })
{
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  if (days + hours + minutes + seconds <= 0) {
    return(
      <div className="timerEnclosing">
        <ExpiredNotice />
      </div>
    ) 
  } else {
    return (
      <div>
      <div className="timerEnclosing">
        <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        />
      </div>
      </div>
      
    );
  }
};

