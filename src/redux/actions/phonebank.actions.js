import { ACTION_TYPES } from './actionTypes';

export const getPhoneBankRecords = data => ({ type: ACTION_TYPES.PHONE_BANK_RECORDS.GET, data });

export const setPhoneBankRecords = data => ({ type: ACTION_TYPES.PHONE_BANK_RECORDS.SET, data });

