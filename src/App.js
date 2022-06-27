import { useEffect, useState } from 'react';
import { MutatingDots } from 'react-loader-spinner';
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
  const [isLoading, setIsLoading] = useState(true);

  const fetchWeather = async () => {
    setIsLoading(true);
    await getWeatherData({ ...query, units }).then((data) => setWeather(data));
    setIsLoading(false);
  };

  useEffect(() => {
    fetchWeather();
  }, [query, units]);

  const backgroud = () => {
    if (!weather) return 'backgroundYellow';

    const threshold = units === 'metric' ? 25 : 77;

    return weather.temp <= threshold ? 'backgroundBlue' : 'backgroundYellow';
  };

  return (
    <div className={`root ${backgroud()}`}>
      <DefaultSearchLocation setQuery={setQuery} />
      <Inputs setQuery={setQuery} setUnits={setUnits} />

      {isLoading && (
        <div className="flex justify-center">
          <MutatingDots
            height="100"
            width="100"
            color="orange"
            ariaLabel="loading"
          />
        </div>
      )}

      {weather && !isLoading && (
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
