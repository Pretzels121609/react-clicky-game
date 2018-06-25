import React, { Component } from 'react';
import './ClickyGame.css';
import Card from '../Card';
const cards = [
  {
    image:"./assets/images/black_eyed_susan.png"
  },
  {
    image:"./assets/images/blazing_star.png"
  },
  {
    image:"./assets/images/bleeding_heart.png"
  },
  {
    image:"./assets/images/carnation.png"
  },
  {
    image:"./assets/images/crocus.png"
  },
  {
    image:"./assets/images/daffodil.png"
  },
  {
    image:"./assets/images/dahlias.png"
  },
  {
    image:"./assets/images/daisy.png"
  },
  {
    image:"./assets/images/delphinium.png"
  },
  {
    image:"./assets/images/foxglove.png"
  },
  {
    image:"./assets/images/fushia.png"
  },
  {
    image:"./assets/images/gardenia.png"
  },
  // {
  //   image:"./assets/images/geranium.png"
  // },
  // {
  //   image:"./assets/images/grape_hacinth.png"
  // },
  // {
  //   image:"./assets/images/hibiscus.png"
  // },
  // {
  //   image:"./assets/images/hollyhock.png"
  // },
  // {
  //   image:"./assets/images/hyacinth.png"
  // },
  // {
  //   image:"./assets/images/iris.png"
  // },
  // {
  //   image:"./assets/images/lilac.png"
  // },
  // {
  //   image:"./assets/images/lily_of_the_valley.png"
  // },
  // {
  //   image:"./assets/images/lily.png"
  // },
  // {
  //   image:"./assets/images/lobelia.png"
  // },
  // {
  //   image:"./assets/images/orchid.png"
  // },
  // {
  //   image:"./assets/images/pansy.png"
  // },
  // {
  //   image:"./assets/images/peony.png"
  // },
  // {
  //   image:"./assets/images/petunia.png"
  // },
  // {
  //   image:"./assets/images/plumeria.png"
  // },
  // {
  //   image:"./assets/images/poppy.png"{
  //   image:"./assets/images/geranium.png"
  // },
  // {
  //   image:"./assets/images/grape_hacinth.png"
  // },
  // {
  //   image:"./assets/images/hibiscus.png"
  // },
  // {
  //   image:"./assets/images/hollyhock.png"
  // },
  // {
  //   image:"./assets/images/hyacinth.png"
  // },
  // {
  //   image:"./assets/images/iris.png"
  // },
  // {
  //   image:"./assets/images/lilac.png"
  // },
  // {
  //   image:"./assets/images/lily_of_the_valley.png"
  // },
  // {
  //   image:"./assets/images/lily.png"
  // },
  // {
  //   image:"./assets/images/lobelia.png"
  // },
  // {
  //   image:"./assets/images/orchid.png"
  // },
  // {
  //   image:"./assets/images/pansy.png"
  // },
  // {
  // },
  // {
  //   image:"./assets/images/rose.png"
  // },
  // {
  //   image:"./assets/images/snapdragon.png"
  // },
  // {
  //   image:"./assets/images/tulip.png"
  // },
  // {
  //   image:"./assets/images/violets.png"
  // },
  
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
  // shuffle = (array) => {
  //   // const flowerCards = this.state.flowerCards
  //   // shuffle function goes here
  //   // function shuffle(array) {
  //     // let counter = array.length;
  
  //     // While there are elements in the array which is 32 flowers
  //     for (let counter = array.length; counter > 0; counter --){
  //       // Pick a random index
  //       let index = Math.floor(Math.random() * counter) -1;

  //       // And swap the last element with it
  //       let temp = array[counter];
  //       array[counter] = array[index];
  //       array[index] = temp;
  //     }
         
  //     const twelveCards = [];
  //     for (let i = 0; i < 12; i++) {
  //       twelveCards[i] = array[i]
  //     }
  //     return twelveCards;
  // // }
  


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
