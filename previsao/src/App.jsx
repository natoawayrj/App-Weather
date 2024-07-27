import { useState, useRef, useEffect } from 'react'
import axios from 'axios'
import Info from './components/Info/Info'
import './App.css'
import InfoFive from './components/InfoFive/InfoFive'

function App() {
  const [weather, setWeather] = useState({})
  const [fiveDays, setFiveDays]= useState()
  const input = useRef()

  async function pegarInput(){
    const key = '42e960ba943d878ca1598c18dcc278c7'
    const city = input.current.value  

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
    const urlForFiveDays = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`

    const weather = await axios.get(url)
    const info = await axios.get(urlForFiveDays)


    setWeather(weather.data)
    setFiveDays(info.data)
    
  }

  return ( 
    <div className='body'>
      <h1>Previsão do tempo</h1>
      <div className='pesquisa'>
         <input ref={input} type="text"  placeholder='Digite o local:'/>
         <button onClick={pegarInput}>Pesquisar</button>
      </div>
      {weather && <Info weather={weather}/>}
      {fiveDays && <InfoFive info={fiveDays}/>}
    </div>
  )
}

export default App
//no useState o setWeather é a variável weather que já recebeu o que foi requisitado da API, passamos como props(desta vez deu o mesmo nome) a variável weather para o componente Info que vai renderizar algumas informações que vieram da API