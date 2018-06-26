import React, { Component } from 'react';
import './ClickyGame.css';
import Card from '../Card';

const flowers = [
  {
    image:"./assets/images/black_eyed_susan.png",
    clicked: false,
  },
  {
    image:"./assets/images/blazing_star.png",
    clicked: false,
  },
  {
    image:"./assets/images/bleeding_heart.png",
    clicked: false,
  },
  {
    image:"./assets/images/carnation.png",
    clicked: false,
  },
  {
    image:"./assets/images/crocus.png",
    clicked: false,
  },
  {
    image:"./assets/images/daffodil.png",
    clicked: false,
  },
  {
    image:"./assets/images/dahlias.png",
    clicked: false,
  },
  {
    image:"./assets/images/daisy.png",
    clicked: false,
  },
  {
    image:"./assets/images/delphinium.png",
    clicked: false,
  },
  {
    image:"./assets/images/foxglove.png",
    clicked: false,
  },
  {
    image:"./assets/images/fushia.png",
    clicked: false,
  },
  {
    image:"./assets/images/gardenia.png",
    clicked: false,
  },
  {
    image:"./assets/images/geranium.png",
    clicked: false,
  },
  {
    image:"./assets/images/grape_hacinth.png",
    clicked: false,
  },
  {
    image:"./assets/images/hibiscus.png",
    clicked: false,
  },
  {
    image:"./assets/images/hollyhock.png",
    clicked: false,
  },
  {
    image:"./assets/images/hyacinth.png",
    clicked: false,
  },
  {
    image:"./assets/images/iris.png",
    clicked: false,
  },
  {
    image:"./assets/images/lilac.png",
    clicked: false,
  },
  {
    image:"./assets/images/lily_of_the_valley.png",
    clicked: false,
  },
  {
    image:"./assets/images/lily.png",
    clicked: false,
  },
  {
    image:"./assets/images/lobelia.png",
    clicked: false,
  },
  {
    image:"./assets/images/orchid.png",
    clicked: false,
  },
  {
    image:"./assets/images/pansy.png",
    clicked: false,
  },
  {
    image:"./assets/images/peony.png",
    clicked: false,
  },
  {
    image:"./assets/images/petunia.png",
    clicked: false,
  },
  {
    image:"./assets/images/plumeria.png",
    clicked: false,
  },
  {
    image:"./assets/images/poppy.png",
    clicked: false,
  },
  {
    image:"./assets/images/rose.png",
    clicked: false,
  },
  {
    image:"./assets/images/snapdragon.png",
    clicked: false,
  },
  {
    image:"./assets/images/tulip.png",
    clicked: false,
  },
  {
    image:"./assets/images/violets.png",
    clicked: false,
  },
]

class ClickyGame extends Component {
  state = {
    flowerCards: []
  }

  componentDidMount() {
    this.pick12RandomCards();
  }

  // shuffles the entire array
  shuffle = (array) => {
 
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
   }

   // shuffles the cards that are in play while the game is being played
   shuffleCards = () => {
     const flowerCards = this.state.flowerCards;
     this.setState(this.shuffle(flowerCards));
   }

   //this picks 12 random cards from from the entire array
   pick12RandomCards = () => {
     const randomizedFlowers = this.shuffle(flowers);

     const twelveCards = [];
      for (let i = 0; i < 12; i++) {
        twelveCards[i] = randomizedFlowers[i];
      }

    this.setState({flowerCards: twelveCards});
   }

   handleClick = (card) => {
    // if the user guessed correctly
    if (card.clicked === false){
    //   a. if the user guessed all 12 cards
      if(this.props.score + 1 === 12) {                
    //      1. update status to "You win!"
        this.props.updateStatus("You Win!");
    //      2. update top score
        this.props.updateTopScore(12);
    //      3. reset score to 0
        this.props.resetScore()
    //      4. pick 12 new cards
        this.pick12RandomCards()
      }
    //   b. if the user hasn't guessed all the cards
      else {
    //      1. update status to "You guessed right! Choose another card"
        this.props.updateStatus("You guessed correctly. Pick another card.")
    //      2. increase score by 1
        this.props.increaseScore();
    //      3. change card.clicked to true
        card.clicked = true;
    //      4. shuffle the cards
        this.shuffleCards();
      }
    }
    // if the user guessed incorrectly
    else {
    //    1. update status to "Sorry, you lose :( Play again!"
      this.props.updateStatus("Sorry! You lose. Play again.");
    //    2. update top score
      this.props.updateTopScore(this.props.score);
    //    3. reset score to 0
      this.props.resetScore();
    //    4. pick 12 new cards
      this.pick12RandomCards();
    }
  }


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
              handleClick={() => this.handleClick(card)}
              />
              
            );
            })}
            </div>
        </div>
    );
  }
}

export default ClickyGame;
