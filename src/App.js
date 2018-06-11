import React, { Component } from 'react';
import './App.css';
import PetCollection from './components/PetCollection.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <PetCollection />
      </div>
    );
  }
}

export default App;
