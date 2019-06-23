import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import NavStyles from './styles/Nav';

const propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

const Nav = ({ location }) => (
  <NavStyles>
    <ul>
      {location.pathname !== '/' && (
        <li>
          <Link to="/">View current weather &rarr;</Link>
        </li>
      )}
      {location.pathname !== '/forecast' && (
        <li>
          <Link to="/forecast">View five day forecast &rarr;</Link>
        </li>
      )}
    </ul>
  </NavStyles>
);

Nav.propTypes = propTypes;

export default withRouter(Nav);
