import {
  _TO_PROFILE
} from './Types';

export const changeToProfile = indexView => {
  {
    type: _TO_PROFILE,
    payload: indexView,
  }
};
