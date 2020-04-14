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
              <Route path="/projects">
                <ProjectsPage>
                  {Object.keys(projects).map((key) => (
                    <Route path={'/projects/' + key}>
                      <Project
                        logo={projects[key].logo}
                        color={projects[key].color}
                        title={projects[key].title}
                        name={projects[key].name}
                        description={projects[key].description}
                        awards={projects[key].awards}
                        platforms={projects[key].platforms}
                        video={projects[key].video}
                      />
                    </Route>
                  ))}
                </ProjectsPage>
              </Route>
              <Route exact path="/projects">
                <div className="all-projects">
                  {Object.keys(projects).map((key) => (
                    <div onClick={() => (window.location.href = '/projects/' + key)}>
                      <SmallProject logo={projects[key].logo} color={projects[key].color} name={projects[key].name} />
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
