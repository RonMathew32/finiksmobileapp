import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ProfileHeader from '../../components/Profile/ProfileHeader';
import PhotoPicker from '../../components/Profile/PhotoPicker';
import ProfileForm from '../../components/Profile/ProfileForm';
import {logo} from '../../theme/images';
import {hp, wp} from '../../theme/dimensions';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProfileHeader />
      <PhotoPicker />
      <ProfileForm />
      <Image source={logo} style={styles.logo} resizeMode="contain" />
    </SafeAreaView>
  );
};

export default Profile;

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
