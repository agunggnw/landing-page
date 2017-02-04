import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
        <footer id="contact" className="page-footer inverse_color scrollspy">
            <div className="container">  
                <div className="row">
                    <div className="col l6 s12 contact-form">
                        <form className="col s12" action="contact.php" method="post">
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="mdi-action-account-circle prefix text_inverse"></i>
                                    <input id="icon_prefix" name="name" type="text" className="validate text_inverse" />
                                    <label className="text_inverse">First Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="mdi-communication-email prefix text_inverse"></i>
                                    <input id="icon_email" name="email" type="email" className="validate text_inverse" />
                                    <label className="text_inverse">Email-id</label>
                                </div>
                                <div className="input-field col s12">
                                    <i className="mdi-editor-mode-edit prefix text_inverse"></i>
                                    <textarea id="icon_prefix2" name="message" className="materialize-textarea text_inverse"></textarea>
                                    <label className="text_inverse">Message</label>
                                </div>
                                <div className="col offset-s7 s5">
                                    <button className="btn waves-effect waves-light red darken-1" type="submit">Submit
                                        <i className="mdi-content-send right white-text"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col l3 s12 contact-form">
                        <h5 className="text_inverse">Cyber Click ID</h5>
                        <p className="text_inverse">{"We'll never publish Your email. No SPAM no ADS. Trust us. "}</p>
                    </div>
                </div>
            </div>
        </footer>
      );
  }
}

export default Footer;