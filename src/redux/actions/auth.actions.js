import { ACTION_TYPES } from './actionTypes';

export const getLogin = data => ({ type: ACTION_TYPES.LOGIN.GET, data });

export const setLogin = data => ({ type: ACTION_TYPES.LOGIN.SET, data });

export const getRegsitered = data => ({ type: ACTION_TYPES.REGISTERED.GET, data });

export const getVerifyOTP = data => ({type: ACTION_TYPES.VERIFY_OTP.GET, data})

export const getNewOTP = data => ({type: ACTION_TYPES.NEW_OTP.GET, data})

export const getUserData = data => ({ type: ACTION_TYPES.USER_DATA.GET, data });

export const setUserData = data => ({ type: ACTION_TYPES.USER_DATA.SET, data });

export const updateBiometrics = data => ({ type: ACTION_TYPES.BIOMETRICS.UPDATE, data });

export const updateUserProfile = data => ({ type: ACTION_TYPES.USER_PROFILE.UPDATE, data });

export const setLogout = data => ({ type: ACTION_TYPES.LOGOUT.SET, data });


