import React, { useContext } from "react";
import WeatherContext from "../Context/WeatherContext";
import { formatLocaleTime } from "../Services/WeatherService";

const TimeAndLocation = () => {
  const { weather } = useContext(WeatherContext);
  const { dt, country, name: city, timezone } = weather;

  return (
    <div className="flex text-xl text-white flex-col justify-center items-center my-6">
      <p className="font-extralight">{formatLocaleTime(dt, timezone)} </p>
      <p className="text-3xl font-bold my-6"> {`${city} ,  ${country}`} </p>
    </div>
  );
};

export default TimeAndLocation;
