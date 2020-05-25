import * as actionTypes from '../actions/types';

const INITIAL_STATE = {
  ageError: false,
  weightError: false,
  heightError: false,
  creatinineError: false
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.AGE_ERROR:
      return { ...state, ageError: action.payload}
    case actionTypes.WEIGHT_ERROR:
      return { ...state, weightError: action.payload}
    case actionTypes.HEIGHT_ERROR:
      return { ...state, heightError: action.payload}
    case actionTypes.CREATININE_ERROR:
      return { ...state, creatinineError: action.payload}

    default:
      return state;
  }
};

export default reducer;
