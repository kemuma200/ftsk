import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <p className="timerItem">{value}</p>
      <span className="timerType">{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
