import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  hp,
  normalize,
  wp,
} from '../../../theme/dimensions';
import {  Montserrat,
  MontserratSemiBold } from '../../../theme/fonts';

const SingleVoter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.nametxt}>Bilbo Baggins</Text>
      <Text style={styles.addresstxt}>1 Bag End, The Shire, Middle Earth:</Text>
      <Text style={styles.description}>
        {`M     |     102    |      Independent`}
      </Text>
    </View>
  );
};

export default SingleVoter;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(7.5),
    paddingVertical: hp(1),
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
  },
  nametxt: {
    fontFamily: MontserratSemiBold,
    fontSize: normalize(17),
    lineHeight: normalize(17),
    color: '#D12E2F',
    marginTop: hp(1),
  },
  addresstxt: {
    fontFamily: Montserrat,
    fontSize: normalize(15),
    lineHeight: normalize(15),
    color: '#545454',
    marginLeft: wp(7.5),
    marginTop: hp(1),
  },
  description: {
    fontFamily: Montserrat,
    fontSize: normalize(15),
    lineHeight: normalize(15),
    color: '#545454',
    marginLeft: wp(7.5),
    marginTop: hp(1),
  },
});
