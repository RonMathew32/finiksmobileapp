import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { hp, normalize, wp } from '../../theme/dimensions';
import { MontserratSemiBold } from '../../theme/fonts';
import { COLORS } from '../../theme/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const CampaignHeader = ({ enableBackButton = false }) => {
  const navigation = useNavigation();

  const renderBackButton = () => {
    if (enableBackButton) {
      return (
        <Pressable onPress={() => navigation.goBack()}>
          <Icon
            name="arrow-back-ios"
            color={COLORS.orangeReddish}
            size={hp(3)}
            style={styles.icon}
          />
        </Pressable>
      );
    }
    return null;
  };

  return (
    <View style={styles.container(enableBackButton)}>
      {renderBackButton()}
      <Text style={[styles.nammetxt, { marginLeft: enableBackButton ? -20 : 0 }]}>
        My Account
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
    backgroundColor: COLORS.white,
    height: hp(6),
    shadowColor: COLORS.darkGray,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  }),
  nammetxt: {
    fontFamily: MontserratSemiBold,
    fontSize: normalize(16),
    color: COLORS.darkGray,
  },
});
