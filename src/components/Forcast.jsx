import React from 'react';
import { Circle } from 'react-feather';

import classes from './Forcast.module.css';

const Forcast = ({ title }) => {
  return (
    <div className={classes.root}>
      <div className={classes.heading}>
        <p>{title}</p>
      </div>
      <hr className="my-2" />
      <div className={classes.forcastContainer}>
        <HourlyForcast />
        <HourlyForcast />
        <HourlyForcast />
        <HourlyForcast />
        <HourlyForcast />
      </div>
    </div>
  );
};

const HourlyForcast = () => {
  return (
    <div className={classes.hourlyForcast}>
      <p className={classes.time}>04:30 PM</p>
      <Circle size={20} color="darkorange" fill="darkorange" className="my-1" />
      <p className={classes.temperature}>22°</p>
    </div>
  );
};

export default Forcast;
