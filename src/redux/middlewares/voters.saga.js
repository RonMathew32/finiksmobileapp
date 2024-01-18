import {takeLatest, put} from '@redux-saga/core/effects';
import {ACTION_TYPES} from '../actions/actionTypes';
import { ApiCall } from '../../utils/apiService';

function* handleCommonLogic(data) {
  if (data?.setLoading) data.setLoading(false);
  if (data?.ToastMessageLight) data.ToastMessageLight(response?.message);
}

function* handleApiRequest({
  data,
  route,
  verb,
  successMessage,
  successAction,
  onSuccess
}) {
  try {
    if (data?.setLoading) data.setLoading(true);
    const headers = data?.token? {Authorization: `${data?.role} Bearer ` + data?.token} : {};

    const res = yield ApiCall({body: data?.payload, route, verb, headers});
    const {status, response} = res;

    switch (status) {
      case 200:
        console.log(`${successMessage} SUCCESSFUL`, response);
        if (successAction && response?.success) yield put(successAction(response));
        if (onSuccess && response?.success) onSuccess();
        handleCommonLogic(data);
        break;

      default:
        console.log(`${successMessage} FAILED`, res);
        // if (onSuccess && response?.success) onSuccess();
        handleCommonLogic(data);
    }
  } catch (e) {
    console.error(e);
  } finally {
    if (data?.setLoading) data.setLoading(false);
  }
}


function* getVoterListRequest({data}) {
  yield handleApiRequest({
    data,
    route: `api/teammember/${data?.param}`,
    verb: 'POST',
    successMessage: `VOTER CHECK DATA VIA ${data?.param.toUpperCase()}`,
    onSuccess: data?.onSuccess,
    successAction: data?.successAction
  });
}

export function* getVoterListRequestSaga() {
  yield takeLatest(ACTION_TYPES.VOTER_LIST.GET, getVoterListRequest);
}

function* getCampaignTagsRequest({ data }) {
  yield handleApiRequest({
    data,
    route: `api/teammember/${data?.param}`,
    verb: 'POST',
    successMessage: `CAMPAIGN TAGS DATA VIA ${data?.param.toUpperCase()}`, // Adjust the successMessage as needed
    successAction: data?.successAction,
  });
}

export function* getCampaignTagsRequestSaga() {
  yield takeLatest(ACTION_TYPES.CAMPAIGN_TAGS.GET, getCampaignTagsRequest); // Adjust the action type as needed
}

function* getSurveyListRequest({data}) {
  yield handleApiRequest({
    data,
    route: `api/teammember/${data?.param}`,
    verb: 'POST',
    successMessage: `VOTER CHECK DATA VIA ${data?.param.toUpperCase()}`,
    successAction: data?.successAction
  });
}

export function* getSurveyListRequestSaga() {
  yield takeLatest(ACTION_TYPES.SURVEY_LIST.GET, getSurveyListRequest);
}

function* getScriptRequest({data}) {
  yield handleApiRequest({
    data,
    route: `api/teammember/${data?.param}`,
    verb: 'POST',
    successMessage: `VOTER CHECK DATA VIA ${data?.param.toUpperCase()}`,
    successAction: data?.successAction
  });
}

export function* getScriptRequestSaga() {
  yield takeLatest(ACTION_TYPES.SCRIPT.GET, getScriptRequest);
}

function* getCustomTagsRequest({data}) {
  yield handleApiRequest({
    data,
    route: `api/teammember/${data?.param}`,
    verb: 'GET',
    successMessage: `VOTER CHECK DATA BY ADMIN VIA ${data?.param.toUpperCase()}`,
    successAction: data?.successAction
  });
}

export function* getCustomTagsRequestSaga() {
  yield takeLatest(ACTION_TYPES.CUSTOM_TAGS.GET, getCustomTagsRequest);
}