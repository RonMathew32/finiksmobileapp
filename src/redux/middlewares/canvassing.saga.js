import {takeLatest, put} from '@redux-saga/core/effects';
import {ACTION_TYPES} from '../actions/actionTypes';
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
    const headers = data?.token? {Authorization: `${data?.role} Bearer ` + data?.token} : {};

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

function* getCanvassingSearchByNameRequest({data}) {
  yield handleApiRequest({
    data,
    route: 'api/canvassing/searchvotersforcanvassing',
    verb: 'POST',
    successMessage: 'CANVASSING SEARCH BY NAME ',
  });
}

export function* getCanvassingSearchByNameRequestSaga() {
  yield takeLatest(ACTION_TYPES.CANASSING_SEARCH_VOTER_BY_NAME.GET, getCanvassingSearchByNameRequest);
}

function* getCanvassingFiltersRequest({data}) {
  yield handleApiRequest({
    data,
    route: 'api/clients/getdistricts',
    verb: 'POST',
    successMessage: `CANVASSING ${data?.field} FILTERS`,
    successAction: data?.successAction
  });
}

export function* getCanvassingFiltersRequestSaga() {
  yield takeLatest(ACTION_TYPES.CANVASSING_FILTERS.GET, getCanvassingFiltersRequest);
}