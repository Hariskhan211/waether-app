
import './App.css';
import Searchbox from './components/Searchbox';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CurrentWeather from './components/weather/Cweather';
import ForecastWeather from './components/weather/Fweather';

function App() {
     
     const [city,seCity]=useState("")
     const [weather,setWeather]=useState(null)
  const handleSearch=()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=f0321ed4a8303cf7e15ab1938155ab04`)
    .then((response)=>{
      console.log(response.data)
      setWeather(response.data)
    })
    .catch((err)=>console.log(err))
    
  }
  return (
    <>
    <div className='main-div'>
      <div className="search-div">
        <input type="search" name="" id="" onChange={(e)=>seCity(e.target.value)} className="Search"
         placeholder='enter city name'
        />
        <button onClick={handleSearch} className="btn">Search</button>
      </div>
      {
        weather ? (
                <>
                <CurrentWeather data={weather} />
                <ForecastWeather data={weather} />
                </>
        ) : null
      }
    </div>
   {/* <div className="div">
    
       
        <Searchbox />
   </div> */}
    </>
  );
}

export default App;
