import React, {useState, useCallback} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import VoterHeader from '../../components/PhoneBanking/VoterCheck/VoterHeader';
import PhotoPicker from '../../components/Profile/PhotoPicker';
import VoterProfileForm from '../../components/Profile/VoterProfileForm';
import useReduxStore from '../../hooks/useReduxStore';
import {logo} from '../../theme/images';
import {hp, normalize, wp} from '../../theme/dimensions';
import {
  setLogout,
  setUserData,
  updateUserPassword,
  updateUserProfile,
} from '../../redux/actions/auth.actions';
import {ToastMessageLight} from '../../components/GlobalComponent/DisplayMessage';
import LoadingScreen from '../../components/GlobalComponent/LoadingScreen';
import AppButton from '../../components/AppButton';
import KeyboardAvoidingViewWrapper from '../../components/KeyboardAvoidingViewWrapper';
import {COLORS} from '../../theme/colors';
import UpdatePassword from '../../components/Modals/UpdatePassword';
import { setCurrentCampaign, setEmptyCampaign, setJoinCampaign } from '../../redux/actions/campaings.actions';
import { setEmptyPhoneBank, setPhoneBankRecords, setRecord } from '../../redux/actions/phonebank.actions';
import { setCampaignTags, setCurrentVoter, setCustomTags, setEmptyVoters, setScript, setScriptId, setSurveyList, setUndoneVoters, setVoterList, setVotersTag } from '../../redux/actions/voters.actions';

const Profile = () => {
  const {user, dispatch, token, loading, setLoading, campaignId} =
    useReduxStore();
  const [userInfo, setUserInfo] = useState({});
  const [userImage, setUserImage] = useState(user?.campaignLogo);
  const [isVisisbleChangePass, setIsVisisbleChangePass] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [passLoading, setPassLoading] = useState(false);
  const commonAPIPayload = {
    role: user?.role,
    ToastMessageLight,
    token,
  };
  const onPressSave = useCallback(() => {
    const {
      preferredName,
      listId,
      mobileNumber,
      voterId,
      campaignId,
      ...filteredUserInfo
    } = userInfo;
    filteredUserInfo.teamLogin = user?.teamLogin;
    filteredUserInfo.id = user?.id;
    filteredUserInfo.campaignLogo = userImage ?? '';
    dispatch(
      updateUserProfile({
        ...commonAPIPayload,
        payload: filteredUserInfo,
        setLoading,
        onSuccess: () => onSuccess(filteredUserInfo),
      }),
    );
  }, [
    userInfo,
    user,
    userImage,
    token,
    setLoading,
    dispatch,
    ToastMessageLight,
  ]);

  const onSuccess = useCallback(
    updatedData => {
      dispatch(
        setUserData({
          ...user,
          ...updatedData,
        }),
      );
    },
    [dispatch, user],
  );

  const onSaveToUpdatePass = useCallback(
    val => {
      if (val?.oldPassword == '') {
        setErrorMsg('Field must not be empty!');
      } else if (val?.newPassword == '') {
        setErrorMsg('Field must not be empty!');
      } else if (val?.newPassword?.length < 8) {
        setErrorMsg('New Password length must be greater than 8 characters');
      } else {
        const payload = {
          id: campaignId,
          passwordUpdate: {
            oldPassword: val?.oldPassword,
            newPassword: val?.newPassword,
          },
          teamLogin: 'true',
        };
        console.log(payload, 'payload');
        dispatch(
          updateUserPassword({
            ...commonAPIPayload,
            payload,
            setLoading: setPassLoading,
            onSuccess: ()=>setIsVisisbleChangePass(false)
          }),
        );
      }
    },
    [dispatch, user, token, campaignId],
  );

  const onPressLogout = useCallback(()=>{
    dispatch(setEmptyCampaign())
    dispatch(setEmptyPhoneBank())
    dispatch(setEmptyVoters());
    dispatch(setLogout())
  },[dispatch])

  return loading ? (
    <LoadingScreen />
  ) : (
    <SafeAreaView style={styles.container}>
      <VoterHeader
        title="Profile"
        rightTitle="Save"
        onPressRight={onPressSave}
        onPressLeft={() => console.log('onPressLeft')}
        enableBack={true}
      />
      <PhotoPicker setImage={setUserImage} user={user} />
      <KeyboardAvoidingViewWrapper>
        <VoterProfileForm onSaveData={setUserInfo} userData={user} />
        <TouchableOpacity onPress={() => setIsVisisbleChangePass(true)}>
          <Text style={styles.changePass}>Change Password</Text>
        </TouchableOpacity>
        <AppButton title="Logout" onPress={onPressLogout} />
        <Image source={logo} style={styles.logo} resizeMode="contain" />
      </KeyboardAvoidingViewWrapper>
      {isVisisbleChangePass && (
        <UpdatePassword
          isVisible={isVisisbleChangePass}
          onClose={() => setIsVisisbleChangePass(false)}
          onSave={onSaveToUpdatePass}
          errorMsg={errorMsg}
          setErrorMsg={setErrorMsg}
          loading={passLoading}
        />
      )}
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  changePass: {
    color: COLORS.primary,
    textAlign: 'center',
    marginTop: hp(2),
    padding: 5,
    fontSize: normalize(14),
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  logo: {
    width: wp(19),
    height: hp(6),
    marginTop: hp(3),
    alignSelf: 'center',
  },
});
