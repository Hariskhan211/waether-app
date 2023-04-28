import React, { useEffect, useState } from 'react';
import axios from "axios"
import bg from "./grassland-gc9c5d50e3_1920.jpg"
import bg2 from "./desert-g8a3e1a5ba_1920.jpg"
const Searchbox = () => {
    const [search,setSearch]=useState(null)
    const [city,setCity]=useState(null)
    const [clouds,setClouds]=useState(null)
    const [name,setName]=useState(null)
    const [temp,settemp]=useState(null)
    const handleName=(e)=>{
        setName(e.target.value)
    }
    const handleChange=()=>{
        setSearch(name)
    }

    useEffect(()=>{
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=f0321ed4a8303cf7e15ab1938155ab04&units=metric`)
      .then((response)=>{
        console.log(response)
        if(response.data.weather[0].main=="Clouds"){
            document.querySelector(".main-box")
            .style.backgroundImage=`url(${bg})`
        } 
        else if(response.data.weather[0].main=="Clear"){
           document.querySelector(".main-box")
           .style.backgroundImage=`url(${bg2})`
        }
        setCity(response.data.name)
        setClouds(response.data.weather[0].description)
        settemp(response.data.main.temp)
      }
      )
    
    })
  return (
    <>
    <div className="main-box">
    <div style={{color:"white",textAlign:"center"}} id="mainBox">
    <h1 className="headingh1">Weather App</h1>
    <input type="search" name="" id="" onChange={handleName} className="Input"/>
    <button onClick={handleChange} className="btn">Search </button>
    <div className='boxes'>
     {city ? <h2 className="headings">City : {city}</h2> : null}
     {clouds ? <h2 className="headings">Weather :{clouds}</h2>:null}
    {temp ?  <h2 className="headings">Temp :{temp}*C</h2>:null}
    </div>

    </div>
    </div>
    
    
    </>
  )
}

export default Searchbox