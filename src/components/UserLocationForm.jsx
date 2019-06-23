import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Button from './styles/Button';
import FormField from './styles/FormField';
import FormStyles from './styles/Form';
import Input from './styles/Input';
import PostalCodeIsValid from '../utilities/PostalCodeIsValid';

const propTypes = {
  postalCode: PropTypes.string.isRequired,
  setPostalCode: PropTypes.func.isRequired,
  setGeolocationData: PropTypes.func.isRequired,
  submitPostalCode: PropTypes.func.isRequired,
};

class UserLocationForm extends Component {
  handleGeolocationRequest = () => {
    const { setGeolocationData } = this.props;

    navigator.geolocation.getCurrentPosition(position => setGeolocationData(position));
  }

  handleSubmit = (event) => {
    const { submitPostalCode } = this.props;

    event.preventDefault();
    submitPostalCode();
  }

  handleUpdate = (event) => {
    const { setPostalCode } = this.props;
    setPostalCode(event.target.value);
  }

  render() {
    const { postalCode } = this.props;

    return (
      <FormStyles onSubmit={this.handleSubmit}>
        <FormField>
          <Input
            name="postalCode"
            onChange={this.handleUpdate}
            placeholder="Postal code"
            type="tel"
            value={postalCode}
          />
          {('geolocation' in navigator) && (
            <span
              className="Label--alternate"
              onKeyPress={this.handleGeolocationRequest}
              onClick={this.handleGeolocationRequest}
              role="button"
              tabIndex="0"
            >
              Or use current location
            </span>
          )}
        </FormField>
        <Button
          className={!PostalCodeIsValid(postalCode) ? 'is-disabled' : ''}
          disabled={!PostalCodeIsValid(postalCode)}
        >
          Submit
        </Button>
      </FormStyles>
    );
  }
}

UserLocationForm.propTypes = propTypes;

export default UserLocationForm;
