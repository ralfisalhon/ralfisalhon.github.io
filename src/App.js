import './App.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Project from './components/Project';
import SmallProject from './components/SmallProject';

import HomePage from './screens/home';
import ResumePage from './screens/resume';
import ProjectsPage from './screens/projects';
import TeachingPage from './screens/teach';
import FunFactsPage from './screens/fun';

import projects from './data/projects';
global.isMobile = window.innerWidth <= 500;

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
            {!global.isMobile && (
              <div className="header">
                <Header />
              </div>
            )}
            <div className="content">
              <Route exact path="/" component={HomePage} />
              <Route exact path="/resume" component={ResumePage} />
              <Route path="/projects">
                <ProjectsPage>
                  {Object.keys(projects).map((key) => (
                    <Route path={'/projects/' + key}>
                      <Project project={projects[key]} />
                    </Route>
                  ))}
                </ProjectsPage>
              </Route>
              <Route exact path="/projects">
                <div className="all-projects">
                  {Object.keys(projects).map((key) => (
                    <div onClick={() => (window.location.href = '/projects/' + key)}>
                      <SmallProject project={projects[key]} />
                    </div>
                  ))}
                </div>
              </Route>
              <Route exact path="/teach" component={TeachingPage} />
              <Route exact path="/fun" component={FunFactsPage} />
            </div>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
