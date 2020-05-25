import * as actionTypes from './types';

export const ageErrorChanged = (bool) => {
  return {
    type: actionTypes.AGE_ERROR,
    payload: bool
  };
}

export const weightErrorChanged = (bool) => {
  return {
    type: actionTypes.WEIGHT_ERROR,
    payload: bool
  };
}

export const heightErrorChanged = (bool) => {
  return {
    type: actionTypes.HEIGHT_ERROR,
    payload: bool
  };
}

export const creatiningErrorChanged = (bool) => {
  return {
    type: actionTypes.CREATININE_ERROR,
    payload: bool
  };
}
