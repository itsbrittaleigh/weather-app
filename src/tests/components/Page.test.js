/* eslint-disable react/jsx-filename-extension */
import { mount, shallow } from 'enzyme';
import React from 'react';
import Page from '../../components/Page';

describe('<Page /> component', () => {
  test('renders without crashing', () => {
    shallow(<Page />);
  });

  test('renders default children', () => {
    const wrapper = mount(<Page />);

    // component name for GlobalStyle is different than exported name
    expect(wrapper.find('GlobalStyleComponent')).toHaveLength(1);
    expect(wrapper.find('ThemeProvider')).toHaveLength(1);
    expect(wrapper.find('Footer')).toHaveLength(1);
  });

  test('renders passed in children', () => {
    const testChildren = [
      '<div className="div1" />',
      '<div className="div2" />',
      '<div className="div3" />',
    ];
    const wrapper = mount(<Page>{testChildren}</Page>);

    expect(wrapper.props().children).toHaveLength(3);
  });
});
