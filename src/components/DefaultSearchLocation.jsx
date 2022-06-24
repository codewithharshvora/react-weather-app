import React from 'react';

import classes from './DefaultSearchLocation.module.css';

const DefaultSearchLocation = () => {
  const cities = [
    {
      id: 1,
      title: 'Ahmedabad',
    },
    {
      id: 2,
      title: 'Mumbai',
    },
    {
      id: 3,
      title: 'Udaipur',
    },
    {
      id: 4,
      title: 'Delhi',
    },
  ];
  return (
    <div className={classes.root}>
      {cities.map((city) => {
        const { id, title } = city;
        return (
          <button key={id} className={classes.locationButton}>
            {title}
          </button>
        );
      })}
    </div>
  );
};

export default DefaultSearchLocation;
