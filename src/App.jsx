import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Current from './pages/Current';
import Forecast from './pages/Forecast';

const App = () => (
  <Router>
    <Route exact path="/" component={Current} />
    <Route path="/forecast" component={Forecast} />
  </Router>
);

export default App;
