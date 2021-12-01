import styled from "styled-components";
import React from "react";

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
 
  border-radius: 2px;
  & input {
    padding: 10px;
    font-size: 14px;
    border-radius: 10px;
    outline: none;
    font-family: Montserrat;
    font-weight: bold;
  }
  & button {
    background-color: black;
    font-size: 14px;
    padding: 0 10px;
    margin-left:3px;
    color: white;
    border-radius:10px;
    outline: none;
    cursor: pointer;
    font-family: Montserrat;
    font-weight: bold;
  }
`;
const AppLabel1 = styled.span`
  color: 	black;
  margin: auto;
  font-size: 30px;
  text-shadow: 2px 2px 5px #7FFF00;
  font-weight: bold;
  font-family: 'Brush Script MT', cursive;
`;

const WelcomeWeatherLogo = styled.img`
  width: 200px;
  height: 200px;
  margin: 40px auto;
`;
const CityComponent = (props) => {
  const { updateCity, fetchWeather } = props;
  return (
    <>
     <AppLabel1>"Climate is what we Expect</AppLabel1>
     <AppLabel1>Weather is what we Get ..."</AppLabel1>
      <WelcomeWeatherLogo src={"weather-world/icon/front.png"} />
      
      <SearchBox onSubmit={fetchWeather}>
        <input
          onChange={(e) => updateCity(e.target.value)}
          placeholder="Search City..."
        />
       
        <button type={"submit"}>Search</button>
      </SearchBox>
    </>
  );
};
export default CityComponent;