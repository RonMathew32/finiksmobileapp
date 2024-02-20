import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { hp, normalize, wp } from '../../theme/dimensions';
import { MontserratSemiBold } from '../../theme/fonts';
import { COLORS } from '../../theme/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import stylee from '../../constants/stylee';

const CampaignHeader = ({ enableBackButton = false, title = '', textStyle }) => {
  const navigation = useNavigation();

  const renderBackButton = () => {
    if (enableBackButton) {
      return (
        <Pressable onPress={() => navigation.goBack()}>
          <Icon
            name="arrow-back-ios"
            color={COLORS.primary}
            size={hp(3)}
            style={styles.icon}
          />
        </Pressable>
      );
    }
    return null;
  };

  return (
    <View style={[styles.container(enableBackButton), stylee.shadow]}>
      {renderBackButton()}
      <Text style={[styles.nammetxt, { marginLeft: enableBackButton ? -20 : 0 }, textStyle]}>
      {title? title : ''}
      </Text>
      {enableBackButton ? <Text></Text> : null}
    </View>
  );
};

export default CampaignHeader;

const styles = StyleSheet.create({
  icon: {
    padding: 5,
  },
  container: (enableBackButton) => ({
    alignItems: 'center',
    justifyContent: enableBackButton ? 'space-between' : 'center',
    flexDirection: enableBackButton ? 'row' : null,
    paddingHorizontal: enableBackButton ? wp(5) : 0,
    backgroundColor: COLORS.background,
    height: hp(6),
  }),
  nammetxt: {
    fontFamily: MontserratSemiBold,
    fontSize: normalize(16),
    color: COLORS.darkGray,
  },
});
