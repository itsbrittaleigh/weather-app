/* eslint-disable react/jsx-filename-extension */
import { shallow } from 'enzyme';
import React from 'react';
import App from '../App';

describe('<App /> component', () => {
  test('renders without crashing', () => {
    shallow(<App />);
  });
});
