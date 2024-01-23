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
  JOINED_CAMPAIGN: createAsyncActionTypes('JOINED_CAMPAIGN'),
  CURRENT_CAMPAIGN: createAsyncActionTypes('CURRENT_CAMPAIGN'),
  VOTER_CHECK_DATA: createAsyncActionTypes('VOTER_CHECK_DATA'),
  VOTER_CHECK_DATA_BY_ADMIN: createAsyncActionTypes('VOTER_CHECK_DATA_BY_ADMIN'),
  VOTER_LIST: createAsyncActionTypes('VOTER_LIST'),
  CAMPAIGN_TAGS: createAsyncActionTypes('CAMPAIGN_TAGS'),
  CUSTOM_TAGS: createAsyncActionTypes('CUSTOM_TAGS'),
  SURVEY_LIST: createAsyncActionTypes('SURVEY_LIST'),
  SCRIPT: createAsyncActionTypes('SCRIPT'),
  SCRIPT_ID: createAsyncActionTypes('SCRIPT_ID'),
  CURRENT_VOTER: createAsyncActionTypes('CURRENT_VOTER'),
  UNDONE_VOTERS: createAsyncActionTypes('UNDONE_VOTERS'),
  VOTERS_TAG: createAsyncActionTypes('VOTERS_TAG'),
  UPDATE_VOTER_INFO: createAsyncActionTypes('UPDATE_VOTER_INFO'),
  PHONE_BANK_RECORDS: createAsyncActionTypes('PHONE_BANK_RECORDS')
};