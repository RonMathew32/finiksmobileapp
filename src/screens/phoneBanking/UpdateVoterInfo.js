import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import VoterInfoHeader from '../../components/Profile/VoterInfoHeader';
import PhotoPicker from '../../components/Profile/PhotoPicker';
import VoterProfileForm from '../../components/Profile/VoterProfileForm';
import {hp, wp} from '../../theme/dimensions';
import {logo} from '../../theme/images';

const UpdateVoterInfo = () => {
  return (
    <SafeAreaView style={styles.container}>
      <VoterInfoHeader />
      <PhotoPicker />
      <VoterProfileForm />
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
