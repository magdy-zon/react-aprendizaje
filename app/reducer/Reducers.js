import { combineReducer } = from 'redux';
import {
  _TO_PROFILE
} from './Types';

const INITIAL_STATE_APP = {
  current: [],
  possible: [
    'SPLASH',
    'PROFILE',
    'QUESTIONNAIRE',
    'HOME'
  ]
};

const reducer = (state = INITIAL_STATE_APP, action) => {
  switch (action.type) {
    case '_TO_PROFILE':
      const {
        current,
        possible,
      } = state;

      const nextView = possible.splice(action.payload, 1);

      current.push(nextView);

      const actualView = { current, possible }

      return actualView;
    default:
      return state
  }
};

export default combineReducer({
  generalStatus: reducer
});
