import React, { useMemo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { hp, normalize, wp } from '../../theme/dimensions';
import { MontserratSemiBold } from '../../theme/fonts';
import { COLORS } from '../../theme/colors';

const CampaignCard = ({ name, status, desc = '', onPress, style }) => {
  const nameStyle = useMemo(() => {
    return {
      fontFamily: MontserratSemiBold,
      fontSize: desc ? normalize(14) : normalize(16),
      color: COLORS.primary,
    };
  }, [desc]);

  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <View>
        <Text style={[styles.name, nameStyle]}>{name}</Text>
        {desc ? <Text style={styles.descTxt}>{desc}</Text> : null}
      </View>
      <View
        style={[
          styles.dot,
          status && {
            backgroundColor: COLORS.green,
          },
        ]}
      >
        <View />
      </View>
    </TouchableOpacity>
  );
};

export default CampaignCard;

const styles = StyleSheet.create({
  descTxt: {
    color: COLORS.darkGray,
    width: wp(65),
    fontSize: normalize(11),
  },
  container: {
    width: '92%',
    height: hp(8),
    borderRadius: wp(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(7),
    alignItems: 'center',
    marginBottom: hp(1.5),
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    backgroundColor: COLORS.white,
    borderWidth: 0.2,
    borderColor: COLORS.lavendarWhite,
  },
  name: {
    fontFamily: MontserratSemiBold,
    color: COLORS.primary,
  },
  dot: {
    width: wp(3),
    height: wp(3),
    borderRadius: wp(3) / 2,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 5,
    backgroundColor: COLORS.lavendarWhiteDim,
  },
});
