import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { WeatherProvider } from "./Context/WeatherContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <WeatherProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </WeatherProvider>
);
