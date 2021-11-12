import { useState } from "react";
import axios from 'axios';

import getCurrentDayForecast from "../helpers/getCurrentDayForecast";
import getUpcomingDaysForecast from "../helpers/getUpcomingDaysForecast";
import getCurrentDayDetailedForecast from '../helpers/getCurrentDayDetailedForecast';

const BASE_URL = 'https://www.metaweather.com/api/location';
const CROSS_DOMAIN = 'https://the-ultimate-api-challenge.herokuapp.com';
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;

const useForecast = () => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  const getWeoid = async (location) => {
    const {data} = await axios.get(`${REQUEST_URL}/search`, {params: {query: location}})
    
    if (!data || data.length === 0) {
      setError('No location');
      setLoading(false);
      return;
    }
    return data;
  }

  const getForeCastData = async (woeid) => {
    const {data} = await axios.get(`${REQUEST_URL}/${woeid}`);
    if (!data || data.length === 0) {
      setError('Something went wrong');
      setLoading(false);
      return;
    }
    return data;
  }
  //call api
  const submitRequest = async (location) => {
    setLoading(true);
    setError(false);
    const response = await getWeoid(location);
    
    if (!response[0].woeid) return;
    const data = await getForeCastData(response[0].woeid);
    //if (!data) return;
    console.log(data, 'forecast data')
    gatherForecastData(data);
    
  }

  //gather forecast data
  const gatherForecastData = (data) => {
    const currentDay = getCurrentDayForecast(data.consolidated_weather[0], data.title)
    const currentDayDetails = getCurrentDayDetailedForecast(data.consolidated_weather[0]);
    const upcomingDays = getUpcomingDaysForecast(data.consolidated_weather)
    //console.log(upcomingDays, 'upcoming days')
    setForecast({ currentDay, currentDayDetails, upcomingDays });
    setLoading(false);
  }

  return {
    isError, isLoading, forecast, submitRequest
  }

  
}

export default useForecast;