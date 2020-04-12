import React, { Component } from 'react';
import './App.css';
import HomePage from './screens/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// const isMobile = window.innerWidth <= 500;
class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
