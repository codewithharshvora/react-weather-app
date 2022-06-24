import React from 'react';
import { Search, MapPin } from 'react-feather';

import classes from './Inputs.module.css';

const Inputs = () => {
  return (
    <div className={classes.root}>
      <div className={classes.searchContainer}>
        <input
          type="text"
          placeholder="Search for city..."
          className={classes.inputBox}
        />
        <Search size={25} className={classes.searchIcon} />
        <MapPin size={25} className={classes.searchIcon} />
      </div>
      <div className={classes.temperatureButtonContainer}>
        <button name="metric" className={classes.temperatureButton}>
          °C
        </button>
        <p className={classes.pipe}>|</p>
        <button name="imperial" className={classes.temperatureButton}>
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
