import React from 'react'

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
  return (
    <div>
      <div>{weekday}</div>
    </div>
  )
}

export default CurrentDay
