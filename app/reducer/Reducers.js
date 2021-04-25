import { combineReducers } from 'redux';
import {
  SPLASH,
  PROFILE,
  QUESTIONNAIRE,
  HOME,
} from './Types';

const INITIAL_STATE_APP = {
  current: [],
  profile: null,
  possible: [
    SPLASH,
    PROFILE,
    QUESTIONNAIRE,
    HOME
  ]
};

const reducer = (state = INITIAL_STATE_APP, action) => {
  switch (action.type) {
    case PROFILE:
      const current = state.current;
      current.push(action.type);
      return Object.assign({}, state, {
        current: current
      });
    case QUESTIONNAIRE:
      const currentQ = state.current;
      currentQ.push(action.type);
      return Object.assign({}, state, {
        current: currentQ,
        profile: action.userType
      });
    case HOME:
      const currentH = state.current;
      currentH.push(action.type);
      return Object.assign({}, state, {
        current: currentH,
        profile: action.userType
      });


    default:
      return state;
  }
};

export default combineReducers({
  generalStatus: reducer
});
