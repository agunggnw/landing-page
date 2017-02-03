import React, { Component } from 'react';
import Uuid from 'uuid';

class Intro extends Component {
  constructor() {
    super();
    this.state = {
      info: [],
    }
  }

  componentWillMount() {
    this.setState({
      info: [{
        id: Uuid.v4(),
        icon: "mdi-image-flash-on",
        title: "Simple mean Fast",
        subtitle: "With a Simple Algorithm makes the task easy and quickly done by computers."
      },
      {
        id: Uuid.v4(),
        icon: "mdi-social-group",
        title: "Close to You",
        subtitle: "We made You and Team are borderless, We're close to You."
      },
      {
        id: Uuid.v4(),
        icon: "mdi-communication-vpn-key",
        title: "It's Secure",
        subtitle: "Your info is crucial, so we use AES-256-CBC to encrypt everything about You. Even we can't see your email, we just know your name"
      }]
    });    
  }

  render() {
    return (
        <div id="intro" className="section scrollspy">
            <div className="container">
                <div className="row">
                    <div  className="col s12">
                        <h2 className="center header text_h2">" With the principle of <span className='span_h2'> Simplicity  </span>. We made our product with elegant Syntax. " <br/>- <span className="span_h2">CyberClick Team</span> </h2>
                    </div>
                    {
                      this.state.info.map((item)=>
                        <div  className="col s12 m4 l4" key={item.id}>
                            <div className="center promo promo-example">
                                <i className={item.icon}></i>
                                <h5 className="promo-caption">{item.title}</h5>
                                <p className="light center">{item.subtitle}</p>
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

export default Intro;