import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <ul>
    <li>
      <Link to="/">Current Weather</Link>
    </li>
    <li>
      <Link to="/forecast">Five Day Forecast</Link>
    </li>
  </ul>
);

export default Nav;
