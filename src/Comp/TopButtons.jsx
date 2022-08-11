import React, { useContext } from "react";
import WeatherContext from "../Context/WeatherContext";

const TopButtons = () => {
  const { setQuery, weather } = useContext(WeatherContext);
  const { name } = weather;

  const Cities = [
    { id: 1, title: "London" },
    { id: 2, title: "Sydney" },
    { id: 3, title: "Pune" },
    { id: 4, title: "Mumbai" },
    { id: 5, title: "Hyderabad" }
  ];
  return (
    <div className="flex justify-around items-center my-6 ">
      {Cities.map((i) => (
        <button
          onClick={() => setQuery({ q: i.title })}
          className={`text-lg transition ease-out cursor-pointer duration-500 hover:scale-150
              font-medium ${
                name === i.title ? "text-green-300" : "text-white"
              }  `}
          key={i.id}
        >
          {i.title}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
