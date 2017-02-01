import React, { Component } from 'react';

import Nav from './../components/SlashItem/Nav'
import Loader from './../components/SlashItem/Loader'

class Slash extends Component {
  render() {
    return (
      <div  id="top" className="scrollspy">
        <Loader />
        <Nav />
        {this.props.children}
      </div>
    );
  }
}

export default Slash;

