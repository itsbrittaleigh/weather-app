import PropTypes from 'prop-types';
import React from 'react';
import Error from '../components/Error';
import LoadingState from '../components/LoadingState';
import Card from '../components/styles/Card';
import PlaceholderImage from '../components/styles/PlaceholderImage';
import ObjectIsEmpty from '../utilities/ObjectIsEmpty';

const propTypes = {
  weatherObject: PropTypes.shape({
    list: PropTypes.array,
  }).isRequired,
  error: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const Forecast = ({ isLoading, error, weatherObject }) => {
  if (isLoading) return (<LoadingState />);
  if (error) return (<Error error={error} />);
  if (!ObjectIsEmpty(weatherObject)) {
    return weatherObject.list.map((period) => {
      const date = new Date(period.dt_txt);
      return (
        <Card>
          <div>
            <p>{`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`}</p>
            <p>{`${date.getHours()}:00`}</p>
          </div>
          <p>{`${Math.round(period.main.temp)}°F`}</p>
          <img
            alt={period.weather[0].description}
            src={`https://openweathermap.org/img/w/${period.weather[0].icon}.png`}
          />
        </Card>
      );
    });
  }
  return (<PlaceholderImage src="weather.png" alt="cloud with sun icon" />);
};

Forecast.propTypes = propTypes;

export default Forecast;
