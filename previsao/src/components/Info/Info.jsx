import React from 'react'
import './Info.css'
const Info = ({weather}) => {
  console.log(weather)
  if (!weather || !weather.weather || !weather.weather[0]) {
    return null; 
  }
    
  return (
    <div className='container'>
      <div className="infos">
        <h2>{weather.name}</h2>
      </div>
      <div className='image'>
         <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png` } alt="{weather.weather[0].description}" />
         <p>{Math.round(weather.main.temp)}ºC</p>
      </div>
      <div className="description">
         <p>{weather.weather[0].description}</p>
      </div>
      <div className='section'>
         <p>Sensação térmica:{Math.round(weather.main.feels_like)}ºC</p>
         <p>Umidade:{weather.main.humidity}%</p>
         <p>Pressão:{weather.main.pressure} hPa</p>
         <p>Min:{Math.round(weather.main.temp_min)}ºC/ Max:{Math.round(weather.main.temp_max)}ºC</p>
      </div>
      
    </div>
  )
}

export default Info

