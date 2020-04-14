import './App.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';

import HomePage from './screens/home';
import ResumePage from './screens/resume';
import MobileProjectsPage from './screens/projects/mobile';
import WebProjectsPage from './screens/projects/web';
import TeachingPage from './screens/teach';
import FunFactsPage from './screens/fun';

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
              <Route exact path="/" component={HomePage} />
              <Route exact path="/resume" component={ResumePage} />
              <Route path="/projects/mobile" component={MobileProjectsPage} />
              <Route path="/projects/web" component={WebProjectsPage} />
              <Route exact path="/teach" component={TeachingPage} />
              <Route exact path="/fun" component={FunFactsPage} />
              {/* <Route component={NotFound} /> */}
            </div>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
