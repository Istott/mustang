import { ADD_FEATURE, REMOVE_FEATURE } from "../actions/actions";

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };

export const Reducer = (state = initialState, action) => {
  console.log("action in the reducer: ", action);
  switch (action.type) {
    case REMOVE_FEATURE:
      return {
        ...state,
        car: {
            ...state.car, 
            features: state.car.features.filter(e => e.id !== action.payload),

            price: state.car.price - action.payload.removePrice
        }

      };
    // NEW CASE HERE
    case ADD_FEATURE:
      return {
        ...state,
        car: {
            ...state.car,
            features: [...state.car.features, action.payload.newFeature],

            price: state.car.price + action.payload.additionalPrice
        },
      };
    default:
      return state;
  }
};
