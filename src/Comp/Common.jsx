import React, { useContext, useEffect } from 'react'
import WeatherContext from '../Context/WeatherContext'
import ForeCast from './ForeCast'
import TempAndDetails from './TempAndDetails'
import TimeAndLocation from './TimeAndLocation'
import { toast } from "react-toastify";

const Common = () => {
  const {fetchWeather,query , units ,  weather} = useContext(WeatherContext)

  useEffect(()=>{
    const msg = query.q ? query.q : 'current location.'
    toast.info(`🦄Fetching Data for ${msg}`);
    fetchWeather()
    console.log("weather.name"+ weather.name +" and " + query.q);
    toast.success(`🦄Successfully fetched data for ${weather.name === undefined ? query.q :  weather.name }`);
    // eslint-disable-next-line
  },[query , units])
  return (
    <div>
      {weather && (
      <>
      <TimeAndLocation/>
      <TempAndDetails/>
      <ForeCast title='Hourly Forecast'/> 
      <ForeCast title='Daily Forecast'/> 
        </>
      )}
      

    </div>
  )
}

export default Common
