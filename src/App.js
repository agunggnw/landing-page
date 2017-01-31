import React, { Component } from 'react';
import Loader from './components/SlashItem/Loader'
import Nav from './components/SlashItem/Nav'
import Motto from './components/SlashItem/Motto'
import Intro from './components/SlashItem/Intro'
import Tech from './components/SlashItem/Tech'
import Parallax from './components/SlashItem/Parallax'
import Team from './components/SlashItem/Team'
import Footer from './components/SlashItem/Footer'

class App extends Component {
  render() {
    return (
      <div  id="top" class="scrollspy">
        <Loader />
        <Nav />
        <Motto />
        <Intro />
        <Tech />
        <Parallax />
        <Team />
        <Footer />
      </div>
    );
  }
}

export default App;
