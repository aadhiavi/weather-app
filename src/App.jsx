import React, { useEffect, useState } from 'react'
import TopButtons from './Components/TopButtons'
import Inputs from './Components/Inputs'
import TimeAndLocation from './Components/TimeAndLocation'
import TemAndDetails from './Components/TemAndDetails'
import Forecast from './Components/Forecast'
import getFormattedWeatherData from './Services/WeatherService'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WeatherWarning from './Components/Warning'

function capitalizeFirstLetter(string){
   return string.charAt(0).toUpperCase() + string.slice(1);
}


const App = () => {
  const [query, setQuery] = useState({ q: 'vijayawada' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null)

  const getWeather = async () => {
    const cityName = query.q ? query.q : 'current location';
    toast.info(`Fetching weather data for ${capitalizeFirstLetter(cityName)}`)

    await getFormattedWeatherData({ ...query, units }).then((data) => {
      toast.success(`Fetched weather data for ${data.name},${data.country}`)
      setWeather(data)
    });
    console.log(data);
  };

  useEffect(() => { getWeather() }, [query, units]);

  const formatBackground = () => {
    if (!weather) return 'from-cyan-600 to-blue-700'
    const threshold = units === 'metric' ? 20 : 60
    if (weather.temp <= threshold) return "from-cyan-600 to-blue-700"
    return 'from-yellow-600 to-orange-700             '
  }

  return (
    <div className={`mx-auto max-w-screen-2xl py-5 px-3 sm:px-10 md:px-10 lg:px-14 xl:px-32p bg-gradient-to-br shadow-xl shadow-gray-400 ${formatBackground()}`}>
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} setUnits={setUnits} />
      {
        weather && (
          <>
            <TimeAndLocation weather={weather} />
            <TemAndDetails weather={weather} units={units} />
            <Forecast title='3 hour step forecast' data={weather.hourly} />
            <Forecast title='daily forecast' data={weather.daily} />
            <WeatherWarning weather={weather}/>
          </>
        )
      }
      <ToastContainer autoClose={2500} hideProgressBar={true} theme='colored' />
    </div>
  )
}

export default App;
