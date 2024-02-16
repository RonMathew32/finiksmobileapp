import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useMemo } from 'react';
import { hp, normalize, wp } from '../theme/dimensions';
import { Montserrat, MontserratSemiBold } from '../theme/fonts';
import { COLORS } from '../theme/colors';
import { getRandomColor } from '../utils/GetRandomColor';

const SingleVoter = ({ onPressVoter, item }) => {
  const sideBarStyle = useMemo(() => ({
    width: 10,
    height: '100%',
    borderRadius: 10,
    backgroundColor: getRandomColor(),
  }), []);

  const renderName = useMemo(() => item?.name && <Text style={styles.nametxt}>{item.name}</Text>, [item?.name]);
  const renderAddress = useMemo(() => item?.address && <Text style={styles.addresstxt}>{item.address}</Text>, [item?.address]);
  const renderDescription = useMemo(() => (
    (item?.sex || item?.age || item?.partyCode) &&
    <Text style={styles.description}>{`${item.sex ?? ''}    |     ${item.age ?? ''}    |      ${item.partyCode ?? ''}`}</Text>
  ), [item?.sex, item?.age, item?.partyCode]);

  return (
    <TouchableOpacity key={item?._id}  onPress={onPressVoter} style={styles.container}>
      <View style={styles.contentContainer}>
        {renderName}
        {renderAddress}
        {renderDescription}
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
    color: COLORS.primary,
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
