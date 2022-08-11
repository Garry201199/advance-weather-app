import React, { useContext } from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperatureEmpty,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import WeatherContext from "../Context/WeatherContext";
import { formatLocaleTime, getIconUrl } from "../Services/WeatherService";

const TempAndDetails = () => {
  const { weather , units} = useContext(WeatherContext)
  const {details ,icon, temp,feels_like,humidity , speed ,sunrise , sunset,timezone,temp_max,temp_min } = weather
  


  return (
    <div className="text-white">
      <div className="flex items-center justify-center pb-4 ">
        <p className="text-blue-200 text-xl">{details}</p>
      </div>

      <div className="flex flex-row  items-center justify-between">
        <img
          className="h-20 w-20" alt='fix'
          src={`${getIconUrl(icon)}`}
        />

        <div className="text-5xl  "> {`${Math.floor(temp) } ${units === 'metric' ? '°C':'°F' } `} </div>

        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <UilTemperatureEmpty size={18} className="mr-1" /> Real Fell :{" "}
            <span className="ml-1 font-medium"> {`${(feels_like).toFixed()  } ${units === 'metric' ? '°C':'°F' } `}</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilTear size={18} className="mr-1" /> Humidity :{" "}
            <span className="ml-1 font-medium"> {`${(humidity).toFixed()  }%`} </span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <UilWind size={18} className="mr-1" /> Wind :{" "}
            <span className="ml-1 font-medium"> {`${(speed).toFixed()  }  ${units === 'metric' ? 'km/hr':'miles/hr' } `} </span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center space-x-2 py-6 text-sm">
        <><UilSun size={18}  /> 
        <p  className="font-light"> 
        Rise :<span className="ml-1 font-medium"> {formatLocaleTime(sunrise , timezone ,'hh:mm a')}</span>  
        </p>
        <p className="font-light">|</p>
        </>

        <><UilSunset size={18}  /> 
        <p  className="font-light"> 
        Set :<span className="ml-1 font-medium">{formatLocaleTime(sunset , timezone ,'hh:mm a')}</span>  
        </p>
        <p className="font-light">|</p>
        </>

        <><UilArrowUp size={18}  /> 
        <p  className="font-light"> 
        High :<span className="ml-1 font-medium">{`${(temp_max).toFixed()  }${units === 'metric' ? '°C':'°F' }`} </span>  
        </p>
        <p className="font-light">|</p>
        </>

        <><UilArrowDown size={18}  /> 
        <p  className="font-light"> 
        Low :<span className="ml-1 font-medium">{`${(temp_min).toFixed()  }${units === 'metric' ? '°C':'°F' }`}</span>  
        </p>
        </>
        
      </div>
    </div>
  );
};

export default TempAndDetails;
