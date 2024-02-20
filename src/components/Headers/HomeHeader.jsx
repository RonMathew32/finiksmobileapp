import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {hp, normalize, wp} from '../../theme/dimensions';
import {MontserratSemiBold} from '../../theme/fonts';
import {
  addusericon,
  bellicon,
  calendericon,
  chevrondown,
  squareicon,
} from '../../theme/images';
import useReduxStore from '../../hooks/useReduxStore';
import { useNavigation } from '@react-navigation/native';
import routes from '../../constants/routes';
import { COLORS } from '../../theme/colors';
import stylee from '../../constants/stylee';

const HomeHeader = ({canvass, onPressAddVoter}) => {
  const {currentCampaign} = useReduxStore();
  const navigation = useNavigation();
  const onPressOnCampaign = () => navigation.navigate(routes?.CampaignSelection)

  return (
    <View style={{overflow: 'hidden', paddingBottom: 4}}>
      <View style={[styles.container, stylee.alignJSR, stylee.shadow]}>
        {canvass ? (
          <TouchableOpacity onPress={onPressAddVoter}>
          <Image
            source={addusericon}
            style={[styles.icon, {marginLeft: wp(3)}]}
            resizeMode="contain"
          />
          </TouchableOpacity>
        ) : (
          <View style={[styles.leftbox, stylee.alignR]}>
            <Image
              source={calendericon}
              style={styles.icon}
              resizeMode="contain"
            />
            <Image
              source={bellicon}
              style={styles.icon2}
              resizeMode="contain"
            />
          </View>
        )}

        <TouchableOpacity onPress={onPressOnCampaign} style={[styles.rightbox, stylee.alignR]}>
          <Image
            source={chevrondown}
            style={styles.chevron}
            resizeMode="contain"
          />
          <Text style={styles.nammetxt}>{currentCampaign?.campaignName}</Text>
          <Image
            source={squareicon}
            style={styles.square}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    paddingVertical: hp(1.6),
  },
  leftbox: {
    marginLeft: wp(5),
  },
  icon: {
    width: wp(7.5),
    height: wp(7.5),
    tintColor: COLORS.primary,
  },
  icon2: {
    width: wp(7.5),
    height: wp(7.5),
    tintColor: '#583689',
    marginLeft: wp(2),
  },
  rightbox: {
    marginRight: wp(5),
  },
  chevron: {
    width: wp(4),
    height: wp(4),
    tintColor: COLORS.primary,
    marginRight: wp(1.5),
  },
  nammetxt: {
    fontFamily: MontserratSemiBold,
    fontSize: normalize(16),
    color: COLORS.darkGray,
  },
  square: {
    width: wp(5),
    height: wp(5),
    tintColor: COLORS.primary,
    marginLeft: wp(2),
  },
});
