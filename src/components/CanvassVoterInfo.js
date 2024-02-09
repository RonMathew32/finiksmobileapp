import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../theme/colors';
import { hp, wp } from '../theme/dimensions';

const ShowInAlign = ({ title, value = '', index }) => {
  const alignItemsStyle = useMemo(() => getAlignItemsStyle(index), [index]);
  return (
    <View key={index} style={alignItemsStyle}>
      <Text numberOfLines={1} style={styles.title}>{title}</Text>
      <Text numberOfLines={1} style={styles.value}>{value}</Text>
    </View>
  );
};

const voterInfoData = [
  { title: 'Precinct', value: '#23 Milhoper Church' },
  { title: 'Register Absentee', value: 'Yes' },
  { title: 'Last Day VBM Signup', value: '3/22/21' },
  { title: 'Last Day To Register', value: '10/02/21' },
  { title: 'Early Voting Days', value: '3/2/21-3/14/21' },
];

const getAlignItemsStyle = index => {
  return {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: index === 1 ? hp(0) : hp(2),
    paddingBottom: hp(2),
    borderBottomColor: COLORS.lavendarWhite,
    borderBottomWidth: 0.2
  };
};

const CanvassVoterInfo = ({ value }) => {
  return (
    <View style={styles.container}>
      {voterInfoData?.map((info, index) => (
        <ShowInAlign
        key={index}
        index={index + 1}
        title={info.title}
        value={value ? value[info.title.toLowerCase()] : info.value}
      />

      ))}
    </View>
  );
};

export default CanvassVoterInfo;

const styles = StyleSheet.create({
  value: {
    color: COLORS.darkGray,
    width: wp(50),
    textAlign: 'right',
  },
  title: {
    color: COLORS.black
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingBottom: hp(2),
  }
});
