import './App.css';

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Project from './components/Project';

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
                  <Route path="/projects/redorblue">
                    <Project
                      logo={projects.redorblue.logo}
                      color={projects.redorblue.color}
                      title={projects.redorblue.title}
                      name={projects.redorblue.name}
                      description={projects.redorblue.description}
                      awards={projects.redorblue.awards}
                      platforms={projects.redorblue.platforms}
                      video={projects.redorblue.video}
                    />
                  </Route>
                  <Route path="/projects/hearo">
                    <Project
                      logo={projects.hearo.logo}
                      color={projects.hearo.color}
                      title={projects.hearo.title}
                      name={projects.hearo.name}
                      description={projects.hearo.description}
                      awards={projects.hearo.awards}
                      platforms={projects.hearo.platforms}
                      video={projects.hearo.video}
                    />
                  </Route>
                  <Route path="/projects/jamblr">
                    <Project
                      logo={projects.jamblr.logo}
                      color={projects.jamblr.color}
                      title={projects.jamblr.title}
                      name={projects.jamblr.name}
                      description={projects.jamblr.description}
                      awards={projects.jamblr.awards}
                      platforms={projects.jamblr.platforms}
                      video={projects.jamblr.video}
                    />
                  </Route>
                  <Route path="/projects/coverlove">
                    <Project
                      logo={projects.coverlove.logo}
                      color={projects.coverlove.color}
                      title={projects.coverlove.title}
                      name={projects.coverlove.name}
                      description={projects.coverlove.description}
                      awards={projects.coverlove.awards}
                      platforms={projects.coverlove.platforms}
                      video={projects.coverlove.video}
                    />
                  </Route>
                  <Route path="/projects/polysentry">
                    <Project
                      logo={projects.polysentry.logo}
                      color={projects.polysentry.color}
                      title={projects.polysentry.title}
                      name={projects.polysentry.name}
                      description={projects.polysentry.description}
                      awards={projects.polysentry.awards}
                      platforms={projects.polysentry.platforms}
                      video={projects.polysentry.video}
                    />
                  </Route>
                  <Route path="/projects/tunewise">
                    <Project
                      logo={projects.tunewise.logo}
                      color={projects.tunewise.color}
                      title={projects.tunewise.title}
                      name={projects.tunewise.name}
                      description={projects.tunewise.description}
                      awards={projects.tunewise.awards}
                      platforms={projects.tunewise.platforms}
                      video={projects.tunewise.video}
                    />
                  </Route>
                  <Route path="/projects/potencia">
                    <Project
                      logo={projects.potencia.logo}
                      color={projects.potencia.color}
                      title={projects.potencia.title}
                      name={projects.potencia.name}
                      description={projects.potencia.description}
                      awards={projects.potencia.awards}
                      platforms={projects.potencia.platforms}
                      video={projects.potencia.video}
                    />
                  </Route>
                  <Route path="/projects/igurme">
                    <Project
                      logo={projects.igurme.logo}
                      color={projects.igurme.color}
                      title={projects.igurme.title}
                      name={projects.igurme.name}
                      description={projects.igurme.description}
                      awards={projects.igurme.awards}
                      platforms={projects.igurme.platforms}
                      video={projects.igurme.video}
                    />
                  </Route>
                </ProjectsPage>
              </Route>
              <Route exact path="/projects">
                <p className="text">All projects page</p>
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
