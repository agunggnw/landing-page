import React, { Component } from 'react';
import uuid from 'uuid';

class Tech extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      subtitle: '',
      card: []
    }
  }

  componentWillMount() {
      this.setState({
        title: 'Tech',
        subtitle: 'Some Technology we use to Develop our Clients Site',
        card: [
            {img: {src: 'laravel.jpg', alt: 'Laravel Framework'}, id: uuid.v4(),  body: {title: 'Laravel', desc: 'Laravel is a free, open-source PHP web framework, created by Taylor Otwell and intended for the development of web applications following the model–view–controller (MVC) architectural pattern. Some of the features of Laravel are a modular packaging system with a dedicated dependency manager, different ways for accessing relational databases, utilities that aid in application deployment and maintenance, and its orientation toward syntactic sugar.' }, link: {text: 'Laravel.com', anch: 'www.laravel.com'} },
            {img: {src: 'mysql.png', alt: 'MySQL Database'}, id: uuid.v4(),  body: {title: 'MySQL', desc: 'MySQL is is an open-source relational database management system (RDBMS). The MySQL development project has made its source code available under the terms of the GNU General Public License. MySQL was owned and sponsored by a single for-profit firm, the Swedish company MySQL AB, now owned by Oracle Corporation.', }, link: {text: 'MySQL.com', anch: 'www.mysql.com'} },
            {img: {src: 'react.jpg', alt: 'React'}, id: uuid.v4(),  body: {title: 'React', desc: 'React is an open-source JavaScript library for building user interfaces. It is maintained by Facebook, Instagram and a community of individual developers and corporations.  According to JavaScript analytics service Libscore, React is currently being used on the websites of Netflix, Imgur, Bleacher Report, Feedly, Airbnb, SeatGeek, HelloSign, Walmart, and others.', }, link: {text: 'React', anch: 'www.facebook.github.io/react/'} },

            {img: {src: 'twbs.png', alt: 'Twitter Bootstrap'}, id: uuid.v4(),  body: {title: 'Bootstrap', desc: 'Bootstrap is a free and open-source front-end web framework for designing websites and web applications. It contains HTML- and CSS-based design templates for typography, forms, buttons, navigation and other interface components, as well as optional JavaScript extensions. Unlike many web frameworks, it concerns itself with front-end development only. Bootstrap is the second most-starred project on GitHub, with more than 105,000 stars and 47,000 forks.', }, link: {text: 'GetBootstrap.com', anch: 'www.getbootstrap.com'} },
            {img: {src: 'lumen.png', alt: 'Lumen'}, id: uuid.v4(),  body: {title: 'Lumen', desc: 'Lumen is Micro Framework by Laravel. Lumen has functionality, database management and security as strong as Laravel. Lumen more focusing building web services for providing API', }, link: {text: 'Lumen', anch: 'lumen.laravel.com'} },
            {img: {src: 'php.jpeg', alt: 'PHP'}, id: uuid.v4(),  body: {title: 'PHP', desc: 'PHP is a server-side scripting language designed primarily for web development but also used as a general-purpose programming language. Originally created by Rasmus Lerdorf in 1994. The standard PHP interpreter, powered by the Zend Engine, is free software released under the PHP License. PHP has been widely ported and can be deployed on most web servers on almost every operating system and platform, free of charge. The PHP language evolved without a written formal specification or standard until 2014, leaving the canonical PHP interpreter as a de facto standard. Since 2014 work has gone on to create a formal PHP specification.', }, link: {text: 'PHP', anch: 'php.net'} },


            ]
      });
  }

  render() {
    return (
        <div className="section scrollspy" id="work">
            <div className="container">
                <h2 className="header text_b">{this.state.title}</h2>
                <p className="lead">{this.state.subtitle}</p>
                <div className="row">
                {
                    this.state.card.map(item => 
                        <div className="col s12 m4 l4" key={item.id}>
                            <div className="card">
                                <div className="card-image waves-effect waves-block waves-light">
                                    <img role="presentation" className="activator" src={"img/tech/"+item.img.src} alt={item.img.alt} />
                                </div>
                                <div className="card-content">
                                    <span className="card-title activator grey-text text-darken-4">{item.body.title}<i className="mdi-navigation-more-vert right"></i></span>
                                    <p><a href={"http://"+item.link.anch}>{item.link.text}</a></p>
                                </div>
                                <div className="card-reveal">
                                    <span className="card-title grey-text text-darken-4">{item.body.title}<i className="mdi-navigation-close right"></i></span>
                                    <p>{item.body.desc}</p>
                                </div>
                            </div>
                        </div>
                        )
                }
                </div>
            </div>
        </div>
      );
  }
}

export default Tech;