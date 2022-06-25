import React from 'react';
import { Circle } from 'react-feather';
import { iconUrlFromCode } from '../services/weather';

import classes from './Forcast.module.css';

const Forcast = ({ title, weather }) => {
  const forcastReport = weather.map((data, index) => {
    const { title, icon, temp } = data;
    return (
      <div key={index} className={classes.hourlyForcast}>
        <p className={classes.time}>{title}</p>
        <img src={iconUrlFromCode(icon)} className="w-10" />
        <p className={classes.temperature}>{temp.toFixed()}°</p>
      </div>
    );
  });

  return (
    <div className={classes.root}>
      <div className={classes.heading}>
        <p>{title}</p>
      </div>
      <hr className="my-2" />
      <div className={classes.forcastContainer}>{forcastReport}</div>
    </div>
  );
};

export default Forcast;
