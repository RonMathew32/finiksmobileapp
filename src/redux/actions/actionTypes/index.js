const createAsyncActionTypes = (baseActionType) => ({
  GET: `GET_${baseActionType}`,
  SET: `SET_${baseActionType}`,
  UPDATE: `UPDATE_${baseActionType}`,
});

export const ACTION_TYPES = {
  LOGIN: createAsyncActionTypes('LOGIN'),
  REGISTERED: createAsyncActionTypes('REGISTERED'),
  VERIFY_OTP: createAsyncActionTypes('VERIFY_OTP'),
  NEW_OTP: createAsyncActionTypes('NEW_OTP'),
  BIOMETRICS: createAsyncActionTypes('BIOMETRICS'),
  USER_DATA: createAsyncActionTypes('USER_DATA'),
  LOGOUT: createAsyncActionTypes('LOGOUT'),
  JOIN_CAMPAIGN: createAsyncActionTypes('JOIN_CAMPAIGN'),
  CURRENT_CAMPAIGN: createAsyncActionTypes('CURRENT_CAMPAIGN'),
};