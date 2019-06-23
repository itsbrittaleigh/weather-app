/* eslint-disable react/jsx-filename-extension */
import { shallow } from 'enzyme';
import React from 'react';
import UserLocationForm from '../../components/UserLocationForm';

describe('<UserLocationForm /> component', () => {
  test('renders without crashing', () => {
    shallow(
      <UserLocationForm
        postalCode="48212"
        setPostalCode={() => true}
        setGeolocationData={() => true}
        submitPostalCode={() => true}
      />,
    );
  });
});
