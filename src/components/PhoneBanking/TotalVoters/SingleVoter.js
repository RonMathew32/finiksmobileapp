import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { hp, normalize, wp } from '../../../theme/dimensions';
import { Montserrat, MontserratSemiBold } from '../../../theme/fonts';
import { COLORS } from '../../../theme/colors';
import { getRandomColor } from '../../../utils/GetRandomColor';

const SingleVoter = ({ onPressVoter, item }) => {
  const sideBarStyle = React.useMemo(() => {
    return {
      width: 10,
      height: '100%',
      borderRadius: 20,
      backgroundColor: getRandomColor(),
    };
  }, []);

  return (
    <TouchableOpacity onPress={onPressVoter} style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.nametxt}>{item?.name}</Text>
        <Text style={styles.addresstxt}>{`${item?.address}:`}</Text>
        <Text style={styles.description}>
          {`${item?.sex}    |     ${item?.age}    |      ${item?.partyCode}`}
        </Text>
      </View>
      <View style={[sideBarStyle, styles.sideBar]} />
    </TouchableOpacity>
  );
};

export default React.memo(SingleVoter);

const styles = StyleSheet.create({
  sideBar: {},
  contentContainer: {
    paddingHorizontal: wp(7.5),
    paddingVertical: hp(1),
  },
  container: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lavendarWhiteDim,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  nametxt: {
    fontFamily: MontserratSemiBold,
    fontSize: normalize(17),
    lineHeight: normalize(17),
    color: COLORS.orangeReddish,
    marginTop: hp(1),
  },
  addresstxt: {
    fontFamily: Montserrat,
    fontSize: normalize(15),
    lineHeight: normalize(15),
    color: COLORS.darkGray,
    marginLeft: wp(7.5),
    marginTop: hp(1),
  },
  description: {
    fontFamily: Montserrat,
    fontSize: normalize(15),
    lineHeight: normalize(15),
    color: COLORS.darkGray,
    marginLeft: wp(7.5),
    marginTop: hp(1),
  },
});
