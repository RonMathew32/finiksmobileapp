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

const Header = ({canvass, onPressAddVoter}) => {
  const {currentCampaign} = useReduxStore();
  const navigation = useNavigation();
  const onPressOnCampaign = () => navigation.navigate(routes?.CompaignSelection)

  return (
    <View style={{overflow: 'hidden', paddingBottom: 4}}>
      <View style={styles.container}>
        {canvass ? (
          <TouchableOpacity onPress={onPressAddVoter}>
          <Image
            source={addusericon}
            style={[styles.icon, {marginLeft: wp(3)}]}
            resizeMode="contain"
          />
          </TouchableOpacity>
        ) : (
          <View style={styles.leftbox}>
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

        <TouchableOpacity onPress={onPressOnCampaign} style={styles.rightbox}>
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

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingVertical: hp(1.6),

    shadowColor: '#545454',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  leftbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: wp(5),
  },
  icon: {
    width: wp(7.5),
    height: wp(7.5),
    tintColor: '#D12E2F',
  },
  icon2: {
    width: wp(7.5),
    height: wp(7.5),
    tintColor: '#583689',
    marginLeft: wp(2),
  },
  rightbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: wp(5),
  },
  chevron: {
    width: wp(4),
    height: wp(4),
    tintColor: '#D12E2F',
    marginRight: wp(1.5),
  },
  nammetxt: {
    fontFamily: MontserratSemiBold,
    fontSize: normalize(16),
    color: '#545454',
  },
  square: {
    width: wp(5),
    height: wp(5),
    tintColor: '#D12E2F',
    marginLeft: wp(2),
  },
});
