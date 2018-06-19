import React, { Component } from 'react';
import './ClickyGame.css';
import Card from '../Card';

class ClickyGame extends Component {
  cards = [
    {
      image:"https://4.bp.blogspot.com/-mDHgCpegW44/UaQZASNPhHI/AAAAAAAADv8/sDRnTjaYbRo/s1600/Flower+Pictures.jpg"
    },
    {
      image:"http://weneedfun.com/wp-content/uploads/2016/01/White-Flower-7.jpg"
    },
    {
      image:"https://farm8.static.flickr.com/7153/6749605831_dc4406cac3_b.jpg"
    }
  ]
  
  render() {
    return (
        <div id="clicky-game">
            <div id="cards">
            {this.cards.map(card => {
              return (
              <Card 
              image={card.image} 
              increaseScore={this.props.increaseScore} 
              />
            );
            })}
            </div>
        </div>
    );
  }
}

export default ClickyGame;
