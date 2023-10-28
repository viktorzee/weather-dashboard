import useWeather  from "../hooks/useWeather";
import WeatherContext from "../context/Weather.Context";



const MainPanel = () => {
   const {
     isMetric,
     weatherData,
     nextDaysWeatherData,
     setWeatherData,
     setNextDaysWeatherData,
     locationRef,
   } = useWeather();

  const windSpeed = Math.round(weatherData?.wind?.speed || 0);
  const humidity = weatherData?.main?.humidity;
  const visibility = weatherData?.visibility;
  const pressure = weatherData?.main?.pressure;

  const windSpeedUnit = isMetric ? "m/s" : "mph";

  return (
      <WeatherContext.Provider
        value={{
          weatherData,
          nextDaysWeatherData,
          setWeatherData,
          setNextDaysWeatherData,
          isMetric,
          locationRef,
        }}
      >
       
      </WeatherContext.Provider>
  );
};

export default MainPanel;
