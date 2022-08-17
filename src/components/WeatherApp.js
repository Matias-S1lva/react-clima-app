import { useState,useEffect } from "react";
import WeatherForm from "./WeatherForm";
import WeatherMainInfo from './WeatherMainInfo'
import styles from './WeatherApp.module.css'
import Loading from "./Loading";

function WeatherApp() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    loadInfo()
  }, [])
  
  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ''}`

  }, [weather])
  

  async function loadInfo(city = "argentina") {
    try {
        const request = await fetch(`${process.env.REACT_APP_URL}&key=${process.env.REACT_APP_KEY}&q=${city}`)

        const json = await request.json()
        console.log(json);
        setWeather(json)
    } catch (error) {
        console.error(error);
    }
  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (
    <div className={styles.weatherContainer}>
      <WeatherForm onChangeCity={handleChangeCity}/>
      {weather ?
      <WeatherMainInfo weather={weather}/>
        :
        <Loading/>
       }
    </div>
  );
}

export default WeatherApp;
