import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Header.css';
import Title from '../Title';
import Status from '../Status';
import Score from '../Score';

class Header extends Component {
  render() {
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
