/* eslint-disable react/jsx-filename-extension */
import { shallow } from 'enzyme';
import React from 'react';
import Footer from '../../components/Footer';

describe('<Footer /> component', () => {
  test('renders without crashing', () => {
    shallow(<Footer />);
  });
});
