/* eslint-disable react/jsx-filename-extension */
import { shallow } from 'enzyme';
import React from 'react';
import Error from '../../components/Error';

describe('<Error /> component', () => {
  test('renders without crashing', () => {
    shallow(<Error error="I am an error message." />);
  });
});
