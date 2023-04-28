import React, { useEffect } from 'react'
import "./currentW.css"
import bg1 from "./grass.jpg";
import bg2 from "./bg2.jpg"
import bg3 from "./rainny.jpg"
const CurrentWeather = ({data}) => {
    useEffect(()=>{
      if(data.list[0].weather[0].main=="Clouds"){
        document.querySelector(".main-div").style.backgroundImage=`url(${bg1})`
      }
      else if(data.list[0].weather[0].main=="Clear"){
        document.querySelector(".main-div").style.backgroundImage=`url(${bg2})`
      }
      else if(data.list[0].weather[0].main=="Rain"){
        document.querySelector(".main-div").style.backgroundImage=`url(${bg3})`
      }
    })
  return (
    <>
    <div className='cW'>
     <div className='leftSide'>
     <div >{Math.round(data.list[0].main.temp)}°C</div>
     <div  style={{marginTop:'1rem'}}>{Math.round(data.list[0].main.temp_kf)}°F</div>
     <div  style={{marginTop:"0.6rem"}}>{data.city.name},{data?.city.country}</div>
     </div>
     <div className='rightSide'>
     <div><img src={`https://openweathermap.org/img/w/${data.list[0].weather[0]?.icon}.png`} alt="" /></div>
     <div style={{marginTop:"0.1rem"}}>{data.list[0].weather[0].description}</div>
     <div style={{marginTop:"0.5rem"}}>Humidity : {data.list[0].main.humidity}</div>
     </div>
    </div>
    </>
  )
}

export default CurrentWeather