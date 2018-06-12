import React from 'react';
import { mount } from 'enzyme';

import NewPetForm from './NewPetForm';

describe('NewPetForm', () => {
  test('that it matches an existing snapshot', () => {
  // Mount the component in the DOM
  // Deep Rendering

  // Given
  const wrapper = mount(<NewPetForm />);
  // When and Then
  expect(wrapper).toMatchSnapshot();
  // Remove component from the DOM
  wrapper.unmount();
  });
});
