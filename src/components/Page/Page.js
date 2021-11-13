import React from 'react';
import Header from '../Header/Header';
import './Page.css';
import Form from '../Form/Form';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';
import Forecast from '../Forecast/Forecast';
import useForecast from '../../hooks/useForcast';

const Page = () => {
  const {isError, isLoading, forecast, submitRequest} = useForecast();

  const forecastSubmit = (locationInput) => {
    submitRequest(locationInput);
  }
  return (
    <div className='page-container'>
      <div className='top'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,32L48,74.7C96,117,192,203,288,224C384,245,480,203,576,197.3C672,192,768,224,864,202.7C960,181,1056,107,1152,80C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      </div>
      
      <Header />

      {!isLoading && <Form 
        forecastSubmit={forecastSubmit} 
      />}
      { isError && <Error />}
      { isLoading && <Loader /> }
      { forecast && <Forecast forecast={forecast}/> }
      
    </div>
  )
}

export default Page
