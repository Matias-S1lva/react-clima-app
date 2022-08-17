import { useState } from "react";
import styles from './WeatherForm.module.css'

function WeatherForm({onChangeCity}) {
  const [city, setCity] = useState("");

  function handleSubmit(e){
    e.preventDefault()

    onChangeCity(city)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input
      className={styles.input}
        type="text"
        onChange={
          ( (e) => {
            const value = e.target.value;
            value !== "" ? setCity(value) : console.log("nada");
          })
        }
      ></input>
    </form>
  );
}

export default WeatherForm;
