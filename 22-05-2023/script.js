import { getWeatherCityData,  getWeatherData, cityGen, cE, qS } from "./utils/fn.js";

const root = qS("#root");

const inputEl = qS("input");

inputEl.addEventListener("change", (e) => {
  getWeatherCityData(e.target.value).then((request) => {
    root.appendChild(cityGen(request));
  });
});
