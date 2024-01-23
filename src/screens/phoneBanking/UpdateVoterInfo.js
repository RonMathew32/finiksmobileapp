import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import PhotoPicker from '../../components/Profile/PhotoPicker';
import VoterProfileForm from '../../components/Profile/VoterProfileForm';
import {hp, wp} from '../../theme/dimensions';
import {logo} from '../../theme/images';
import VoterHeader from '../../components/PhoneBanking/VoterCheck/VoterHeader';
import useReduxStore from '../../hooks/useReduxStore';
import {updateVoterInfo} from '../../redux/actions/voters.actions';
import {ToastMessageLight} from '../../components/GlobalComponent/DisplayMessage';
import LoadingScreen from '../../components/GlobalComponent/LoadingScreen';
import useVoterCheck from '../../hooks/useVoterCheck';
import routes from '../../constants/routes';

const UpdateVoterInfo = ({navigation}) => {
  const [voterInfo, setVoterInfo] = useState({});
  const {dispatch, loading, setLoading, token, user} = useReduxStore();
  const { GetUsersData } = useVoterCheck()


  const onPressSave = () => {
    dispatch(
      updateVoterInfo({
        payload: voterInfo,
        setLoading,
        token,
        ToastMessageLight,
        role: user?.role,
        onSuccess: onSuccess
      }),
    );
  };

  const onSuccess = () => {
    navigation.navigate(routes?.PhoneBankingRecords)
    GetUsersData()
  }

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
      <PhotoPicker />
      <VoterProfileForm onSaveData={setVoterInfo} />
      <Image source={logo} style={styles.logo} resizeMode="contain" />
    </SafeAreaView>
  );
};

export default UpdateVoterInfo;

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
