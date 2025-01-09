// Reducer.jsx

import { INCREMENT, DECREMENT, RESET, SET_STEP } from './Actions';

const initialState = {
  count: 0,
  incrementCount: 0,
  decrementCount: 0,
  resetCount: 0,
  totalOperations: 0,
  step: 1,
  lastOperation: 'None',
  ana:0
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + state.step,
        incrementCount: state.incrementCount + 1,
        totalOperations: state.totalOperations + 1,
        lastOperation: 'Incrémentation',
      };
      case RESET:
        return {
          ...state,
          count: 0,
          resetCount: state.resetCount + 1,
          totalOperations: state.totalOperations + 1,
          lastOperation: 'Mise à Zéro',
        };  
    case DECREMENT:
      return {
        ...state,
        count: state.count - state.step,
        decrementCount: state.decrementCount + 1,
        totalOperations: state.totalOperations + 1,
        lastOperation: 'Décrémentation',
      };

    case SET_STEP:
      return {
        ...state,
        step: action.payload,
      };
    default:
      return state;
  }
};

export default counterReducer;