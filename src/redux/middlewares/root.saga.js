import {all} from 'redux-saga/effects';
import {
  verifyOTPRequestSaga,
  loginRequestSaga,
  registerdRequestSaga,
  newOTPRequestSaga,
} from './auth.saga';
import {joinCampaignRequestSaga} from './campaign.saga';

export function* rootSaga() {
  yield all([
    loginRequestSaga(),
    registerdRequestSaga(),
    verifyOTPRequestSaga(),
    joinCampaignRequestSaga(),
    newOTPRequestSaga(),
  ]);
}
