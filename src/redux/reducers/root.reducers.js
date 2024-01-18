import {combineReducers} from 'redux';
import AuthReducer from './auth.reducers';
import CampaignReducer from './campaign.reducers';
import VotersReducer from './voters.reducers';
import PhoneBankRecordsReducer from './phonebank.reducers';

export const rootReducer = combineReducers({
  authRed: AuthReducer,
  campRed: CampaignReducer,
  voteRed: VotersReducer,
  phoneBankRed: PhoneBankRecordsReducer
});
