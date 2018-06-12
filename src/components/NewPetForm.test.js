import React from 'react';
import { mount, shallow } from 'enzyme';
import NewPetForm from './NewPetForm';

describe('NewPetForm', () => {
  test('that it matches an existing snapshot', () => {
    // Mount the component in the DOM
    // Deep Rendering

    // Given
    const wrapper = mount(<NewPetForm
      addPetCallback={() => {}}
       />);
    // When and Then
    expect(wrapper).toMatchSnapshot();
    // Remove component from the DOM
    wrapper.unmount();
  });

  test('when a user enters a name in a text field the field is updated', () => {
    // Given
    const wrapper = shallow(<NewPetForm
        addPetCallback={() => {}}
       />);

    let nameField = wrapper.find('input[name="name"]');

    // When
    nameField.simulate('change', {
      target: {
        name: 'name',
        value: 'Bob',
      },
    });

    wrapper.update(); // Force the onChange preventDefault
    nameField = wrapper.find('input[name="name"]');

    // Then
    expect(nameField.getElement().props.value).toEqual('Bob');

  })

  test('When the user enters text it appears in that input field', () => {
    const wrapper = mount( <NewPetForm addPetCallback={() => {}} />);

    const fieldValues = [
      {
        field: 'name',
        value: 'Bob',
      },
      {
        field:  'breed',
        value: 'Pomeranian',
      },
      {
        field: 'age',
        value: '6',
      },
      {
        field: 'about',
        value: 'fun breed',
      }
    ];

    fieldValues.forEach(({field, value}) => {
      let element = wrapper.find(`input[name="${field}"]`)
      element.simulate('change', {target: {
        name: field,
        value,
      }});
      wrapper.update();
      element = wrapper.find(`input[name="${field}"]`);
      expect(element.getElement().props.value).toEqual(value);
    });
  });
  
});
