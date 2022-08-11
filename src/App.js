import "./App.css";
import Inputs from "./Comp/Inputs";
import TopButtons from "./Comp/TopButtons";
import WeatherContext from "./Context/WeatherContext";
import Common from "./Comp/Common";
import { useContext } from "react";

function App() {
  const { weather, units } = useContext(WeatherContext);

  const formatBackground = () => {
    if (!weather) return "from-cyan-500 to-blue-200";
    const threshold = units === "metric" ? 30 : 60;
    if (weather.temp <= threshold) return "from-cyan-500 to-blue-500";
    return "from-yellow-500 to-orange-500";
  };
  return (
    <div
      className={`lg:mx-auto font-pop md:w-full lg:max-w-screen-md mt-4 py-5  px-32 bg-gradient-to-t
       h-fit shadow-2xl rounded-lg shadow-white 
      ${formatBackground()}
        `}
    >
      <TopButtons />
      <Inputs />
      <Common />
    </div>
  );
}

export default App;
