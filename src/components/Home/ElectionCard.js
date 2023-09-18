import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  Montserrat,
  MontserratBold,
  MontserratMedium,
  MontserratSemiBold,
  hp,
  normalize,
  wp,
} from '../../../utils/Constants';

const ElectionCard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: 'https://i.dawn.com/primary/2023/06/6498adddf30da.jpg'}}
        style={styles.mainimage}
        resizeMode="cover"
      />
      <View style={styles.carddescbox}>
        <Text style={styles.cardheading}>Election: 4/25/2021</Text>
        <Text style={styles.carddesctxt}>Early voting begins in 64 days</Text>
      </View>
    </View>
  );
};

export default ElectionCard;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(5),
    backgroundColor: 'white',
    borderRadius: wp(4),
    // overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  mainimage: {
    width: '100%',
    height: hp(23),
    borderTopLeftRadius: wp(4),
    borderTopRightRadius: wp(4),
  },
  carddescbox: {
    marginTop: hp(2),
    marginBottom: hp(3),
    marginHorizontal: wp(5),
  },
  cardheading: {
    fontFamily: MontserratSemiBold,
    fontSize: normalize(18),
    lineHeight: normalize(18),
    color: '#545454',
  },
  carddesctxt: {
    fontFamily: Montserrat,
    fontSize: normalize(14),
    lineHeight: normalize(14),
    color: '#545454',
    marginTop: hp(1),
  },
});
