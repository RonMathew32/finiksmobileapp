import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {arrowright} from '../../../utils/images';
import {
  Montserrat,
  MontserratBold,
  hp,
  normalize,
  wp,
} from '../../../utils/Constants';
import {useNavigation} from '@react-navigation/native';

const ProfileView = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Profile')}
      style={styles.container}>
      <View style={styles.roundbox}>
        <Text style={styles.shortname}>AC</Text>
      </View>
      <Text style={styles.name}>Adam Christensen</Text>
      <View style={styles.roundbox}>
        <Image source={arrowright} style={styles.arrow} resizeMode="contain" />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileView;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: wp(2),
    width: '92%',
    alignSelf: 'center',
    height: hp(7),
    marginTop: hp(4),
    //shadow
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    // background color must be set
    backgroundColor: '#FFFFFF',
  },
  roundbox: {
    backgroundColor: '#FF914D',
    height: wp(9),
    width: wp(9),
    borderRadius: wp(9) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shortname: {
    fontFamily: MontserratBold,
    fontSize: normalize(13),
    color: 'white',
  },
  name: {
    fontFamily: Montserrat,
    fontSize: normalize(21),
    color: '#545454',
  },
  arrow: {
    height: wp(5),
    width: wp(5),
  },
});
