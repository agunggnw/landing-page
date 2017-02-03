import React, { Component } from 'react';
import Uuid from 'uuid';
import {Link} from 'react-router';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      menus: {}
    }
  }
  componentWillMount() {
    this.setState({
      menus: [{
              id: Uuid.v4(),
              uri: 'intro',
              text: 'Intro'
            },
            {
              id: Uuid.v4(),
              uri: 'tech',
              text: 'Tech'
            },
            {
              id: Uuid.v4(),
              uri: 'team',
              text: 'Team'
            },
            {
              id: Uuid.v4(),
              uri: 'contact',
              text: 'Contact'
            },
            ]
    });
  }
  render() {
    return (
         <div className="navbar-fixed">
            <nav id="nav_f" className="default_color" role="navigation">
                <div className="container">
                    <div className="nav-wrapper">
                    <a href="/" id="logo-container" className="brand-logo">CyberClick ID</a>
                        <ul className="right hide-on-med-and-down">
                            {
                              this.state.menus.map((item)=>
                                  <li key={item.id}><Link to={item.uri} activeClassName="active">{item.text}</Link></li>
                                )
                            }
                        </ul>
                        <ul id="nav-mobile" className="side-nav">
                            <li><a href="#/intro">Service</a></li>
                            <li><a href="#/work">Tech</a></li>
                            <li><a href="#/team">Team</a></li>
                            <li><a href="#/contact">Contact</a></li>
                        </ul>
                    <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="mdi-navigation-menu"></i></a>
                    </div>
                </div>
            </nav>
        </div>
      );
  }
}

export default Nav;