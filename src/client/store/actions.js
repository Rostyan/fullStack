import {ACTION_CHANGE_FIRST_NAME, ACTION_CHANGE_SECOND_NAME, ACTION_CHANGE_EMAIL_PASSWORD, ACTION_IS_AUTHORIZED} from '../index';


export const changeFirstName = (newFirstName) => {
    return {
      type: ACTION_CHANGE_FIRST_NAME,
      payload: newFirstName
    }
}
export const changeSecondName = (newSecondName) => {
    return {
      type: ACTION_CHANGE_SECOND_NAME,
      payload: newSecondName
    }
}
export const changeEmailPassword = (newEmailPassword) => {
    return {
      type: ACTION_CHANGE_EMAIL_PASSWORD,
      payload: newEmailPassword
    }
}
export const changeIsAuthorized = (newIsAuthorized) => {
    return {
      type: ACTION_IS_AUTHORIZED,
      payload: newIsAuthorized
    }
}
