
import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";

export const WeatherIcons = {
  "01d": "weather-world/icon/sunny.svg",
  "01n": "weather-world/icon/night.svg",
  "02d": "weather-world/icon/day.svg",
  "02n": "weather-world/icon/cloudy-night.svg",
  "03d": "weather-world/icon/cloudy.svg",
  "03n": "weather-world/icon/cloudy.svg",
  "04d": "weather-world/icon/perfect-day.svg",
  "04n": "weather-world/icon/cloudy-night.svg",
  "09d": "weather-world/icon/rain.svg",
  "09n": "weather-world/icon/rain-night.svg",
  "10d": "weather-world/icon/rain.svg",
  "10n": "weather-world/icon/rain-night.svg",
  "11d": "weather-world/icon/storm.svg",
  "11n": "weather-world/icon/storm.svg",
  "13d": "weather-world/icon/snow.png",
  "13n": "weather-world/icon/snow.png",
  "50d": "weather-world/icon/50d.png",
  "50n": "weather-world/icon/50n.png",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0 3px 6px 0 #555;
  background: linear-gradient(30deg,#DC143C,pink,#7FFFD4);
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  text-shadow: 2px 2px 5px red;
  font-size: 40px;
  font-weight: bold;
  font-family: 'Brush Script MT', cursive;
`;


function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=65628d1badebf84818d91fc1f9ed83f0`,
    );
    updateWeather(response.data);
  };
  return (
    <Container>
      <AppLabel>Weather World</AppLabel>
     
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;
