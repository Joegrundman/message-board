import React, { Component } from 'react';
import './App.css';
import Main from '../components/Main/Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Message Board</h2>
        </div>
        <Main/>
      </div>
    );
  }
}

export default App;
