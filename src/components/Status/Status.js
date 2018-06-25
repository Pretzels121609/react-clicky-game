import React, { Component } from 'react';
import './Status.css';

class Status extends Component {
  render() {
    return (
      <h2 className="App-Status text-center">{this.props.statusString}</h2>
    );
  }
}

export default Status;
