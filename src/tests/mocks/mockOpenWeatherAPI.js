export const getWeatherForecastResponse = (responseObject = {}) => {
  const mockSuccessResponse = Object.create(responseObject);
  const mockJsonPromise = Promise.resolve(mockSuccessResponse);

  jest.spyOn(global, 'fetch').mockImplementation(() => mockJsonPromise);
};

export const cleanUpMockAPI = () => {
  global.fetch.mockClear();
};
