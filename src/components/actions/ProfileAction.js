import * as actionTypes from './types';

export const genderChanged = (gender) => {
  return {
    type: actionTypes.GENDER_CHANGED,
    payload: gender
  };
}

export const ageChanged = (age) => {
  return {
    type: actionTypes.AGE_CHANGED,
    payload: age
  };
}

export const heightChanged = (height) => {
  return {
    type: actionTypes.HEIGHT_CHANGED,
    payload: height
  };
}

export const weightChanged = (weight) => {
  return {
    type: actionTypes.WEIGHT_CHANGED,
    payload: weight
  };
}

export const creatinineChanged = (creatinine) => {
  return {
    type: actionTypes.CREATININE_CHANGED,
    payload: creatinine
  };
}

export const calculateScore = (score) => {
  const payload = {
    score: score,
    severity: score > 3 ? "high" : "low"
  };

  return {
    type: actionTypes.CALCULATE_SCORE,
    payload: payload
  };
}
