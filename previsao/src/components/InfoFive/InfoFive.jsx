import React from 'react'
import './InfoFive.css'

const InfoFive = ({info}) => {
    console.log(info)

    let dayliForecast = {}

    for(let forecast of info.list ){
      const date = new Date(forecast.dt * 1000).toLocaleDateString()
       if(!dayliForecast[date]){
        dayliForecast[date] = forecast
       }
    }
    const nextFiveDays = Object.values(dayliForecast).slice(1,6)
    console.log(nextFiveDays)

    const converter = (dia)=>{
      const date = new Date(dia *1000).toLocaleDateString('pt-Br', {weekday: 'long',day: '2-digit'})
      return date
    }
  return (
    <div className='tempo'>
      <h2>Previsão para os próximos dias.</h2>
      <div className="itens">
         {nextFiveDays.map(dias=>(
        <div className="card" key={dias.dt}>
          <p>{converter(dias.dt)}</p>
          <img src={`http://openweathermap.org/img/wn/${dias.weather[0].icon}.png`} alt="" />
          <p className='temp'>Min:{Math.round(dias.main.temp_min)}ºC/ Max:{Math.round(dias.main.temp_max)}ºC</p>
          <p className='description'>{dias.weather[0].description}</p>

        </div>
         ))}
      </div>
    </div>
  )
}

export default InfoFive

