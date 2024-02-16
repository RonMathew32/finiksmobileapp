import React, {useState, useMemo, useCallback} from 'react';
import {Image, SafeAreaView, StyleSheet} from 'react-native';
import VoterProfileForm from '../../components/VoterProfileForm';
import VoterHeader from '../../components/Headers/VoterHeader';
import useReduxStore from '../../hooks/useReduxStore';
import {
  setCurrentVoter,
  updateVoterInfo,
} from '../../redux/actions/voters.actions';
import {ToastMessageLight} from '../../utils/DisplayMessage';
import LoadingScreen from '../../components/GlobalComponent/LoadingScreen';
import {hp, wp} from '../../theme/dimensions';
import {logo} from '../../theme/images';
import {useRoute} from '@react-navigation/native';
import {COLORS} from '../../theme/colors';
import KeyboardAvoidingViewWrapper from '../../components/GlobalComponent/KeyboardAvoidingViewWrapper';

const UpdateVoterInfo = () => {
  const {params} = useRoute();
  const {dispatch, loading, setLoading, token, user, currentVoter} =
    useReduxStore();

  const [voterInfo, setVoterInfo] = useState({});

  const onPressSave = useCallback(() => {
    if (!params?.canvass) {
      delete voterInfo?.preferredName;
      dispatch(
        updateVoterInfo({
          payload: voterInfo,
          setLoading,
          token,
          ToastMessageLight,
          role: user?.role,
        }),
      );
      dispatch(
        setCurrentVoter({
          ...currentVoter,
          FIRSTNAME: voterInfo?.firstName,
          LASTNAME: voterInfo?.lastName,
          ADDRESS: voterInfo?.address,
          PHONE_NUM: voterInfo?.phoneNumber,
          MOBILE_NUM: voterInfo?.mobileNumber,
          EMAIL: voterInfo?.email,
        }),
      );
    }
  }, [
    params?.canvass,
    voterInfo,
    dispatch,
    setLoading,
    token,
    ToastMessageLight,
    user?.role,
    currentVoter,
  ]);

  const headerTitle = useMemo(
    () => (params?.canvass ? 'Add New Voter' : 'Update Voter Info'),
    [params?.canvass],
  );

  return loading ? (
    <LoadingScreen />
  ) : (
    <SafeAreaView style={styles.container}>
      <VoterHeader
        title={headerTitle}
        rightTitle="Save"
        paddingBottom={0}
        onPressRight={onPressSave}
        onPressLeft={() => console.log('onPressLeft')}
        enableBack={true}
      />
      <KeyboardAvoidingViewWrapper>
        <VoterProfileForm
          onSaveData={setVoterInfo}
          userData={currentVoter}
          canvass={params?.canvass}
        />
        <Image source={logo} style={styles.logo} resizeMode="contain" />
      </KeyboardAvoidingViewWrapper>
    </SafeAreaView>
  );
};

export default UpdateVoterInfo;

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
