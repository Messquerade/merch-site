import React from 'react';
import PropTypes from 'prop-types';


function Kilt(props){
  function handleClick() {
    return props.onBuyKilt(props.id);
    // call a function that we write in the KiltControl
    // props.onBuyAKilt
    // function in KiltControl with decrement the quantity of each kilt in our list in state
  }
  let kiltDisplay = null;
  if (props.quantity === 0) {
    kiltDisplay = <h3>{props.name} is <strong>Out of Stock</strong></h3>
  } else {
    kiltDisplay =
    <>
    <h3>{props.name}: {props.color}</h3>
    <li>Number of Pockets:{props.pockets}</li>
    <li>Size: {props.size}</li>
    <li>$ {props.price}</li>
    <li>Rating: {props.popularity}</li>
    <li> Quantity Available: {props.quantity}</li>
    </>
  }
  


  return (
    <React.Fragment>
      {kiltDisplay}
      <button className="btn btn-dark" onClick={handleClick}>Buy</button>
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
  popularity: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  onBuyKilt: PropTypes.func
}

export default Kilt;