/* eslint-disable react/jsx-filename-extension */
import { shallow } from 'enzyme';
import React from 'react';
import Current from '../../pages/Current';

describe('<Current /> current weather page', () => {
  test('renders without crashing', () => {
    shallow(
      <Current
        weatherObject={{
          main: {
            temp: 75,
          },
          name: 'Hamtramck',
        }}
        error=""
        isLoading={false}
      />,
    );
  });
});
