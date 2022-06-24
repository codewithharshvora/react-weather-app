import './App.css';
import DefaultSearchLocation from './components/DefaultSearchLocation';
import Forcast from './components/Forcast';
import Inputs from './components/Inputs';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import TimeAndLocation from './components/TimeAndLocation';

function App() {
  return (
    <div className="root">
      <DefaultSearchLocation />
      <Inputs />

      <TimeAndLocation />

      <TemperatureAndDetails />

      <Forcast title="hourly forcast" />
      <Forcast title="daily forcast" />
    </div>
  );
}

export default App;
