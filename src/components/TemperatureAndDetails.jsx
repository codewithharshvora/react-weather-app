import React from 'react';
import {
  Circle,
  Thermometer,
  Droplet,
  Wind,
  Sunrise,
  Sunset,
  ArrowUp,
  ArrowDown,
} from 'react-feather';
import classes from './TemperatureAndDetails.module.css';

const TemperatureAndDetails = () => {
  return (
    <div className={classes.root}>
      <div className={classes.temperatureText}>
        <p>Clody</p>
      </div>

      <div className={classes.temperatureNumber}>
        <Circle size={35} color="darkorange" fill="darkorange" />
        <p className={classes.temperature}>34°</p>
        <div className={classes.feelLikeContainer}>
          <div className={classes.feelLike}>
            <Thermometer size={18} className="mr-1" />
            Real fell:<span className={classes.unit}>32°</span>
          </div>
          <div className={classes.feelLike}>
            <Droplet size={18} className="mr-1" />
            Humidity:<span className={classes.unit}>65%</span>
          </div>
          <div className={classes.feelLike}>
            <Wind size={18} className="mr-1" />
            Wind:<span className={classes.unit}>11 km/h</span>
          </div>
        </div>
      </div>

      <div className={classes.todayForcastContainer}>
        <Sunrise size={18} />
        <p className={classes.todayForcast}>
          Rise:<span className={classes.unit}>06:45 AM</span>
        </p>
        <p className="font-light">|</p>
        <Sunset size={18} />
        <p className={classes.todayForcast}>
          Set:<span className={classes.unit}>07:35 PM</span>
        </p>
        <p className="font-light">|</p>
        <ArrowUp size={18} />
        <p className={classes.todayForcast}>
          High:<span className={classes.unit}>45°</span>
        </p>
        <p className="font-light">|</p>
        <ArrowDown size={18} />
        <p className={classes.todayForcast}>
          Low:<span className={classes.unit}>37°</span>
        </p>
      </div>
    </div>
  );
};

export default TemperatureAndDetails;
