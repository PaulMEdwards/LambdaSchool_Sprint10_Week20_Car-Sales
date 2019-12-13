import React from 'react';
import { connect } from "react-redux";
import AdditionalFeature from './AdditionalFeature';
import { addFeature } from "../actions";

const AdditionalFeatures = props => {
  console.log('AdditionalFeatures props: ', props);
  return (
    <div className="content">
      <h4>Additional Features Catalog</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} addFeature={props.addFeature} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

// export default AdditionalFeatures;

const mapPropsToState = state => {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures
  };
};

export default connect(
  mapPropsToState,
  { addFeature }
)(AdditionalFeatures);
