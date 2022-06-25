import { DateTime } from 'luxon';

const API_KEY = '24d1808b0d740d3a525ba2726f3ce791';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';
const ICON_URL = 'https://openweathermap.org/img/wn/';

const openWeatherData = async (infoType, searchParams) => {
  const url = new URL(BASE_URL + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return await fetch(url)
    .then((res) => res.json())
    .catch((e) => console.error(e.message));
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;
  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    weather,
    speed,
    details: weather[0].main,
    icon: weather[0].icon,
  };
};

const formatForcastWeather = (data) => {
  let { timezone, hourly, daily } = data;
  daily = daily.slice(1, 6).map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, 'ccc'),
      temp: d.temp.day,
      icon: d.weather[0].icon,
    };
  });

  hourly = hourly.slice(1, 6).map((d) => {
    return {
      title: formatToLocalTime(d.dt, timezone, 'hh:mm a'),
      temp: d.temp,
      icon: d.weather[0].icon,
    };
  });

  return { timezone, daily, hourly };
};

export const formatToLocalTime = (
  seconds,
  timeZone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => {
  return DateTime.fromSeconds(seconds).setZone(timeZone).toFormat(format);
};

export const iconUrlFromCode = (code) => {
  return `${ICON_URL}${code}@2x.png`;
};

export const getWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await openWeatherData(
    'weather',
    searchParams
  ).then((data) => formatCurrentWeather(data));

  const { lat, lon } = formattedCurrentWeather;

  const formattedForcastWeather = await openWeatherData('onecall', {
    lat,
    lon,
    exclude: 'current, minutely, alerts',
    units: searchParams.units,
  }).then((data) => formatForcastWeather(data));

  return { ...formattedCurrentWeather, ...formattedForcastWeather };
};
