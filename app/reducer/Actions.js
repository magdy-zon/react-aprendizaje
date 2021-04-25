import {
  SPLASH,
  PROFILE,
  QUESTIONNAIRE,
  HOME
} from './Types';

export const changeToProfile = () => {
  return {
    type: PROFILE,
  }
};

export const changeToQuizz = (type, userType) => {
  return {
    type: QUESTIONNAIRE,
    userType: userType
  }
};

export const changeToHome = (type, userType) => {
  return {
    type: HOME,
    userType: userType
  }
};
