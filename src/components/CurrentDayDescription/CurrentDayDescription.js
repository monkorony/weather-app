import React from 'react';
import './CurrentDayDescription.css';

const CurrentDayDescription = ({
  forecast
}) => {
  console.log(forecast)
  return (
    <div>
      <ul className='current-desc'>
        {
          forecast.map((item, index) => (
            <li key={index} >
              <div className="name">{item.name}</div>
              <div className="value">{`${item.value} ${item.unit}`}</div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default CurrentDayDescription
