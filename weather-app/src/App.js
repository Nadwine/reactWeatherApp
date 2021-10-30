import React from 'react';
const api ={
  key: "da845f0b7474855d90c1498b7e5a9d32",
  base: "https://api.openweathermap.org/data/2.5/"
}


function App() {
  
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
    <div className="App">
      <main>
        <div className="search-box">
          <input
          type="text"
          className="search-bar"
          placeholder="Search Location.."
          />
        </div>
        <div>
          <div className="location-box">
            <div className="location">London, UK</div>
            <div className="date">{dateBuilder(new Date())}</div>
        </div>
        <div>
          <div className="weather-box">
            <div className="temp">
              15°c
            </div>
            <div className="weather">
              Cloudy
              </div>
            </div>
          </div>
        </div>
      </main>
   
    </div>
  );
}

export default App;
