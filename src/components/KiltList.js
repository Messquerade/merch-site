import React from 'react';
import Kilt from "./Kilt";
import PropTypes from "prop-types";



function KiltList(props) {
  return (
    <React.Fragment>
      {props.kiltList.map((kilt) => 
        <Kilt name={kilt.name}
          color={kilt.color}
          pockets={kilt.pockets}
          size={kilt.size}
          price={kilt.price}
          popularity={kilt.popularity} 
          quantity={kilt.quantity}
          id={kilt.id}
          onBuyKilt={props.onBuyKilt}
          onRestockKilts={props.onRestockKilts}/>
      )}
    </React.Fragment>
  );
}

KiltList.propTypes = {
  kiltList: PropTypes.array,
  onBuyKilt: PropTypes.func,
  onRestockKilts: PropTypes.func
}
export default KiltList;