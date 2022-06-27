import React, { useCallback } from 'react';

import classes from './DefaultSearchLocation.module.css';

const DefaultSearchLocation = ({ setQuery }) => {
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
      title: 'Delhi',
    },
    {
      id: 4,
      title: 'Udaipur',
    },
    {
      id: 5,
      title: 'Shimla',
    },
  ];

  const handleClick = useCallback((e) => {
    setQuery({ q: e.target.innerText });
  });

  return (
    <div className={classes.root}>
      {cities.map((city) => {
        const { id, title } = city;
        return (
          <button
            key={id}
            className={classes.locationButton}
            onClick={handleClick}
          >
            {title}
          </button>
        );
      })}
    </div>
  );
};

export default DefaultSearchLocation;
