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

  valid = () => {
    return this.state.name.length > 0 && this.state.age > 0;
  }

  clearForm = () => {
    this.setState({
      name: '',
      age: 0,
      breed: '',
      about: '',
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    if (this.valid ()) {

      this.props.addPetCallback(this.state);

      this.clearForm();
    }
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input name="name" value={this.state.name}
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

        <input type="submit" value="add Pet" />
        </div>
      </form>
    )
  }
}

export default NewPetForm;

NewPetForm.propTypes = {
  addPetCallback: PropTypes.func.isRequired,
};
