import React, { Component } from 'react';

class Motto extends Component {
  render() {
    return (
        <div className="section no-pad-bot" id="index-banner">
            <div className="container">
                <h1 className="text_h center header cd-headline letters type">
                    <span>We Love</span> <br/>
                    <span className="cd-words-wrapper waiting">
                        <b className="is-visible">Simplicity</b>
                        <b>Coding</b>
                        <b>Developing</b>
                    </span>
                </h1>
            </div>
        </div>
      );
  }
}

export default Motto;