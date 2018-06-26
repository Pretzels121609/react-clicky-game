import React, { Component } from 'react';
import './Card.css';

// Inside of the Card component:
// props = {
//   key: index,
//   image: card.image,
//   increaseScore: this.props.increaseScore, 
//   updateStatus: this.props.updateStatus,
//   shuffleCards: this.shuffleCards,
//   pick12RandomCards: this.pick12RandomCards,
//   wasClicked: card.clicked,
//   clickedFlower: () => {card.clicked = true},
// }

class Card extends Component {
  

  render() {
    return (
      <div className="App-card col-sm-3 col-md-2" onClick={this.props.handleClick}><img src={this.props.image} alt=""/></div>
    );
  }
}

export default Card;
