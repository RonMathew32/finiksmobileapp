import {ACTION_TYPES} from '../actions/actionTypes';

const initialState = {
  phoneBankRecords: [],
};

const PhoneBankRecordsReducer = (state = initialState, action) => {
  const {type, data} = action;

  switch (type) {
    case ACTION_TYPES.PHONE_BANK_RECORDS.SET:
      return {
        ...state,
        phoneBankRecords: data.records,
      };

    default:
      return state;
  }
};

export default PhoneBankRecordsReducer;
