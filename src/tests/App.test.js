/* eslint-disable react/jsx-filename-extension */
import { shallow } from 'enzyme';
import React from 'react';
import App from '../App';
import currentWeatherResponse from './constants/currentWeatherResponse';
import weatherForecastResponse from './constants/weatherForecastResponse';
import { getWeatherForecastResponse, cleanUpMockAPI } from './mocks/mockOpenWeatherAPI';

const defaultState = {
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

describe('<App /> component', () => {
  beforeEach(() => {
    getWeatherForecastResponse();
  });

  afterEach(() => {
    cleanUpMockAPI();
  });

  test('renders without crashing', () => {
    shallow(<App />);
  });

  test('default state of application', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.state()).toEqual(defaultState);
  });

  test('set postal code', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().setPostalCode('48212');

    // check that postal code updates
    expect(wrapper.state().postalCode).toEqual('48212');
    // but not anything else in the state
    expect(wrapper.state()).toEqual({ ...defaultState, postalCode: '48212' });
  });

  test('set geolocation coordinates & make fetch requests', () => {
    const position = {
      coords: {
        latitude: 42.3952,
        longitude: -83.0655,
      },
    };
    const wrapper = shallow(<App />);
    wrapper.instance().setGeolocationData(position);

    // check that longitude and latitude update
    expect(wrapper.state().latitude).toEqual(position.coords.latitude);
    expect(wrapper.state().longitude).toEqual(position.coords.longitude);
    // and that loading states are initiated as API request is made
    expect(wrapper.state().currentWeatherIsLoading).toEqual(true);
    expect(wrapper.state().weatherForecastIsLoading).toEqual(true);
    // but nothing else in the state is updated
    expect(wrapper.state()).toEqual({
      ...defaultState,
      currentWeatherIsLoading: true,
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      weatherForecastIsLoading: true,
    });
    expect(global.fetch).toHaveBeenCalledTimes(2);
    expect(global.fetch).toHaveBeenCalledWith(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&APPID=7ee78ce99d0ae6bb413efdea3a22e2cd&units=imperial`,
    );
    expect(global.fetch).toHaveBeenCalledWith(
      `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&APPID=7ee78ce99d0ae6bb413efdea3a22e2cd&units=imperial`,
    );
  });

  test('make postal code fetch requests', () => {
    const postalCode = '48212';
    const wrapper = shallow(<App />);

    wrapper.instance().setState({ postalCode });
    wrapper.update();
    wrapper.instance().getWeatherDataByPostalCode();

    expect(global.fetch).toHaveBeenCalledTimes(2);
    expect(global.fetch).toHaveBeenCalledWith(
      `https://api.openweathermap.org/data/2.5/weather?zip=${postalCode},us&APPID=7ee78ce99d0ae6bb413efdea3a22e2cd&units=imperial`,
    );
    expect(global.fetch).toHaveBeenCalledWith(
      `https://api.openweathermap.org/data/2.5/forecast?zip=${postalCode},us&APPID=7ee78ce99d0ae6bb413efdea3a22e2cd&units=imperial`,
    );
  });

  test('get geolocation data state updaters', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().getWeatherDataByGeolocation();

    // check that loading state updates
    expect(wrapper.state().currentWeatherIsLoading).toEqual(true);
    expect(wrapper.state().weatherForecastIsLoading).toEqual(true);
    // but no other state properties update
    expect(wrapper.state()).toEqual({
      ...defaultState,
      currentWeatherIsLoading: true,
      weatherForecastIsLoading: true,
    });
  });

  test('set current weather callback updates state', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().setCurrentWeather(currentWeatherResponse);

    // check that state updates properly
    expect(wrapper.state().currentWeatherIsLoading).toEqual(false);
    expect(wrapper.state().currentWeatherObject).toEqual(currentWeatherResponse);
    expect(wrapper.state().currentWeatherError).toEqual('');
    // but that no other state properties are updated
    expect(wrapper.state()).toEqual({
      ...defaultState,
      currentWeatherIsLoading: false,
      currentWeatherObject: currentWeatherResponse,
      currentWeatherError: '',
    });
  });

  test('set weather forecast callback updates state', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().setWeatherForecast(weatherForecastResponse);

    // check that state updates properly
    expect(wrapper.state().weatherForecastIsLoading).toEqual(false);
    expect(wrapper.state().weatherForecastObject).toEqual(weatherForecastResponse);
    expect(wrapper.state().weatherForecastError).toEqual('');
    // but that no other state properties are updated
    expect(wrapper.state()).toEqual({
      ...defaultState,
      weatherForecastIsLoading: false,
      weatherForecastObject: weatherForecastResponse,
      weatherForecastError: '',
    });
  });

  test('current weather failure updates state', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().setCurrentWeatherError('There was an error processing your request');

    // check that state updates properly
    expect(wrapper.state().currentWeatherIsLoading).toEqual(false);
    expect(wrapper.state().currentWeatherError).toEqual('There was an error processing your request');
    expect(wrapper.state().currentWeatherObject).toEqual({});
    // but that no other state properties are updated
    expect(wrapper.state()).toEqual({
      ...defaultState,
      currentWeatherIsLoading: false,
      currentWeatherError: 'There was an error processing your request',
      currentWeatherObject: {},
    });
  });

  test('weather forecast failure updates state', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().setWeatherForecastError('There was an error processing your request');

    // check that state updates properly
    expect(wrapper.state().weatherForecastIsLoading).toEqual(false);
    expect(wrapper.state().weatherForecastError).toEqual('There was an error processing your request');
    expect(wrapper.state().weatherForecastObject).toEqual({});
    // but that no other state properties are updated
    expect(wrapper.state()).toEqual({
      ...defaultState,
      weatherForecastIsLoading: false,
      weatherForecastError: 'There was an error processing your request',
      weatherForecastObject: {},
    });
  });
});
