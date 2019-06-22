import React, { Component } from 'react';
import Page from '../components/Page';
import UserLocationForm from '../components/UserLocationForm';
import Wrapper from '../components/styles/Wrapper';
import services from '../services/WeatherForecast';

class Forecast extends Component {
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
            geolocationRequest={services.getWeatherForecastByGeolocation}
            postalCodeRequest={services.getWeatherForecastByPostalCode}
          />
          {hasWeather && weatherObject.list.map((period) => {
            const date = new Date(period.dt_txt);
            console.log(date);
            return (
              <div>
                <p>{`${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`}</p>
                <p>{`${date.getHours()}:00`}</p>
                <p>{`${Math.round(period.main.temp)}°F`}</p>
                <img
                  alt={period.weather[0].description}
                  src={`https://openweathermap.org/img/w/${period.weather[0].icon}.png`}
                />
              </div>
            );
          })}
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

export default Forecast;
