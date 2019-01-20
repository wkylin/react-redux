import React, { Component } from 'react';
import './App.css';

import Main from './components/Main';
import User from './components/User'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: 'Max'
    }
  }

  changeUserName = (newName) => {
    this.setState({
      userName: newName,
    })
  }

  render() {
    return (
      <div className="App">
        <Main changeUserName={ this.changeUserName }/>
        <User userName= { this.state.userName }/>
      </div>
    );
  }
}

export default App;
