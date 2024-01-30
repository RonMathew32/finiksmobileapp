import {put, takeLatest } from '@redux-saga/core/effects';
import { ACTION_TYPES } from '../actions/actionTypes';
import { setLogin } from '../actions/auth.actions';
import { ApiCall } from '../../utils/apiService';
import { STRINGS } from '../../constants/strings';

function* handleApiRequest({
  data,
  route,
  verb,
  successMessage,
  successAction,
  onSuccess,
  navigateToOTP,
  navigationToLogin,
  onOTPFails,
  onSentOTP,
}) {
  try {
    if (data?.setLoading) data.setLoading(true);

    const headers = data?.token? {Authorization: `${data?.role} Bearer ` + data?.token} : {};

    const res = yield ApiCall({ body: data?.payload, route, verb, headers });
    const { status, response } = res;

    const handleCommonLogic = () => {
      if (data?.setLoading) data.setLoading(false);
      if (data?.ToastMessageLight) data.ToastMessageLight(response?.message);
    };

    switch (status) {
      case 200:
        console.log(`${successMessage} SUCCESSFUL`, response);
        if (successAction && response?.success) yield put(successAction(response));

        if (navigateToOTP && response?.message === STRINGS.TEXT_OTP_SENT_TO_EMAIL) {
          navigateToOTP();
        }
        if (onOTPFails && response?.message === STRINGS.TEXT_OTP_WRONG) {
          onOTPFails(true);
        }
        if (onSuccess && response?.success) {
          onSuccess();
        }
        if (navigationToLogin && response?.message === STRINGS.TEXT_EMAIL_VERIFIED) {
          navigationToLogin();
        }
        if (onSentOTP && response?.message === STRINGS.TEXT_NEW_OTP_SENT) {
          onSentOTP(false);
        }
        handleCommonLogic();
        break;

      default:
        console.log(`${successMessage} FAILED`, res);
        handleCommonLogic();
    }
  } catch (e) {
    console.error(e);
    if (data?.ToastMessageLight) data.ToastMessageLight('Network request failed');
  } finally {
    if (data?.setLoading) data.setLoading(false);
  }
}


function* loginRequest({ data }) {
  yield handleApiRequest({
    data,
    route: 'api/teammember/loginteammember',
    verb: 'POST',
    successMessage: 'LOGIN',
    successAction: setLogin,
  });
}

export function* loginRequestSaga() {
  yield takeLatest(ACTION_TYPES.LOGIN.GET, loginRequest);
}

function* registeredRequest({ data }) {
  yield handleApiRequest({
    data,
    route: 'api/teammember/registerteammember',
    verb: 'POST',
    successMessage: 'REGISTERED',
    navigateToOTP: data?.navigateToOTPVerification,
  });
}

export function* registerdRequestSaga() {
  yield takeLatest(ACTION_TYPES.REGISTERED.GET, registeredRequest);
}

function* verifyOTPRequest({ data }) {
  yield handleApiRequest({
    data,
    route: 'api/teammember/emailverify',
    verb: 'POST',
    successMessage: 'OTP VERIFY',
    navigationToLogin: data?.navigationToLogin,
    onOTPFails: data?.setResendOTP
  });
}

export function* verifyOTPRequestSaga() {
  yield takeLatest(ACTION_TYPES.VERIFY_OTP.GET, verifyOTPRequest);
}

function* newOTPRequest({ data }) {
  yield handleApiRequest({
    data,
    route: 'api/teammember/newotp',
    verb: 'POST',
    successMessage: 'NEW OTP',
    onSentOTP: data?.setResendOTP
  });
}

export function* newOTPRequestSaga() {
  yield takeLatest(ACTION_TYPES.NEW_OTP.GET, newOTPRequest);
}

function* updateUserProfileRequest({ data }) {
  yield handleApiRequest({
    data,
    route: 'api/campaign/updateprofile',
    verb: 'POST',
    successMessage: 'UPDATE PROFILE',
    onSuccess: data?.onSuccess
  });
}

export function* updateUserProfileRequestSaga() {
  yield takeLatest(ACTION_TYPES.USER_PROFILE.UPDATE, updateUserProfileRequest);
}