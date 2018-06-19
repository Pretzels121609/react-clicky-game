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
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF_sf3XzvBWGMd8o36mA_Oyx0QAulZg7wPE5Lfo_sWXU4oc9cjAw"
    },
    {
      image:"https://jardindesiris.ch/wp-content/uploads/2018/02/nv12_funday_monday_nouveaute_jardindesiris-600x600.jpg"
    },
    {
      image:"http://www.hawaiimagazine.com/sites/default/files/field/image/plumeria%202%20Eric%20Tessmer%20Flickr.jpg"
    },
    {
      image:"https://pixfeeds.com/images/flowers/daisies/1280-161725811-field-of-daisy-flowers.jpg"
    },
    {
      image:"http://www.bengertgreenhouses.com/wp-content/uploads/2017/06/petunia-1488564_1920-1024x683.jpg"
    },
    {
      image:"https://cdn.shopify.com/s/files/1/0972/6282/products/flowers-lobelia-crystal-palace-1_2000x.jpeg?v=1451417969"
    },
    {
      image:"https://s.hswstatic.com/gif/define-bleeding-heart-1.jpg"
    },
    {
      image:"https://funflowerfacts.files.wordpress.com/2012/07/fuchsia.jpg"
    },
    {
      image:"https://www.americanmeadows.com/media/catalog/product/cache/1/image/2664a1c26d20ff89f08769f165108d16/l/i/liatris-spicata.jpg"
    },
    {
      image:"http://www.wholeblossoms.com/images/snapdragon-flowers-assorted.jpg?1529094806"
    },
  ]
  
  render() {
    console.log("ClickyGame state:",this.state);
    console.log("ClickyGame props:",this.props);
    return (
        <div id="clicky-game">
            <div id="cards">
            {this.cards.map((card, index) => {
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
