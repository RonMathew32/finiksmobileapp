import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
// import PhotoPicker from '../../components/Profile/PhotoPicker';
import VoterProfileForm from '../../components/Profile/VoterProfileForm';
import {hp, wp} from '../../theme/dimensions';
import {logo} from '../../theme/images';
import VoterHeader from '../../components/PhoneBanking/VoterCheck/VoterHeader';
import useReduxStore from '../../hooks/useReduxStore';
import {setCurrentVoter, updateVoterInfo} from '../../redux/actions/voters.actions';
import {ToastMessageLight} from '../../components/GlobalComponent/DisplayMessage';
import LoadingScreen from '../../components/GlobalComponent/LoadingScreen';


const UpdateVoterInfo = () => {
  const [voterInfo, setVoterInfo] = useState({});
  const {dispatch, loading, setLoading, token, user, currentVoter} = useReduxStore();

  const onPressSave = () => {
    dispatch(
      updateVoterInfo({
        payload: voterInfo,
        setLoading,
        token,
        ToastMessageLight,
        role: user?.role,
      }),
    );
    dispatch(setCurrentVoter({
      ...currentVoter,
      FIRSTNAME: voterInfo?.firstName,
      LASTNAME: voterInfo?.lastName,
      ADDRESS: voterInfo?.address,
      PHONE_NUM: voterInfo?.phoneNumber,
      MOBILE_NUM: voterInfo?.mobileNumber,
      EMAIL: voterInfo?.email,
    }))
  };
  
  return loading ? (
    <LoadingScreen />
  ) : (
    <SafeAreaView style={styles.container}>
      <VoterHeader
        title="Update Voter Info"
        rightTitle="Save"
        paddingBottom={0}
        onPressRight={onPressSave}
        onPressLeft={true}
      />
      {/* <PhotoPicker /> */}
      <VoterProfileForm onSaveData={setVoterInfo} />
      <Image source={logo} style={styles.logo} resizeMode="contain" />
    </SafeAreaView>
  );
};

export default React.memo(UpdateVoterInfo);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logo: {
    width: wp(19),
    height: hp(6),
    marginTop: hp(3),
    alignSelf: 'center',
  },
});
