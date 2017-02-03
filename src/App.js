import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Slash from './container/Slash';
import Lost from './container/Lost';

import Motto from './components/SlashItem/Motto';
import Intro from './components/SlashItem/Intro';
import Tech from './components/SlashItem/Tech';
import Team from './components/SlashItem/Team';
import Footer from './components/SlashItem/Footer';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory} >
        <Route path="/" component={Slash} >
          <IndexRoute component={Motto} />
          <Route path="intro" component={Intro} />
          <Route path="tech" component={Tech} />
          <Route path="team" component={Team} />
          <Route path="contact" component={Footer} />
        </Route>
        <Route path="*" component={Lost} />
      </Router>
    );
  }
}

export default App;
