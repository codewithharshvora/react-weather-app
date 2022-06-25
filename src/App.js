import { useEffect, useState } from 'react';
import './App.css';
import DefaultSearchLocation from './components/DefaultSearchLocation';
import Forcast from './components/Forcast';
import Inputs from './components/Inputs';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import TimeAndLocation from './components/TimeAndLocation';
import { getWeatherData } from './services/weather';

function App() {
  const [query, setQuery] = useState({ q: 'ahmedabad' });
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    await getWeatherData({ ...query, units }).then((data) => setWeather(data));
  };

  useEffect(() => {
    fetchWeather();
  }, [query, units]);

  const backgroud = () => {
    if (!weather) return 'backgroundBlue';

    const threshold = units === 'metric' ? 20 : 68;

    return weather.temp <= threshold ? 'backgroundBlue' : 'backgroundYellow';
  };

  return (
    <div className={`root ${backgroud()}`}>
      <DefaultSearchLocation setQuery={setQuery} />
      <Inputs setQuery={setQuery} setUnits={setUnits} />

      {weather && (
        <>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />
          <Forcast title="hourly forcast" weather={weather.hourly} />
          <Forcast title="daily forcast" weather={weather.daily} />
        </>
      )}
    </div>
  );
}

export default App;
