import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  handleClick = () => {
    this.props.increaseScore();
  }

  render() {
    return (
      <div className="App-card col-sm-3 col-md-2" onClick={this.handleClick}><img src={this.props.image} alt=""/></div>
    );
  }
}

export default Card;
