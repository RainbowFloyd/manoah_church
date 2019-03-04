import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Wip from './components/Wip/Wip';
import Staff from './components/Staff/Staff'
import Connect from './components/Connect/Connect'
import Media from './components/Media/Media'
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route path='/staff' component={Staff} />
        <Route path='/connect' component={Connect} />
        <Route path='/media' component={Media} />
        <Route path='/' exact component={Wip} />
      </div>
    );
  }
}

export default App;
