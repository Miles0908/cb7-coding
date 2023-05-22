export const cE = (el) => document.createElement(el);

export const qS = (el) => document.querySelector(el);

export const getWeatherData = async (lat, lng) => {
  const res = await fetch(`https://goweather.herokuapp.com/weather/`, {
    headers: {
      "x-api-key": "8a92bdcd7451c624487d03e4cd109824",
    },
  });
  const data = await res.json();

  return data;
};

export const getWeatherCityData = async (City) => {
  const res = await fetch(`https://goweather.herokuapp.com/weather/${City}`);

  const data = await res.json();

  return data;
};

export const cityGen = (request) => {
  const wrapperEl = document.createElement("div");
  const title =cE("h1");
  const temperature = cE("h2");
  const description = cE("h2");
  const wind = cE("h2");
  const separator =cE("h1");

  wrapperEl.className = "city";

  temperature.className = "temp";

  description.className = "desc";

  wind.className = "wind";

 
  temperature.textContent = request.temperature;

  description.textContent = request.description;

  wind.textContent = request.wind;

  separator.textContent=("///////");
  title.textContent=("Città");

  wrapperEl.append(title,temperature, wind, description , separator);
  return wrapperEl;
};
