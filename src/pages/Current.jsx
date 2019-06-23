import PropTypes from 'prop-types';
import React from 'react';
import Error from '../components/Error';
import LoadingState from '../components/LoadingState';
import PlaceholderImage from '../components/styles/PlaceholderImage';
import ObjectIsEmpty from '../utilities/ObjectIsEmpty';

const propTypes = {
  weatherObject: PropTypes.shape({
    main: PropTypes.shape({
      temp: PropTypes.number,
    }),
    name: PropTypes.string,
  }).isRequired,
  error: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const Current = ({ isLoading, error, weatherObject }) => {
  if (isLoading) return (<LoadingState />);
  if (error) return (<Error error={error} />);
  if (!ObjectIsEmpty(weatherObject)) {
    return (
      <p>{`It is currently ${Math.round(weatherObject.main.temp)}°F in ${weatherObject.name}.`}</p>
    );
  }
  return (<PlaceholderImage src="weather.png" alt="cloud with sun icon" />);
};

Current.propTypes = propTypes;

export default Current;
