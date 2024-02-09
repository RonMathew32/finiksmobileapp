import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { hp, normalize, wp } from '../../theme/dimensions';
import {
  Montserrat,
  MontserratBold,
  MontserratSemiBold,
} from '../../theme/fonts';
import { COLORS } from '../../theme/colors';

const ElectionCard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.dawn.com/primary/2023/06/6498adddf30da.jpg' }}
        style={styles.mainImage}
        resizeMode="cover"
      />
      <View style={styles.cardDescBox}>
        <Text style={styles.cardHeading}>Election: 4/25/2021</Text>
        <Text style={styles.cardDescText}>Early voting begins in 64 days</Text>
      </View>
      <View style={styles.bottomBox}>
        <View style={styles.button}>
          <Text style={styles.title}>Days Until Election</Text>
          <Text style={styles.subtitle}>142</Text>
        </View>
        <View style={[styles.button, styles.whiteButton]}>
          <Text style={styles.whiteTitle}>Voters Contacted</Text>
          <Text style={styles.whiteSubtitle}>214</Text>
        </View>
      </View>
    </View>
  );
};

export default ElectionCard;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(5),
    backgroundColor: COLORS.white,
    borderRadius: wp(4),
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  mainImage: {
    width: '100%',
    height: hp(23),
    borderTopLeftRadius: wp(4),
    borderTopRightRadius: wp(4),
  },
  cardDescBox: {
    marginTop: hp(2),
    marginBottom: hp(3),
    marginHorizontal: wp(5),
  },
  cardHeading: {
    fontFamily: MontserratSemiBold,
    fontSize: normalize(18),
    lineHeight: normalize(18),
    color: COLORS.darkGray,
  },
  cardDescText: {
    fontFamily: Montserrat,
    fontSize: normalize(14),
    lineHeight: normalize(14),
    color: COLORS.darkGray,
    marginTop: hp(1),
  },
  bottomBox: {
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
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 1,
  },
  whiteButton: {
    backgroundColor: COLORS.primary,
  },
  title: {
    fontFamily: MontserratSemiBold,
    fontSize: normalize(13),
    color: COLORS.primary,
  },
  subtitle: {
    fontFamily: MontserratBold,
    fontSize: normalize(31),
    color: COLORS.primary,
    marginTop: hp(1),
  },
  whiteTitle: {
    fontFamily: MontserratSemiBold,
    fontSize: normalize(13),
    color: COLORS.white,
  },
  whiteSubtitle: {
    fontFamily: MontserratBold,
    fontSize: normalize(31),
    color: COLORS.white,
    marginTop: hp(1),
  },
});
