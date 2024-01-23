import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {chevronleft, homeicon} from '../../../theme/images';
import {hp, normalize, wp} from '../../../theme/dimensions';
import {MontserratMedium, MontserratSemiBold} from '../../../theme/fonts';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../../theme/colors';

const VoterHeader = ({
  leftTitle,
  onPressLeft,
  title,
  rightTitle,
  onPressRight,
  paddingBottom,
}) => {
  const navigation = useNavigation();
  const onPressLeftHandle = () => {
    onPressLeft && leftTitle ? onPressLeft() : navigation.canGoBack() && navigation.goBack();
  };

  const onPressRightHandle = () => {
    onPressRight ? onPressRight() : console.log('Right');
  };
  return (
    <View style={{overflow: 'hidden', paddingBottom: paddingBottom ?? 4}}>
      <View style={styles.container}>
        <TouchableOpacity
          disabled={leftTitle || onPressLeft ? false : true}
          style={styles.savebox}
          onPress={onPressLeftHandle}>
          {leftTitle ? (
            <Text style={styles.leftTitle}>{leftTitle}</Text>
          ) : (
            <Image
              source={chevronleft}
              style={styles.icon('L')}
              resizeMode="contain"
            />
          )}
        </TouchableOpacity>

        <Text style={styles.nametxt}>{title}</Text>
        <TouchableOpacity
          disabled={rightTitle || onPressRight ? false : true}
          style={styles.savebox}
          onPress={onPressRightHandle}>
          {rightTitle ? (
            <Text style={styles.savetxt}>Save</Text>
          ) : (
            <Image
              source={homeicon}
              style={styles.icon('R')}
              resizeMode="contain"
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default VoterHeader;

const styles = StyleSheet.create({
  leftTitle: {
    fontFamily: MontserratMedium,
    fontSize: normalize(15),
    color: COLORS.orangeReddish,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(4),
    height: hp(6),
    backgroundColor: COLORS.white,
    shadowColor: COLORS.darkGray,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  icon: val => {
    return {
      width: wp(6),
      height: wp(6),
      tintColor: COLORS.orangeReddish,
      left: val == 'L' ? wp(0) : wp(6),
    };
  },
  nametxt: {
    fontFamily: MontserratSemiBold,
    fontSize: normalize(16),
    color: COLORS.darkGray,
    width: '70%',
    left: wp(3),
    textAlign: 'center',
  },
  savebox: {
    width: wp(12),
    alignItems: 'flex-start',
  },
  savetxt: {
    fontFamily: MontserratMedium,
    fontSize: normalize(15),
    color: COLORS.orangeReddish,
  },
});
