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
  USER_PROFILE: createAsyncActionTypes('USER_PROFILE'),
  USER_PASSWORD: createAsyncActionTypes('USER_PASSWORD'),
  JOIN_CAMPAIGN: createAsyncActionTypes('JOIN_CAMPAIGN'),
  JOINED_CAMPAIGN: createAsyncActionTypes('JOINED_CAMPAIGN'),
  CURRENT_CAMPAIGN: createAsyncActionTypes('CURRENT_CAMPAIGN'),
  VOTER_CHECK_DATA: createAsyncActionTypes('VOTER_CHECK_DATA'),
  VOTER_CHECK_DATA_BY_ADMIN: createAsyncActionTypes('VOTER_CHECK_DATA_BY_ADMIN'),
  VOTER_LIST: createAsyncActionTypes('VOTER_LIST'),
  WRONG_NUMBER: createAsyncActionTypes('WRONG_NUMBER'),
  SAVE_INTERACTION: createAsyncActionTypes('SAVE_INTERACTION'),
  CAMPAIGN_TAGS: createAsyncActionTypes('CAMPAIGN_TAGS'),
  CUSTOM_TAGS: createAsyncActionTypes('CUSTOM_TAGS'),
  SURVEY_LIST: createAsyncActionTypes('SURVEY_LIST'),
  SURVEY_TO_TAKE: createAsyncActionTypes('SURVEY_TO_TAKE'),
  SCRIPT: createAsyncActionTypes('SCRIPT'),
  RECORD: createAsyncActionTypes('RECORD'),
  SCRIPT_ID: createAsyncActionTypes('SCRIPT_ID'),
  CURRENT_VOTER: createAsyncActionTypes('CURRENT_VOTER'),
  UNDONE_VOTERS: createAsyncActionTypes('UNDONE_VOTERS'),
  VOTERS_TAG: createAsyncActionTypes('VOTERS_TAG'),
  UPDATE_VOTER_INFO: createAsyncActionTypes('UPDATE_VOTER_INFO'),
  PHONE_BANK_RECORDS: createAsyncActionTypes('PHONE_BANK_RECORDS'),
  CANASSING_BY_NAME: createAsyncActionTypes('CANASSING_BY_NAME'),

  //CLEAR
  LOGOUT: createAsyncActionTypes('LOGOUT'),
  EMPTY_CAMPAIGN: createAsyncActionTypes('EMPTY_CAMPAIGN'),
  EMPTY_PHONE_BANK: createAsyncActionTypes('EMPTY_PHONE_BANK'),
  EMPTY_VOTERS: createAsyncActionTypes('EMPTY_VOTERS'),
  EMPTY_CANVASSING: createAsyncActionTypes('EMPTY_CANVASSING')
};