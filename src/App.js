import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Custom components
import Header from './components/header/Header';

class App extends Component {
  render() {
    return (
      <div className="app" >
        <Header />
      </div>
    );
  }
}

export default App;
