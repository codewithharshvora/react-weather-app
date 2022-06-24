import React from 'react';

import classes from './TimeAndLocation.module.css';

const TimeAndLocation = () => {
  return (
    <div className={classes.root}>
      <div className={classes.dateTimeContainer}>
        <div className={classes.dateTime}>
          Tuesday, 31 May 2022 | Lcal time: 12:46 PM
        </div>
      </div>
      <div className={classes.locationContainer}>
        <p className={classes.location}>Berlin, DE</p>
      </div>
    </div>
  );
};

export default TimeAndLocation;
