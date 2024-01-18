import {takeLatest, put} from '@redux-saga/core/effects';
import {ACTION_TYPES} from '../actions/actionTypes';
import {setJoinCampaign, setJoinedCampaign} from '../actions/campaings.actions';
import { ApiCall } from '../../utils/apiService';

function* handleApiRequest({
  data,
  route,
  verb,
  navigateTo,
  successMessage,
  successAction,
}) {
  try {
    if (data?.setLoading) data.setLoading(true);
    const headers = data?.token? {Authorization: `${data?.payload?.role} Bearer ` + data?.token} : {};

    const res = yield ApiCall({body: data?.payload, route, verb, headers});
    const {status, response} = res;

    const handleCommonLogic = () => {
      if (data?.setLoading) data.setLoading(false);
      if (data?.ToastMessageLight) data.ToastMessageLight(response?.message);
    };

    switch (status) {
      case 200:
        console.log(`${successMessage} SUCCESSFUL`, response);
        if (successAction && response?.success) yield put(successAction(response));
        if (navigateTo) navigateTo();
        handleCommonLogic();
        break;

      default:
        console.log(`${successMessage} FAILED`, res);
        handleCommonLogic();
    }
  } catch (e) {
    console.error(e);
  } finally {
    if (data?.setLoading) data.setLoading(false);
  }
}

function* joinCampaignRequest({data}) {
  yield handleApiRequest({
    data,
    route: 'api/teammember/joincampaign',
    verb: 'POST',
    successMessage: 'JOIN CAMPAIGN',
    navigateTo: data?.onSuccessJoinCampaign
  });
}

export function* joinCampaignRequestSaga() {
  yield takeLatest(ACTION_TYPES.JOIN_CAMPAIGN.GET, joinCampaignRequest);
}

function* joinedCampaignRequest({data}) {
  yield handleApiRequest({
    data,
    route: 'api/teammember/getjoinedcampaigns',
    verb: 'POST',
    successMessage: 'JOINED CAMPAIGN',
    successAction: setJoinedCampaign,
  });
}

export function* joinedCampaignRequestSaga() {
  yield takeLatest(ACTION_TYPES.JOINED_CAMPAIGN.GET, joinedCampaignRequest);
}
