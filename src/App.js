import React, { Component } from 'react';
import Header from './components/Header';
import ClickyGame from './components/ClickyGame';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    status: "",
  }

  increaseScore = () => {
    this.setState({
      score: this.state.score + 1
    })
  }

  updateTopScore = (topScore) => {
    this.setState({
      topScore: topScore
    })
  }

  updateStatus = (status) => {
    this.setState({
      status:status})
  }

  render() {
    console.log("App state:",this.state);
    console.log("App props:",this.props);

    return (
      <div className="App">
        <Header score={this.state.score} status={this.state.status} topScore={this.state.topScore}/>
          <div>
            <ClickyGame increaseScore={this.increaseScore} updateTopScore={this.updateTopScore}/>
          </div>
 <Footer />
      </div>
    );
  }
}

export default App;
