import {
  SPLASH,
  PROFILE,
  QUESTIONNAIRE,
  HOME
} from './Types';

export const changeToProfile = (type, userType) => {
  return {
    type: PROFILE,
    userType: userType
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
