import React, { useState } from 'react';

const api ={
  key: "da845f0b7474855d90c1498b7e5a9d32",
  base: "https://api.openweathermap.org/data/2.5/"
}


function App() {
  //app states
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  // event to fetch weather data from api
  const search = evt =>{
    if (evt.key === "Enter"){
      //api request
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setQuery('');
        setWeather(result); 
        console.log(result);
    })
  }}
  
  //build the date
  const dateBuilder = (d) =>{
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", 
  "Oct", "Nov", "Dec"];
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let day = days[d.getDay()] //return number between 1-7
    let date = d.getDate()
    let month = months[d.getMonth()]; //return number between 0-11
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }
  return (
  //check the weather type & change background
    <div className={(typeof weather.main !="undefined") ? ((weather.main.temp >16) ? 
    'App warm': 'App cold'): 'App'}> 
      <main>
        <div className="search-box">
          <input
          type="text"
          className="search-bar"
          placeholder="Search Location.."
          //get value of input
          onChange={e => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
          />
        </div>
        {/* get & display weather & date from api */}
        {(typeof weather.main !="undefined") ?( 
        <div>
          <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div>
          <div className="weather-box">
            <div className="temp">
              {Math.round(weather.main.temp)}°c
            </div>
            <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        </div>
        ) : ('')}
      </main>
   
    </div>
  );
}

export default App;
