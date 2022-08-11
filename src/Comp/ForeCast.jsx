import React, { useContext } from "react";
import WeatherContext from "../Context/WeatherContext";
import { getIconUrl } from "../Services/WeatherService";

const ForeCast = ({ title }) => {
  const { weather, units } = useContext(WeatherContext);
  const { daily, hourly } = weather;

  return (
    <>
      <div className="items-center text-white mt-2  justify-start flex ">
        <p className=" text-3xl font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2"></hr>

      <div className="flex text-white flex-row items-center justify-between ">
        {title.split(" ")[0].toLowerCase() === "daily"
          ? daily.map((i, key) => (
              <div key={key} className="flex flex-col items-center">
                <p> {i.title} </p>
                <img
                  className="w-20"
                  alt=" logo "
                  src={`${getIconUrl(i.icon)}`}
                />
                <p className="font-medium">
                  {" "}
                  {i.temp.toFixed()} {units === "metric" ? "°C" : "°F"}{" "}
                </p>
              </div>
            ))
          : hourly.map((i, key) => (
              <div key={key} className="flex flex-col items-center">
                <p> {i.title} </p>
                <img
                  className="w-20"
                  alt=" logo "
                  src={`${getIconUrl(i.icon)}`}
                />
                <p className="font-medium">
                  {" "}
                  {i.temp.toFixed()} {units === "metric" ? "°C" : "°F"}
                </p>
              </div>
            ))}
      </div>
    </>
  );
};

export default ForeCast;
