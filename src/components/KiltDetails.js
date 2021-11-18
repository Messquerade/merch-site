import React from "react";
import PropTypes from "prop-types";

function KiltDetails(props) {
  const { kilt } = props;

  return (
    <>
    <h3>{kilt.name}: {kilt.color}</h3>
    <li>Number of Pockets:{kilt.pockets}</li>
    <li>Size: {kilt.size}</li>
    <li>$ {kilt.price}</li>
    <li>Rating: {kilt.popularity}</li>
    <li> Quantity Available: {kilt.quantity}</li>
    </>
  );
}

KiltDetails.propTypes = {
  kilt: PropTypes.object
}

export default KiltDetails;