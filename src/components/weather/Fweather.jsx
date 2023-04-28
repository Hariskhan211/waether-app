import React from 'react'
import "./Fweather.css";
const ForeCastData=({Data})=>{
  
  return (
       <>
         <div className='hourlyData'>
          <p >{Data.dt_txt.slice(0,11)}</p>
          <p >{Data.dt_txt.slice(11,16)}</p>
          <p >{Data.main.temp}°C</p>
          <p><img
          src={`https://openweathermap.org/img/w/${Data.weather[0].icon}.png`}
          alt=""
        /></p>
        <p>{Data.weather[0].description}</p>
         </div>
       </>
  )
}
const ForecastWeather = ({data}) => {
  return (
    <>
    <div className='div-forecast'>
      <div className='inner-div'>
        {
          data.list.map((items,i)=>{
          return <ForeCastData Data={items} key={i}/>
          })
        }

      </div>
        
    </div>
    
    </>
  )
}

export default ForecastWeather