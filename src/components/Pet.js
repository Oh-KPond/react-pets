import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pet extends Component {

  render () {
    return (
      <article>
        Pet
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
