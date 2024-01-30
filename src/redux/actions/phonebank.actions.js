import { ACTION_TYPES } from './actionTypes';

export const getPhoneBankRecords = data => ({ type: ACTION_TYPES.PHONE_BANK_RECORDS.GET, data });

export const setPhoneBankRecords = data => ({ type: ACTION_TYPES.PHONE_BANK_RECORDS.SET, data });

export const setRecord = data => ({ type: ACTION_TYPES.RECORD.SET, data });

export const getWrongNumber = data => ({ type: ACTION_TYPES.WRONG_NUMBER.GET, data });

export const getSaveInteraction = data => ({ type: ACTION_TYPES.SAVE_INTERACTION.GET, data });

export const getSurveyToTake = data => ({ type: ACTION_TYPES.SURVEY_TO_TAKE.GET, data });

