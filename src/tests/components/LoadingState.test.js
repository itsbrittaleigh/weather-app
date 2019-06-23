/* eslint-disable react/jsx-filename-extension */
import { shallow } from 'enzyme';
import React from 'react';
import LoadingState from '../../components/LoadingState';

describe('<LoadingState /> component', () => {
  test('renders without crashing', () => {
    shallow(<LoadingState />);
  });
});
