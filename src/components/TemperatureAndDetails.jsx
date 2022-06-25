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
import { formatToLocalTime, iconUrlFromCode } from '../services/weather';
import classes from './TemperatureAndDetails.module.css';

const TemperatureAndDetails = ({ weather }) => {
  const {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    humidity,
    speed,
    feels_like,
    timezone,
  } = weather;

  return (
    <div className={classes.root}>
      <div className={classes.temperatureText}>
        <p>{details}</p>
      </div>

      <div className={classes.temperatureNumber}>
        <img src={iconUrlFromCode(icon)} alt={details} className="w-20" />
        <p className={classes.temperature}>{temp.toFixed()}°</p>
        <div className={classes.feelLikeContainer}>
          <div className={classes.feelLike}>
            <Thermometer size={18} className="mr-1" />
            Real fell:
            <span className={classes.unit}>{feels_like.toFixed()}°</span>
          </div>
          <div className={classes.feelLike}>
            <Droplet size={18} className="mr-1" />
            Humidity:<span className={classes.unit}>{humidity.toFixed()}%</span>
          </div>
          <div className={classes.feelLike}>
            <Wind size={18} className="mr-1" />
            Wind:<span className={classes.unit}>{speed.toFixed()} km/h</span>
          </div>
        </div>
      </div>

      <div className={classes.todayForcastContainer}>
        <Sunrise size={18} />
        <p className={classes.todayForcast}>
          Rise:
          <span className={classes.unit}>
            {formatToLocalTime(sunrise, timezone, 'hh:mm a')}
          </span>
        </p>
        <p className="font-light">|</p>
        <Sunset size={18} />
        <p className={classes.todayForcast}>
          Set:
          <span className={classes.unit}>
            {formatToLocalTime(sunset, timezone, 'hh:mm a')}
          </span>
        </p>
        <p className="font-light">|</p>
        <ArrowUp size={18} />
        <p className={classes.todayForcast}>
          High:<span className={classes.unit}>{temp_max.toFixed()}°</span>
        </p>
        <p className="font-light">|</p>
        <ArrowDown size={18} />
        <p className={classes.todayForcast}>
          Low:<span className={classes.unit}>{temp_min.toFixed()}°</span>
        </p>
      </div>
    </div>
  );
};

export default TemperatureAndDetails;
