import React, { Component } from 'react';
import './App.css';
import HomePage from './screens/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';

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
          <div className="full-page">
            <div className="header">
              <Header />
            </div>
            <div className="content">
              <Route exact path="/">
                <HomePage />
              </Route>
            </div>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
