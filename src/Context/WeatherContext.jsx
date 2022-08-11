import { createContext, useState } from "react";
import getFormattedData from "../Services/WeatherService";
const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [query, setQuery] = useState({ q: "pune" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState("");

  const fetchWeather = async () => {
    await getFormattedData({ ...query, units }).then((data) => {
      setWeather(data);
    });
  };

  return (
    <WeatherContext.Provider
      value={{
        fetchWeather,
        query,
        units,
        weather,
        setQuery,
        setUnits,
        setWeather
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
