import { takeLatest } from '@redux-saga/core/effects';
import { handleApiRequest } from '../../utils/apiService';
import { ACTION_TYPES } from '../actions/actionTypes';
import { setJoinCampaign } from '../actions/campaings.actions';

function* joinCampaignRequest({ data }) {
  yield handleApiRequest({
    data,
    route: '/api/teammember/getjoinedcampaigns',
    verb: 'POST',
    successMessage: 'JOIN CAMPAIGN',
    successAction: setJoinCampaign,
  });
}

export function* joinCampaignRequestSaga() {
  yield takeLatest(ACTION_TYPES.JOIN_CAMPAIGN.GET, joinCampaignRequest);
}