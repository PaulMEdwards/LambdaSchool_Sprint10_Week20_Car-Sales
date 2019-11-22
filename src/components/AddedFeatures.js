import React from 'react';
import { connect } from "react-redux";
import { removeFeature } from "../actions";

import AddedFeature from './AddedFeature';

const AddedFeatures = props => {
  console.log('AddedFeatures props: ', props);
  return (
    <div className="content">
      <h6>Added features:</h6>
      {
        (props.car.features && props.car.features.length > 0) ? (
          <ol type="1">
            {props.car.features.map(item => (
              <AddedFeature key={item.id} feature={item} removeFeature={props.removeFeature} />
            ))}
          </ol>
        ) : (
          <p>You can purchase additional features to customize your vehicle from the catalog on the right.</p>
        )
      }
    </div>
  );
};

// export default AddedFeatures;

const mapPropsToState = state => {
  return {
    car: state.car
  };
};

export default connect(
  mapPropsToState,
  { removeFeature }
)(AddedFeatures);
