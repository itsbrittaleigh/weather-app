/* eslint-disable react/jsx-filename-extension */
import { shallow } from 'enzyme';
import React from 'react';
import Nav from '../../components/Nav';

describe('<Nav />', () => {
  test('renders without crashing', () => {
    shallow(<Nav />);
  });
});
