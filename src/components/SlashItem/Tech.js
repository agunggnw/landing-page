import React, { Component } from 'react';

class Tech extends Component {
  constructor() {
    super();
    this.state = {
      title: 'Tech',
      subtitle: 'Some Technology we use to Develop our Clients Site'
    }
  }
  render() {
    return (
        <div className="section scrollspy" id="work">
            <div className="container">
                <h2 className="header text_b">{this.state.title}</h2>
                <p className="lead">{this.state.subtitle}</p>
                <div className="row">
                    <div className="col s12 m4 l4">
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img role="presentation" className="activator" src="img/project1.jpg" />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Project Title <i className="mdi-navigation-more-vert right"></i></span>
                                <p><a href="#">Project link</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Project Title <i className="mdi-navigation-close right"></i></span>
                                <p>Here is some more information about this project that is only revealed once clicked on.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4 l4">
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img role="presentation" className="activator" src="img/project2.jpg" />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Project Title <i className="mdi-navigation-more-vert right"></i></span>
                                <p><a href="#">Project link</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Project Title <i className="mdi-navigation-close right"></i></span>
                                <p>Here is some more information about this project that is only revealed once clicked on.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4 l4">
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img role="presentation" className="activator" src="img/project3.png" />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Project Title <i className="mdi-navigation-more-vert right"></i></span>
                                <p><a href="#">Project link</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Project Title <i className="mdi-navigation-close right"></i></span>
                                <p>Here is some more information about this project that is only revealed once clicked on.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4 l4">
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img role="presentation" className="activator" src="img/project4.jpg" />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Project Title <i className="mdi-navigation-more-vert right"></i></span>
                                <p><a href="#">Project link</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Project Title <i className="mdi-navigation-close right"></i></span>
                                <p>Here is some more information about this project that is only revealed once clicked on.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4 l4">
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img role="presentation" className="activator" src="img/project5.png" />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Project Title <i className="mdi-navigation-more-vert right"></i></span>
                                <p><a href="#">Project link</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Project Title <i className="mdi-navigation-close right"></i></span>
                                <p>Here is some more information about this project that is only revealed once clicked on.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m4 l4">
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img role="presentation" className="activator" src="img/project6.jpeg" />
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">Project Title <i className="mdi-navigation-more-vert right"></i></span>
                                <p><a href="#">Project link</a></p>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">Project Title <i className="mdi-navigation-close right"></i></span>
                                <p>Here is some more information about this project that is only revealed once clicked on.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
  }
}

export default Tech;