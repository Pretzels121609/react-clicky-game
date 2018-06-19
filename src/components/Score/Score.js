import React, { Component } from 'react';
import './Score.css';

class Score extends Component {
  render() {
    return (
      <h1 className="App-score">Score: {this.props.score} | Top Score: 0</h1>
    );
  }
}

export default Score;
