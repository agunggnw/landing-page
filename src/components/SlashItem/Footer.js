import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
        <footer id="contact" className="page-footer default_color scrollspy">
            <div className="container">  
                <div className="row">
                    <div className="col l6 s12">
                        <form className="col s12" action="contact.php" method="post">
                            <div className="row">
                                <div className="input-field col s6">
                                    <i className="mdi-action-account-circle prefix white-text"></i>
                                    <input id="icon_prefix" name="name" type="text" className="validate white-text" />
                                    <label className="white-text">First Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <i className="mdi-communication-email prefix white-text"></i>
                                    <input id="icon_email" name="email" type="email" className="validate white-text" />
                                    <label className="white-text">Email-id</label>
                                </div>
                                <div className="input-field col s12">
                                    <i className="mdi-editor-mode-edit prefix white-text"></i>
                                    <textarea id="icon_prefix2" name="message" className="materialize-textarea white-text"></textarea>
                                    <label className="white-text">Message</label>
                                </div>
                                <div className="col offset-s7 s5">
                                    <button className="btn waves-effect waves-light red darken-1" type="submit">Submit
                                        <i className="mdi-content-send right white-text"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col l3 s12">
                        <h5 className="white-text">joashpereira.com</h5>
                        <ul>
                            <li><a className="white-text" href="http://www.joashpereira.com/">Home</a></li>
                            <li><a className="white-text" href="http://www.joashpereira.com/blog">Blog</a></li>
                        </ul>
                    </div>
                    <div className="col l3 s12">
                        <h5 className="white-text">Social</h5>
                        <ul>
                            <li>
                                <a className="white-text" href="https://www.behance.net/joashp">
                                    <i className="small fa fa-behance-square white-text"></i> Behance
                                </a>
                            </li>
                            <li>
                                <a className="white-text" href="https://www.facebook.com/joash.c.pereira">
                                    <i className="small fa fa-facebook-square white-text"></i> Facebook
                                </a>
                            </li>
                            <li>
                                <a className="white-text" href="https://github.com/joashp">
                                    <i className="small fa fa-github-square white-text"></i> Github
                                </a>
                            </li>
                            <li>
                                <a className="white-text" href="https://www.linkedin.com/in/joashp">
                                    <i className="small fa fa-linkedin-square white-text"></i> Linkedin
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright default_color">
                <div className="container">
                    Made by <a className="white-text" href="http://joashpereira.com">Joash Pereira</a>. Thanks to <a className="white-text" href="http://materializecss.com/">materializecss</a>
                </div>
            </div>
        </footer>
      );
  }
}

export default Footer;