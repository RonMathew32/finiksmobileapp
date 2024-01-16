import {combineReducers} from 'redux';
import AuthReducer from './auth.reducers';
import CampaignReducer from './campaign.reducers';

export const rootReducer = combineReducers({
  authRed: AuthReducer,
  campRed: CampaignReducer
});
