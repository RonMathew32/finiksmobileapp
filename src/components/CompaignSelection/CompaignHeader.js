import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {hp, normalize} from '../../theme/dimensions';
import {MontserratSemiBold} from '../../theme/fonts';
import { COLORS } from '../../theme/colors';

const CompaignHeader = () => {
  return (
    <View style={{overflow: 'hidden', paddingBottom: 4}}>
      <View style={styles.container}>
        <Text style={styles.nammetxt}>My Account</Text>
      </View>
    </View>
  );
};

export default CompaignHeader;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
    height: hp(6),
    shadowColor: COLORS.darkGray,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  nammetxt: {
    fontFamily: MontserratSemiBold,
    fontSize: normalize(16),
    color: COLORS.darkGray,
  },
});
