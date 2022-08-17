import styles from "./WeatherMainInfo.module.css";

function WeatherMainInfo({ weather }) {
  return (
    <div className={styles.mainInfo}>
      <div className={styles.city}>{weather?.location.name}</div>
      <div className={styles.country}>{weather?.location.country}</div>
      <div className={styles.row}>
        <div>
          <img
            src={`https:${weather?.current.condition.icon}`}
            width="128"
            alt={weather?.current.condition.text}
          />
        </div>
        <div className={styles.weatherConditions}>
            <div className={styles.condition}>{weather?.current.condition.text}</div>
            <div className={styles.current}> {weather?.current.temp_c}°C</div>
        </div>
      </div>
      <iframe
        title="mapa"
        src={`https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!0673099901d358573.8!2d${weather?.location.lon}2!3d${weather?.location.lat}6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smilan!5e0!3m2!1ses-419!2sar!4v1660752719954!5m2!1ses-419!2sar`}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default WeatherMainInfo;
