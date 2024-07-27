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


// pelas informações recebidas do console, vimos que as previsões para os próximos dias está em um array com 40 elementos, cada dia tem 6 elementos e como só queremos renderizar um por dia, vamos ter que armazenar esta informação e depois filtrá-la, primeiro passo é criar uma let(já que o resultado vai ser alterado) e depois, vamos usar o método for off, na variável criada(forecast) ela vai receber as informações vindas do of(info.list), sabendo que a data vem num formato de timestamp e vamos converter para a data que possamos usar, criando uma variável, e ela recebe o método new Date( que converte datas) e como parâmetro o forecast que agora recebe as informações da lista: forecast.dt que é o formato da data e assim multiplicamos por mil e .toLocaleDateString()...


//const nextFiveDays = Object.values(dayliForecast).slice(0,5), aqui transformamos em um array o valor do objeto e usamos o slice (0,5) para que seja enviado só os dos 5 dias posteriores
