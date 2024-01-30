import React, { useState, useCallback } from 'react';
import { Image, SafeAreaView, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import VoterHeader from '../../components/PhoneBanking/VoterCheck/VoterHeader';
import PhotoPicker from '../../components/Profile/PhotoPicker';
import VoterProfileForm from '../../components/Profile/VoterProfileForm';
import useReduxStore from '../../hooks/useReduxStore';
import { logo } from '../../theme/images';
import { hp, wp } from '../../theme/dimensions';
import { setLogout, setUserData, updateUserProfile } from '../../redux/actions/auth.actions';
import { ToastMessageLight } from '../../components/GlobalComponent/DisplayMessage';
import LoadingScreen from '../../components/GlobalComponent/LoadingScreen';
import AppButton from '../../components/AppButton';
import KeyboardAvoidingViewWrapper from '../../components/KeyboardAvoidingViewWrapper';
import { COLORS } from '../../theme/colors';

const Profile = () => {
  const { user, dispatch, token, loading, setLoading } = useReduxStore();
  const [userInfo, setUserInfo] = useState({});
  const [userImage, setUserImage] = useState(user?.campaignLogo);

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
        payload: filteredUserInfo,
        token,
        setLoading,
        role: user?.role,
        ToastMessageLight,
        onSuccess: () => onSuccess(filteredUserInfo),
      }),
    );
  }, [userInfo, user, userImage, token, setLoading, dispatch, ToastMessageLight]);

  const onSuccess = useCallback((updatedData) => {
    dispatch(setUserData({
      ...user,
      ...updatedData,
    }));
  }, [dispatch, user]);

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
        <AppButton title="Logout" onPress={() => dispatch(setLogout(null))} />
        <Image source={logo} style={styles.logo} resizeMode="contain" />
        </KeyboardAvoidingViewWrapper>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
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
