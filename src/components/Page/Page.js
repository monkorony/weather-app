import React from 'react';
import Header from '../Header/Header';
import './Page.css';
import Form from '../Form/Form';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';
import Forecast from '../Forecast/Forecast';
import useForecast from '../../hooks/useForcast';

const Page = () => {
  const {isError, isLoading, forecast} = useForecast();
  return (
    <div className='page-container'>
      <Header />

      {!isLoading && <Form />}
      { isError && <Error />}
      { isLoading && <Loader /> }
      { forecast && <Forecast /> }
      
    </div>
  )
}

export default Page
