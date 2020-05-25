import * as actionTypes from '../actions/types';

const INITIAL_STATE = {
  gender: '',
  age: '',
  weight: '',
  height: '',
  creatinine: '',
  score: '',
  severity: ''
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GENDER_CHANGED:
      return { ...state, gender: action.payload}
    case actionTypes.AGE_CHANGED:
      return { ...state, age: action.payload}
    case actionTypes.WEIGHT_CHANGED:
      return { ...state, weight: action.payload}
    case actionTypes.HEIGHT_CHANGED:
      return { ...state, height: action.payload}
    case actionTypes.CREATININE_CHANGED:
      return { ...state, creatinine: action.payload}
    case actionTypes.CALCULATE_SCORE:
      return {
        ...state,
        score: action.payload.score,
        severity: action.payload.severity
      }
    default:
      return state;
  }
};

export default reducer;
