import React from 'react';
import './UpcomingDayForecast.css';

const UpcomingDayForecast = ({
  days
}) => {

  console.log(days);
  const imgBase = `https://www.metaweather.com/static/`;

  return (
    <div>
      <div className='bottom'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,192L80,160C160,128,320,64,480,53.3C640,43,800,85,960,90.7C1120,96,1280,64,1360,48L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      </div>
      <div className='forecast-items'>
        <ul className='upcoming-list'>
          {
            days.map((day, index) => (
              <li key={index}>
                <img src={`${imgBase}img/weather/${day.imgUrl}.svg`} />
                <h4>{day.weekday}</h4>
                <p>{day.temperature}&deg;</p>
              </li>
            ))
          }
        </ul>
      </div>
      
    </div>
  )
}

export default UpcomingDayForecast
