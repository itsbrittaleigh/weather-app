import PropTypes from 'prop-types';
import React from 'react';
import ErrorStyles from './styles/Error';

const propTypes = {
  error: PropTypes.string.isRequired,
};

const Error = ({ error }) => (
  <ErrorStyles>
    {error}
  </ErrorStyles>
);

Error.propTypes = propTypes;

export default Error;
