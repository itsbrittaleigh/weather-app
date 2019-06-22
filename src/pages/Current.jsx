import React, { Component } from 'react';
import Page from '../components/Page';
import UserLocationForm from '../components/UserLocationForm';
import Wrapper from '../components/styles/Wrapper';

class Current extends Component {
  state = {
    error: '',
    hasError: false,
    hasWeather: false,
    weatherObject: {},
  };

  displayError = (error) => {
    this.setState({
      error,
      hasError: true,
      hasWeather: false,
      weatherObject: {},
    });
  }

  displayWeather = (weatherObject) => {
    this.setState({
      error: '',
      hasError: false,
      hasWeather: true,
      weatherObject,
    });
  }

  render() {
    const {
      error,
      hasError,
      hasWeather,
      weatherObject,
    } = this.state;

    return (
      <Page>
        <Wrapper>
          <UserLocationForm
            displayError={this.displayError}
            displayWeather={this.displayWeather}
          />
          {hasWeather && (
            <p>{`It is currently ${Math.round(weatherObject.main.temp)}°F in ${weatherObject.name}.`}</p>
          )}
          {hasError && (
            <p>
              There was an error:
              {error}
            </p>
          )}
        </Wrapper>
      </Page>
    );
  }
}

export default Current;
