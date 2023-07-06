import React from 'react';

const Weather = ({ data }) => {
  console.log(data);
  return (
    <> 
        <div className="main">
             <div className="tempcontainer">
                 <h1>Temprature: {data.main.temp.toFixed(0)}&#176;C</h1>
                  <h2>Wind speed: {data.wind.speed.toFixed(0)} MPH</h2>
                  <h2>Humidity: {data.main.humidity}%</h2>
             </div>
             <div className="condition">
                      <h1>Weather:</h1>
                      <h1>{data.weather[0].description}</h1>
                  <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="img" />
             </div>
             <div className="bottomcontainer">
                 <h1>pressure: {data.main.pressure} hpa</h1>
                  <h2>Country: {data.sys.country}</h2>
                  <h2>City: {data.name}</h2>
          
             </div>
        </div>
    </>
  );
};

export default Weather;