// Export Two Things - initialState, reducer fn
import { ADD_FEATURE, REMOVE_FEATURE } from "../actions";

export const initialState = {
  car: {
    id: 1,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: [],
    price: 26395
  },
  additionalFeatures: [
    { id: 1, name: 'V-8 engine', price: 2500, type: 'engine' },
    // { id: 2, name: 'V-6 engine', price: 1500, type: 'engine' },
    { id: 3, name: 'Premium leather seats', price: 1500, type: 'interior' },
    { id: 4, name: 'Premium sound system', price: 500, type: 'interior', video: 'https://www.youtube.com/watch?v=6uLUPw2pLI0' },
    { id: 5, name: 'Racing detail package', price: 1500, type: 'detail', video: 'https://www.youtube.com/watch?v=WwWijgSr7Qo&t=30s' },
    { id: 6, name: 'Rear spoiler', price: 250, type: 'detail' }
  ],
  additionalPrice: 0
};

export const carReducer = (state = initialState, action) => {
  console.log('carReducer:', state, action);

  switch (action.type) {
    case ADD_FEATURE:
      const featureToAdd = state.additionalFeatures.filter(f => {
        return (f.id === action.payload);
      })[0];

      console.log('ADD_FEATURE featureToAdd: ', featureToAdd);
      console.log('ADD_FEATURE state.car.features: ', state.car.features);

      return {
        ...state,
        car: {
          ...state.car,
          features: [...state.car.features, featureToAdd]
        },
        additionalFeatures: state.additionalFeatures.filter(a => a.id !== action.payload),
        additionalPrice: state.additionalPrice += featureToAdd.price
      }

    case REMOVE_FEATURE:
      const featureToRemove = state.car.features.filter(f => {
        return (f.id === action.payload);
      })[0];

      console.log('ADD_FEATURE featureToRemove: ', featureToRemove);
      console.log('ADD_FEATURE state.car.features: ', state.car.features);

      return {
        ...state,
        car: {
          ...state.car,
          features: state.car.features.filter(a => a.id !== featureToRemove.id)
        },
        additionalFeatures: [...state.additionalFeatures, featureToRemove],
        additionalPrice: state.additionalPrice -= featureToRemove.price
      }

    default:
      return state;
  }
};
