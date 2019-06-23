/* eslint-disable react/jsx-filename-extension */
import { shallow } from 'enzyme';
import React from 'react';
import Page from '../../components/Page';

describe('<Page /> component', () => {
  test('renders without crashing', () => {
    shallow(<Page />);
  });
});
