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
      <View style={styles.bottombox}>
        <View style={styles.button}>
          <Text style={styles.title}>Days Until Election</Text>
          <Text style={styles.subtitle}>142</Text>
        </View>
        <View style={[styles.button, {backgroundColor: '#D12E2F'}]}>
          <Text style={{...styles.title, color: 'white'}}>
            Voters Contacted
          </Text>
          <Text style={{...styles.subtitle, color: 'white'}}>214</Text>
        </View>
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
  bottombox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: wp(3),
    marginBottom: hp(1.7),
    marginHorizontal: wp(3),
  },
  button: {
    flex: 1,
    paddingTop: hp(1.5),
    paddingBottom: hp(2),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(1.5),
    backgroundColor: 'white',

    //shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 1,
  },
  title: {
    fontFamily: MontserratSemiBold,
    fontSize: normalize(13),
    color: '#D12E2F',
  },
  subtitle: {
    fontFamily: MontserratBold,
    fontSize: normalize(31),
    color: '#D12E2F',
    marginTop: hp(1),
  },
});
