import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NewPetForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      age: 0,
      breed: '',
      about: ''
    };
  }

  onFieldChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const updateState = {};
    updateState[fieldName] = fieldValue;
    this.setState(updateState);
  }


  render() {
    return (
      <form>
        <div>
          <label htmlFor="name">Name: </label>
          <input name="name" value={this.state.className}
          onChange={this.onFieldChange} type="text"
          />

          <label htmlFor="age">Age: </label>
          <input name="age" value={this.state.age}
          onChange={this.onFieldChange} type="number"
          />

          <label htmlFor="breed">Breed: </label>
          <input name="breed" value={this.state.breed}
          onChange={this.onFieldChange} type="text"
          />

          <label htmlFor="about">About: </label>
          <textarea name="about" value={this.state.about}
          onChange={this.onFieldChange}
          />

        </div>
      </form>
    )
  }
}

export default NewPetForm;
