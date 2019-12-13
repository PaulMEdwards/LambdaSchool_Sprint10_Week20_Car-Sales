import React from 'react';
import { connect } from "react-redux";

const Total = props => {
  return (
    <div className="content">
      <h4>Total: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

// export default Total;

const mapPropsToState = state => {
  return {
    car: state.car,
    additionalPrice: state.additionalPrice
  };
};

export default connect(
  mapPropsToState,
  {}
)(Total);
