import {ACTION_TYPES} from '../actions/actionTypes';

const initialState = {
  user: null,
  token: null,
  biometric: false,
  userId: null,
};

const AuthReducer = (state = initialState, action) => {
  const {type, data} = action;
  switch (type) {
    case ACTION_TYPES.LOGIN.SET:
      return {
        ...state,
        token: data.access_token,
        user: data,
      };

    case ACTION_TYPES.USER_DATA.SET:
      return {
        ...state,
        user: data,
      };

    case ACTION_TYPES.LOGOUT.SET:
      return {
        ...state,
        userData: null,
        userToken: null,
      };

    case ACTION_TYPES.BIOMETRICS.UPDATE:
      return {
        ...state,
        biometric: true,
      };

    default:
      return state;
  }
};

export default AuthReducer;
