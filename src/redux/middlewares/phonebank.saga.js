import {takeLatest, put} from '@redux-saga/core/effects';
import {ACTION_TYPES} from '../actions/actionTypes';
import { ApiCall } from '../../utils/apiService';
import { setPhoneBankRecords } from '../actions/phonebank.actions';

function* handleApiRequest({
  data,
  route,
  verb,
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
      if (data?.ToastMessageDark) data.ToastMessageDark(response?.message);
    };

    switch (status) {
      case 200:
        console.log(`${successMessage} SUCCESSFUL`, response);
        if (successAction && response?.success) yield put(successAction(response));
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

function* getPhoneBankRecordsRequest({data}) {
  yield handleApiRequest({
    data,
    route: `api/teammember/getteamphonebankrecords`,
    verb: 'POST',
    successMessage: 'PHONE BANK RECORDS',
    successAction: setPhoneBankRecords
  });
}

export function* getPhoneBankRecordsRequestSaga() {
  yield takeLatest(ACTION_TYPES.PHONE_BANK_RECORDS.GET, getPhoneBankRecordsRequest);
}
