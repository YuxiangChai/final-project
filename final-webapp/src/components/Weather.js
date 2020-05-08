import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Weather() {
  const defaultKey = "62d4df52f6468e767a1034b5a90eee94";
  const [weather, setWeather] = useState({});

  useEffect(() => {
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?id=5128581&appid=${defaultKey}&units=metric`)
      .then(function (response) {
        // handle success
        console.log(response);
        setWeather(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  

  return (
    <div className='Weather'>
      {weather.main && <h3>New York Weather: &nbsp;&nbsp;{weather.main.temp}&#176; &nbsp;&nbsp;{weather.weather[0].main}</h3>}
    </div>
  )
}

export default Weather;