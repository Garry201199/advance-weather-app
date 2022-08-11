import { DateTime } from "luxon";

const BaseUrl = "https://api.openweathermap.org/data/2.5";
const API_KEY = "d37cfa99c9b58525b43dc597c65fd537";

const getWeatherData = (infoType, searchParams) => {
  // const url = 'https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=d37cfa99c9b58525b43dc597c65fd537'
  const url = new URL(BaseUrl + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  return fetch(url).then((data) => data.json());
};
const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed }
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed
  };
};

const formatForecastWeather = (data) => {
  let { timezone, daily, hourly } = data;

  daily = daily.slice(1, 6).map((d) => {
    return {
      title: formatLocaleTime(d.dt, timezone, "ccc"),
      temp: d.temp.day,
      icon: d.weather[0].icon
    };
  });

  hourly = hourly.slice(1, 6).map((d) => {
    return {
      title: formatLocaleTime(d.dt, timezone, "hh:mm a"),
      temp: d.temp,
      icon: d.weather[0].icon
    };
  });

  return { daily, hourly, timezone };
};

const formatLocaleTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local Time :'hh:mm a'"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const getFormattedData = async (searchParams) => {
  const formattedCurrentWeatherData = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);
  const { lat, lon } = formattedCurrentWeatherData;

  const formattedForecastData = await getWeatherData("onecall", {
    lat,
    lon,
    exclude: "current,minutely,alerts",
    units: searchParams.units
  }).then(formatForecastWeather);
  console.log(formattedForecastData);

  return { ...formattedCurrentWeatherData, ...formattedForecastData };
};

const getIconUrl = (code) => {
  return `http://openweathermap.org/img/wn/${code}@2x.png`;
};

export default getFormattedData;

export { getIconUrl, formatLocaleTime };
