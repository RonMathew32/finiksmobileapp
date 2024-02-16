import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useMemo, useCallback} from 'react';
import {arrowright} from '../theme/images';
import {hp, normalize, wp} from '../theme/dimensions';
import {Montserrat, MontserratBold} from '../theme/fonts';
import {useNavigation} from '@react-navigation/native';
import routes from '../constants/routes';
import useReduxStore from '../hooks/useReduxStore';
import {COLORS} from '../theme/colors';

const ProfileView = ({
  canvass = false,
  textStyle,
  onPressToNavigate,
  title = '',
  index,
  num = 0,
}) => {
  const navigation = useNavigation();
  const {user} = useReduxStore();

  const name = useMemo(() => user?.firstName || '', [user?.firstName]);
  
  const onPressToProfile = useCallback(() => navigation.navigate(routes?.Profile), [navigation]);

  return (
    <TouchableOpacity
      key={index ? index : 1}
      onPress={onPressToNavigate?  onPressToNavigate : onPressToProfile}
      style={[styles.container, {marginTop: index == 1 ? hp(4) : hp(0)}]}>
      {canvass ? null : (
        <View style={styles.roundbox}>
          {user?.campaignLogo ? (
            <Image
              source={{uri: user?.campaignLogo}}
              style={styles.imageStyle}
              resizeMode="contain"
            />
          ) : (
            <Text style={styles.shortname}>AC</Text>
          )}
        </View>
      )}
      <Text style={[styles.name, textStyle]}>{title ? title : name}</Text>
      <View style={styles.roundbox(canvass)}>
        <Image source={arrowright} style={styles.arrow} resizeMode="contain" />
      </View>
      {canvass ? <Text style={styles.ratio}>{`0/${num}`}</Text> : null}
    </TouchableOpacity>
  );
};

export default ProfileView;

const styles = StyleSheet.create({
  ratio: {
    fontSize: normalize(12),
    color: COLORS.primary,
    width: wp(7),
    textAlign: 'center'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: wp(2),
    width: '92%',
    alignSelf: 'center',
    height: hp(7),
    marginBottom: hp(2),
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
    backgroundColor: COLORS.white,
    borderColor: COLORS.lavendarWhite,
    borderWidth: 0.3,
  },
  roundbox: canvass => {
    return {
      backgroundColor: COLORS.orange,
      height: canvass ? wp(7) : wp(9),
      width: canvass ? wp(7) : wp(9),
      borderRadius: wp(9) / 2,
      alignItems: 'center',
      justifyContent: 'center',
    };
  },
  shortname: {
    fontFamily: MontserratBold,
    fontSize: normalize(13),
    color: COLORS.white,
  },
  name: {
    fontFamily: Montserrat,
    fontSize: normalize(21),
    color: COLORS.darkGray,
  },
  imageStyle: {
    height: wp(9),
    width: wp(9),
    borderRadius: 50,
  },
  arrow: {
    height: wp(4),
    width: wp(4),
  },
});
