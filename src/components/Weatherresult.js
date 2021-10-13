import React from 'react';
import "./weatherresult.css";

const Weatherresult = ({date, humidity, temp,icon, condition}) => {
    return (
       <div className="result">
          <h2>{date}</h2>
          <h4>{temp} C</h4>
          <img src={icon} alt=""/>
          <h5>{condition}</h5>
          <h3>{humidity}%</h3> 
       </div>
    )
}

export default Weatherresult;
