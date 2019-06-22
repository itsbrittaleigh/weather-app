import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Current from './pages/Current';

const App = () => (
  <Router>
    <Route exact path="/" component={Current} />
  </Router>
);

export default App;
