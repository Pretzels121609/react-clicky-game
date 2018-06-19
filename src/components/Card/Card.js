import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  handleClick = () => {
    this.props.increaseScore();
  }

  render() {
    return (
      <a className="App-card" onClick={this.handleClick}><img src={this.props.image}/></a>
    );
  }
}

export default Card;
