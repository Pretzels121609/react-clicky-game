import React, { Component } from 'react';
import './Score.css';

class Score extends Component {
  render() {
    return (
      <h2 className="App-score">Score: {this.props.score} | Top Score: {this.props.topScore}</h2>
    );
  }
}

export default Score;
