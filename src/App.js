import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Wip from './components/Wip/Wip';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Wip />
      </div>
    );
  }
}

export default App;
