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

function* getCanvassingListByNameRequest({data}) {
  yield handleApiRequest({
    data,
    route: 'api/canvassing/searchcanvassinglists',
    verb: 'POST',
    successMessage: 'CANVASSING LIST BY NAME ',
  });
}

export function* getCanvassingListByNameRequestSaga() {
  yield takeLatest(ACTION_TYPES.CANASSING_BY_NAME.GET, getCanvassingListByNameRequest);
}