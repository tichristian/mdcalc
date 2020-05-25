import { combineReducers } from 'redux';
import Profile from './ProfileReducer';
import InputError from './InputErrorReducer';

export default combineReducers({
  profile: Profile,
  inputError: InputError
});
