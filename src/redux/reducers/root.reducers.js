import {combineReducers} from 'redux';
import AuthReducer from './auth.reducers';
import CampaignReducer from './campaign.reducers';
import VotersReducer from './voters.reducers';
import PhoneBankRecordsReducer from './phonebank.reducers';
import CanvassingReducer from './canvassing.reducers';

export const rootReducer = combineReducers({
  authRed: AuthReducer,
  campRed: CampaignReducer,
  voteRed: VotersReducer,
  phoneBankRed: PhoneBankRecordsReducer,
  canvassingRed: CanvassingReducer
});
