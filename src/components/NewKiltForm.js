import React from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewKiltForm(props) {
  
  function handleNewKiltFormSubmission(event) {
    event.preventDefault();
    props.onNewKiltCreation({
      name: event.target.name.value,
      color: event.target.color.value,
      pockets: event.target.pockets.value,
      size: event.target.size.value,
      price: event.target.price.value,
      popularity: event.target.popularity.value,
      quantity: event.target.quantity.value,
      id: v4()});
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewKiltFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Kilt Name' 
          className="form-control" />
          <br/>
        <input
          type='text'
          name='color'
          placeholder='Color' 
          className="form-control"/>
          <br/>
        <input
          type='number'
          name='pockets'
          placeholder='Enter # of Pockets'
          className="form-control" />
          <br/>
        <select name="size" className="form-control">
          <option value="S">Small</option>
          <option value="M">Medium</option>
          <option value="L">Large</option>
          <option value="XL">X-Large</option>
          <option value="2XL">XX-Large</option>
        </select>
          <br/>
        <input
          type='number'
          name='price'
          placeholder='250' 
          className="form-control"/>
          <br/>
        <select name='popularity' className="form-control">
          <option value="1">Low</option>
          <option value="2">Medium</option>
          <option value="3">High</option>
        </select>
        <br/>
        <input
          type='number'
          name='quantity'
          placeholder='0'
          className="form-control" />
        <br/>
        <button className="btn btn-dark" type='submit'>Add</button>
      </form>
        <br/>
    </React.Fragment>
  );
}

NewKiltForm.propTypes = {
  onNewKiltCreation: PropTypes.func
}

export default NewKiltForm;