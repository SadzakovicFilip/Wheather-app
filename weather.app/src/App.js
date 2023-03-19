import logo from './logo.svg';
import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/current-weather';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
import { useState } from 'react';
import Forecast from './components/forecast/forecast';

//rokamo ga jak
//pokusaj 2 
//rokamo ga jako
// nenad
//Filipov pokusaj 

function App() {
  const[currentWeather,setCurrentWeather] = useState(null)
  const[forecast,setForcast] = useState(null)

  const handleOnSearchChnage =(searchData)=>{
   const [lat,lon] = searchData.value.split(` `);
   const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
   const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    
   Promise.all([currentWeatherFetch,forecastFetch])
      .then(async(response)=>{
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();

      setCurrentWeather({city:searchData.label, ...weatherResponse})
      setForcast({city:searchData.label, ...forecastResponse})
    })
    .catch((err)=>console.log(err)) 
  }

  console.log(currentWeather)
  console.log(forecast)

  return (
    <div className="container">
        <Search
        onSearchChange={handleOnSearchChnage}
        />
        {currentWeather && <CurrentWeather
        data={currentWeather}
        />}
        {forecast && <Forecast data={forecast}/>}
    </div>
  );
}

export default App;
