import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pet extends Component {


  render () {
    return (
      <article>
        <h3>Pet {this.props.name}</h3>
        <p>{this.props.age}</p>
        <p>{this.props.breed}</p>
        <p>{this.props.about}</p>
      </article>
    )
  }
}

export default Pet;

Pet.propTypes = {
  name: PropTypes.string.isRequired,
  age:PropTypes.number,
  breed:PropTypes.string,
  about:PropTypes.string
}
