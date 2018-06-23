import React, { Component } from 'react';
import './ClickyGame.css';
import Card from '../Card';
const cards = [
  {
    image:"./assets/images/pansy.png"
  },
  {
    image:"./assets/images/gardenia.png"
  },
  {
    image:"./assets/images/rose.png"
  },
  {
    image:"./assets/images/iris.png"
  },
  {
    image:"./assets/images/lily_of_the_valley.png"
  },
  {
    image:"./assets/images/daisy.png"
  },
  {
    image:"./assets/images/snapdragon.png"
  },
  {
    image:"./assets/images/lobelia.png"
  },
  {
    image:"./assets/images/bleeding_heart.png"
  },
  {
    image:"./assets/images/fushia.png"
  },
  {
    image:"./assets/images/blazing_star.png"
  },
  {
    image:"./assets/images/lily.png"
  },
]
class ClickyGame extends Component {
  state = {
    flowerCards: cards
  }

  componentDidMount() {
    this.setState({ flowerCards: this.shuffle(this.state.flowerCards)})
  }
  shuffle = (array) => {
    // const flowerCards = this.state.flowerCards
    // shuffle function goes here
    // function shuffle(array) {
      let counter = array.length;
  
      // While there are elements in the array
      while (counter > 0) {
          // Pick a random index
          let index = Math.floor(Math.random() * counter);
  
          // Decrease counter by 1
          counter--;
  
          // And swap the last element with it
          let temp = array[counter];
          array[counter] = array[index];
          array[index] = temp;
      }
  
      return array;
  // }
  


    // this.setState({
    //   flowerCards: flowerCards
    // })
  }

  // shuffle();

  render() {
    console.log("ClickyGame state:",this.state);
    console.log("ClickyGame props:",this.props);
    return (
        <div id="clicky-game">
            <div id="cards">
            {this.state.flowerCards.map((card, index) => {
              return (
              <Card
              key={index} 
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
