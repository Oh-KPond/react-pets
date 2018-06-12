import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pet from './Pet';
import NewPetForm from './NewPetForm';

import axios from 'axios';


class PetCollection extends Component {

  constructor(props) {
    super(props);

    this.state = { pets: [] }
  }

  componentDidMount() {
    axios.get('https://petdibs.herokuapp.com/pets/')
    .then((response) => {
      this.setState({ pets: response.data });
    })
    .catch((error) => {
      this.setState({
        error: error.message
      })
    });
  }

  renderPetList = () => {
    const componentList = this.state.pets.map((pet,index) => {
      return (
        <Pet
          key={index}
          name={pet.name}
          age={pet.age}
          breed={pet.breed}
          about={pet.about}
        />
      );
    });

    return componentList
  }

  addPet = (pet) => {
    const pets = this.state.pets;

    axios.post('https://petdibs.herokuapp.com/pets/',pet)
      .then((response) => {
        pets.push(pet);
        this.setState({
          pets,
          message: `Successfully Added ${pet.name}` // for a jsx message peice at the top in another setState maybe
        });
      })
      .catch((error) => {
        this.setState({
          error: error.message
        })
      })
  }

  render () {
    let errorMessage

    if (this.state.error) {
      errorMessage = <p>{this.state.error}</p>
    }

    let message

    if (this.state.message) {
      message = <p>{this.state.message}</p>
    }


    return (
      <section>
        {errorMessage}
        {message}
        {this.renderPetList()}
        <NewPetForm addPetCallback={this.addPet} />
      </section>
    )
  }
}

export default PetCollection;

PetCollection.propTypes = {
  pets: PropTypes.array,
}
