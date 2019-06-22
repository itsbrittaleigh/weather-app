const apiKey = '7ee78ce99d0ae6bb413efdea3a22e2cd';

class WeatherForecast {
  static getWeatherForecastByPostalCode(postalCode, successCB = () => {}, failureCB = () => {}) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${postalCode},us&APPID=${apiKey}&units=imperial`)
      .then(response => response.json())
      .then(data => successCB(data))
      .catch(error => failureCB(error));
  }

  static getWeatherForecastByGeolocation(
    latitude,
    longitude,
    successCB = () => {},
    failureCB = () => {},
  ) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&APPID=${apiKey}&units=imperial`)
      .then(response => response.json())
      .then(data => successCB(data))
      .catch(error => failureCB(error));
  }
}

export default WeatherForecast;
