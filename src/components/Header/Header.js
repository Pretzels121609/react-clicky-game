import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Header.css';
import Title from '../Title';
import Status from '../Status';
import Score from '../Score';

class Header extends Component {
  render() {
    console.log("Header state:",this.state);
    console.log("Header props:",this.props);
    return (
        <header className="jumbotron App-header">
         <div className="row">

          <div className="col-3">
            <img src={logo} className="App-logo" alt="logo" /><Title />
          </div>

          <div className="col-6">
            <div className="row">  
            <Status statusString={this.props.status} />
            </div>
            <div className="row">
              {/* <h5>Click on an image to earn points, but don't any more than once.</h5> */}
            </div>
          </div>
     
          
          <div className="col-3">
          <Score score={this.props.score} topScore={this.props.topScore}/>
          </div>
          

        </div>

      

      
        </header>
    );
  }
}

export default Header;
