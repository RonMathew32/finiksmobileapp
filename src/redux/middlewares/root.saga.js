import {all} from 'redux-saga/effects';
import {
  verifyOTPRequestSaga,
  loginRequestSaga,
  registerdRequestSaga,
  newOTPRequestSaga,
} from './auth.saga';
import {joinCampaignRequestSaga, joinedCampaignRequestSaga} from './campaign.saga';
import { getCampaignTagsRequestSaga, getCustomTagsRequestSaga, getScriptRequestSaga, getSurveyListRequestSaga, getVoterCheckDataByAdminRequestSaga, getVoterCheckDataRequestSaga, getVoterListRequestSaga, updateVoterInfoRequestSaga } from './voters.saga';
import { getPhoneBankRecordsRequestSaga } from './phonebank.saga';

export function* rootSaga() {
  yield all([
    loginRequestSaga(),
    registerdRequestSaga(),
    verifyOTPRequestSaga(),
    newOTPRequestSaga(),
    joinCampaignRequestSaga(),
    joinedCampaignRequestSaga(),
    getVoterListRequestSaga(),
    getCampaignTagsRequestSaga(),
    getSurveyListRequestSaga(),
    getScriptRequestSaga(),
    getCustomTagsRequestSaga(),
    updateVoterInfoRequestSaga(),
    getPhoneBankRecordsRequestSaga()    
  ]);
}
