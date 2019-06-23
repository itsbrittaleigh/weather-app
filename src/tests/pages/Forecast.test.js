/* eslint-disable react/jsx-filename-extension */
import { shallow } from 'enzyme';
import React from 'react';
import Forecast from '../../pages/Forecast';

describe('<Forecast /> weather forecast page', () => {
  test('renders without crashing', () => {
    shallow(
      <Forecast
        weatherObject={{ list: [] }}
        error=""
        isLoading={false}
      />,
    );
  });
});
