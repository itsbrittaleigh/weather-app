import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Current from './pages/Current';
import Forecast from './pages/Forecast';
import Error from './components/Error';
import Nav from './components/Nav';
import Page from './components/Page';
import UserLocationForm from './components/UserLocationForm';
import Wrapper from './components/styles/Wrapper';
import { CurrentWeather, WeatherForecast } from './services';
import PostalCodeIsValid from './utilities/PostalCodeIsValid';

class App extends Component {
  state = {
    currentWeatherIsLoading: false,
    currentWeatherError: '',
    currentWeatherObject: {},
    weatherForecastIsLoading: false,
    latitude: '',
    longitude: '',
    postalCode: '',
    postalCodeIsInvalid: false,
    weatherForecastError: '',
    weatherForecastObject: {},
  };

  setPostalCode = (postalCode) => {
    this.setState({
      postalCode: postalCode.toString(),
    });
  }

  setGeolocationData = (position) => {
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    }, () => this.getWeatherDataByGeolocation());
  }

  getWeatherDataByGeolocation = () => {
    const {
      latitude,
      longitude,
    } = this.state;

    this.setState({
      currentWeatherIsLoading: true,
      weatherForecastIsLoading: true,
    });

    CurrentWeather.getCurrentWeatherByGeolocation(
      latitude,
      longitude,
      this.setCurrentWeather,
      this.setCurrentWeatherError,
    );

    WeatherForecast.getWeatherForecastByGeolocation(
      latitude,
      longitude,
      this.setWeatherForecast,
      this.setWeatherForecastError,
    );
  }

  getWeatherDataByPostalCode = () => {
    const { postalCode } = this.state;

    if (PostalCodeIsValid(postalCode)) {
      this.setState({
        currentWeatherIsLoading: true,
        postalCodeIsInvalid: false,
        weatherForecastIsLoading: true,
      });

      CurrentWeather.getCurrentWeatherByPostalCode(
        postalCode,
        this.setCurrentWeather,
        this.setCurrentWeatherError,
      );

      WeatherForecast.getWeatherForecastByPostalCode(
        postalCode,
        this.setWeatherForecast,
        this.setWeatherForecastError,
      );
    } else {
      this.setState({
        postalCodeIsInvalid: true,
      });
    }
  }

  setCurrentWeather = (weatherObject) => {
    this.setState({
      currentWeatherIsLoading: false,
      currentWeatherError: '',
      currentWeatherObject: weatherObject,
    });
  }

  setCurrentWeatherError = (error) => {
    this.setState({
      currentWeatherIsLoading: false,
      currentWeatherError: error,
      currentWeatherObject: {},
    });
  }

  setWeatherForecast = (weatherObject) => {
    this.setState({
      weatherForecastIsLoading: false,
      weatherForecastError: '',
      weatherForecastObject: weatherObject,
    });
  }

  setWeatherForecastError = (error) => {
    this.setState({
      weatherForecastIsLoading: false,
      weatherForecastError: error,
      weatherForecastObject: {},
    });
  }

  render() {
    const {
      currentWeatherError,
      currentWeatherObject,
      currentWeatherIsLoading,
      weatherForecastIsLoading,
      postalCode,
      postalCodeIsInvalid,
      weatherForecastError,
      weatherForecastObject,
    } = this.state;

    return (
      <Router>
        <Page>
          <Wrapper>
            <p>Input your postal code (US) or use your current location to view the weather.</p>
            <UserLocationForm
              postalCode={postalCode}
              setGeolocationData={this.setGeolocationData}
              setPostalCode={this.setPostalCode}
              submitPostalCode={this.getWeatherDataByPostalCode}
            />
            <Nav />
            {postalCodeIsInvalid && (
              <Error error="Please enter a valid postal code." />
            )}
            <Route
              exact
              path="/"
              render={() => (
                <Current
                  isLoading={currentWeatherIsLoading}
                  error={currentWeatherError}
                  weatherObject={currentWeatherObject}
                />
              )}
            />
            <Route
              path="/forecast"
              render={() => (
                <Forecast
                  isLoading={weatherForecastIsLoading}
                  error={weatherForecastError}
                  weatherObject={weatherForecastObject}
                />
              )}
            />
          </Wrapper>
        </Page>
      </Router>
    );
  }
}

export default App;
