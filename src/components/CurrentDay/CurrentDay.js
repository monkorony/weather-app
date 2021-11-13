import React from 'react';
import './CurrentDay.css';

const CurrentDay = (
  { 
    weekday, 
    date, 
    location, 
    temperature, 
    weatherIcon, 
    weatherDescription 
  }
) => {
  const cleanWeatherImg = weatherIcon.replace("'", '');
  return (
    <div className='current-day'>
      <h2>{weekday}</h2>
      <h4>{date}</h4>
      <div className='location-wrap'>
        <div className='location'>&#9992; {location}</div>
        <div className='temp'>
          <div>{temperature}&deg;</div>
          <img width="45" src={cleanWeatherImg} alt="" />
        </div>
      </div>
      
      
    </div>
  )
}

export default CurrentDay
