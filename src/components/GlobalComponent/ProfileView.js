import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useMemo} from 'react';
import {arrowright} from '../../theme/images';
import {hp, normalize, wp} from '../../theme/dimensions';
import {Montserrat, MontserratBold} from '../../theme/fonts';
import {useNavigation} from '@react-navigation/native';
import routes from '../../constants/routes';
import useReduxStore from '../../hooks/useReduxStore';
import {COLORS} from '../../theme/colors';

const ProfileView = () => {
  const navigation = useNavigation();
  const {user} = useReduxStore();
  const onPressToNavigate = () => navigation.navigate(routes?.Profile);
  const name = useMemo(
    () => (user?.firstName ? user?.firstName : ''),
    [user?.firstName],
  );

  return (
    <TouchableOpacity onPress={onPressToNavigate} style={styles.container}>
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
      <Text style={styles.name}>{name}</Text>
      <View style={styles.roundbox}>
        <Image source={arrowright} style={styles.arrow} resizeMode="contain" />
      </View>
    </TouchableOpacity>
  );
};

export default ProfileView;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: wp(2),
    width: '92%',
    alignSelf: 'center',
    height: hp(7),
    marginTop: hp(4),
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
  roundbox: {
    backgroundColor: COLORS.orange,
    height: wp(9),
    width: wp(9),
    borderRadius: wp(9) / 2,
    alignItems: 'center',
    justifyContent: 'center',
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
    borderRadius: 50
  },
  arrow: {
    height: wp(4),
    width: wp(4),
  },
});
