import React from 'react';
import { formatToLocalTime } from '../services/weather';

import classes from './TimeAndLocation.module.css';

const TimeAndLocation = ({ weather }) => {
  const { dt, timeZone, name, country } = weather;

  return (
    <div className={classes.root}>
      <div className={classes.dateTimeContainer}>
        <div className={classes.dateTime}>
          {formatToLocalTime(dt, timeZone)}
        </div>
      </div>
      <div className={classes.locationContainer}>
        <p className={classes.location}>{`${name}, ${country}`}</p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
