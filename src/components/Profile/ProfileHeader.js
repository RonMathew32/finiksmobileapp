import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useCallback } from 'react';
import {chevronleft} from '../../theme/images';
import {hp, normalize, wp} from '../../theme/dimensions';
import {MontserratMedium, MontserratSemiBold} from '../../theme/fonts';
import {useNavigation} from '@react-navigation/native';
import { COLORS } from '../../theme/colors';

const ProfileHeader = () => {
  const navigation = useNavigation();

  const handleGoBack = useCallback(() => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  },[navigation]);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconContainer} onPress={handleGoBack}>
        <Image source={chevronleft} style={styles.icon} resizeMode="contain" />
      </TouchableOpacity>

      <Text style={styles.nametxt}>Profile</Text>

      <TouchableOpacity style={styles.saveContainer} onPress={() => console.log('save')}>
        <Text style={styles.savetxt}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    backgroundColor: COLORS.white,
    shadowColor: COLORS.darkGray,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    paddingBottom: hp(1.5),
  },
  iconContainer: {
    width: wp(12),
    alignItems: 'flex-start',
  },
  icon: {
    width: wp(6.5),
    height: wp(6.5),
    tintColor: COLORS.orangeReddish,
  },
  nametxt: {
    fontFamily: MontserratSemiBold,
    fontSize: normalize(16),
    color: COLORS.darkGray,
  },
  saveContainer: {
    width: wp(12),
    alignItems: 'flex-end',
  },
  savetxt: {
    fontFamily: MontserratMedium,
    fontSize: normalize(15),
    color: COLORS.orangeReddish,
  },
});

export default React.memo(ProfileHeader);
