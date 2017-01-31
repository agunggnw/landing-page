import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
         <div className="navbar-fixed">
            <nav idName="nav_f" className="default_color" role="navigation">
                <div className="container">
                    <div className="nav-wrapper">
                    <a href="#" id="logo-container" className="brand-logo">MD Template</a>
                        <ul className="right hide-on-med-and-down">
                            <li><a href="#intro">Service</a></li>
                            <li><a href="#work">Work</a></li>
                            <li><a href="#team">Team</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="https://github.com/joashp/material-design-template" target="_blank">Download</a></li>
                        </ul>
                        <ul id="nav-mobile" className="side-nav">
                            <li><a href="#intro">Service</a></li>
                            <li><a href="#work">Work</a></li>
                            <li><a href="#team">Team</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="https://github.com/joashp/material-design-template" target="_blank">Download</a></li>
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