import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import Contact from './contact';
import Resume from './resume';
//import Project from './projects';
//import Aboutme from './aboutme';

const Main = () => (
  <Switch>
    <Route exact path = "/" component={LandingPage} />
    <Route path = "/contact" component={Contact} />
    <Route path = "/resume" component={Resume} />
  </Switch>
)

export default Main;
