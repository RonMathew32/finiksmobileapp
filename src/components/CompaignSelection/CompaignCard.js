import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {hp, normalize, wp} from '../../theme/dimensions';
import {MontserratSemiBold} from '../../theme/fonts';
import { COLORS } from '../../theme/colors';

const CompaignCard = ({name, status, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <View style={[styles.dot, status && {backgroundColor: COLORS.green}]}>
        <View />
      </View>
    </TouchableOpacity>
  );
};

export default CompaignCard;

const styles = StyleSheet.create({
  container: {
    width: '92%',
    height: hp(7),
    borderRadius: wp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(7),
    alignItems: 'center',
    marginBottom: hp(1.5),
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
  name: {
    fontFamily: MontserratSemiBold,
    fontSize: normalize(16),
    color: '#D12E2F',
  },
  dot: {
    width: wp(3),
    height: wp(3),
    borderRadius: wp(3) / 2,

    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 5,

    backgroundColor: '#D9D9D9',
  },
});
