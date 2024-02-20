import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useCallback } from 'react';
import {chevronleft} from '../../theme/images';
import {hp, normalize, wp} from '../../theme/dimensions';
import {MontserratMedium, MontserratSemiBold} from '../../theme/fonts';
import {useNavigation} from '@react-navigation/native';
import { COLORS } from '../../theme/colors';
import stylee from '../../constants/stylee';

const ProfileHeader = () => {
  const navigation = useNavigation();

  const handleGoBack = useCallback(() => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  },[navigation]);

  return (
    <View style={[styles.container, stylee.alignJSR, stylee.shadow]}>
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
    paddingHorizontal: wp(5),
    backgroundColor: COLORS.background,
    paddingBottom: hp(1.5),
  },
  iconContainer: {
    width: wp(12),
    alignItems: 'flex-start',
  },
  icon: {
    width: wp(6.5),
    height: wp(6.5),
    tintColor: COLORS.primary,
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
    color: COLORS.primary,
  },
});

export default React.memo(ProfileHeader);
