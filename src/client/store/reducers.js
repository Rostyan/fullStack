import {ACTION_CHANGE_FIRST_NAME, ACTION_CHANGE_SECOND_NAME, ACTION_CHANGE_EMAIL_PASSWORD, ACTION_IS_AUTHORIZED} from '../index';

const initialState = {
    firstName: 'Oleg',
    secondName: 'Pavliv',
    logins: [],
    isAuthorized: true
  };
  
  
  export const rootReducer = (state = initialState, action) => {
    switch(action.type){
      case ACTION_CHANGE_FIRST_NAME:
        return { ...state, firstName: action.payload};
      case ACTION_CHANGE_SECOND_NAME:
        return { ...state, secondName: action.payload};
      case ACTION_CHANGE_EMAIL_PASSWORD:
        return { ...state, logins: action.payload};
      case ACTION_IS_AUTHORIZED:
        return { ...state, isAuthorized: action.payload};
    }
    return state;
  };