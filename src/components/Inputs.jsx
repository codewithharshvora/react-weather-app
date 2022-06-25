import React, { useState } from 'react';
import { Search, MapPin } from 'react-feather';

import classes from './Inputs.module.css';

const Inputs = ({ setQuery, setUnits }) => {
  const [city, setCity] = useState('null');

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({ lat, lon });
      });
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.searchContainer}>
        <input
          type="text"
          placeholder="Search for city..."
          onChange={(e) => setCity(e.target.value)}
          className={classes.inputBox}
        />
        <Search
          size={25}
          className={classes.searchIcon}
          onClick={() => setQuery({ q: city })}
        />
        <MapPin
          size={25}
          className={classes.searchIcon}
          onClick={handleLocationClick}
        />
      </div>
      <div className={classes.temperatureButtonContainer}>
        <button
          name="metric"
          className={classes.searchIcon}
          onClick={() => setUnits('metric')}
        >
          °C
        </button>
        <p className={classes.pipe}>|</p>
        <button
          name="imperial"
          className={classes.searchIcon}
          onClick={() => setUnits('imperial')}
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
