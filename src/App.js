import React, { useReducer } from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { initialState, carReducer } from "./reducers/carReducer";
import { ADD_FEATURE, REMOVE_FEATURE } from "./actions";

const App = () => {
  // eslint-disable-next-line
  const [state, dispatch] = useReducer(carReducer, initialState);

  // const state = {
  //   car: {
  //     id: 1,
  //     name: '2019 Ford Mustang',
  //     image:
  //       'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
  //     features: [],
  //     price: 26395
  //   },
  //   additionalFeatures: [
  //     { id: 1, name: 'V-6 engine', price: 1500 },
  //     { id: 2, name: 'Racing detail package', price: 1500 },
  //     { id: 3, name: 'Premium sound system', price: 500 },
  //     { id: 4, name: 'Rear spoiler', price: 250 }
  //   ],
  //   additionalPrice: 0
  // };

  const removeFeature = item => {
    dispatch({type: REMOVE_FEATURE, payload: item});
  };

  const addFeature = item => {
    dispatch({type: ADD_FEATURE, payload: item});
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures addFeature={addFeature} />
        <Total />
      </div>
      <div className="box">
        <AdditionalFeatures removeFeature={removeFeature} />
      </div>
    </div>
  );
};

export default App;
