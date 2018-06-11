import React, { Component } from 'react';
import './App.css';
import Pet from './components/Pet.js'

const PET_LIST = [
  {
    name: 'Bogary',
    age: 8,
    breed: 'Mixed',
    about: 'Bogary was a mix off of the name Bogart.'
  },
  {
    name: 'Att',
    age: 20,
    breed: 'Irish Wolfhound',
    about: 'Att is very old'
  },
  {
    name: 'Ziggy',
    age: 50,
    breed: 'Black Cat',
    about: 'Ziggy was my mom\'s favorite cat.'
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pet
          name={PET_LIST[0].name}
          age={PET_LIST[0].age}
          breed={PET_LIST[0].breed}
          about={PET_LIST[0].about}
          />
      </div>
    );
  }
}

export default App;
