import React, { Component } from 'react';

import { connect } from 'react-redux';

import './App.css';

import Main from './Main';
import User from './User'


class App extends Component {

  render() {
    return (
      <div className="App">
        <Main changeUserName={() =>  this.props.setName('Anna2') }/>
        <User userName= {this.props.user.name}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    match: state.match,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch({
        type: 'SET_NAME',
        payload: name,
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
