import React from 'react';
import PropTypes from 'prop-types';

function Kilt(props){
  return (
    <React.Fragment>
      if (props.quanity === 0) {
        <h3>{props.name} is <strong>Out of Stock</strong></h3>
      } else {
        <>
        <h3>{props.name}: {props.color}</h3>
        <li>Number of Pockets:{props.pockets}</li>
        <li>Size: {props.size}</li>
        <li>$ {props.price}</li>
        <li>Rating: {props.popularity}</li>
        <li> Quantity Available: {props.quantity}</li>
        </>
      }
    </React.Fragment>
  );
}

Kilt.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  pockets: PropTypes.number.isRequired,
  size: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  popularity: PropTypes.number.isRequired
}

export default Kilt;