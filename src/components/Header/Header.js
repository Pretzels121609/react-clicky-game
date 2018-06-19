import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Header.css';
import Title from '../Title';
import Status from '../Status';
import Score from '../Score';

class Header extends Component {
  render() {
    console.log("Header state:",this.state);
    console.log("Header                        props:",this.props);
    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Title />
          <Status status={this.props.status} />
          <Score score={this.props.score} topScore={this.props.topScore}/>
        </header>
    );
  }
}

export default Header;
