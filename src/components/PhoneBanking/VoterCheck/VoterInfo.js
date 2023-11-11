import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  MontserratBold,
  MontserratExtraBold,
  MontserratMedium,
  MontserratSemiBold,
  hp,
  normalize,
  wp,
} from '../../../../utils/Constants';

const VoterInfo = ({data}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Name</Text>
        <Text
          style={
            styles.subheading
          }>{`${data.FIRSTNAME} ${data.LASTNAME} `}</Text>
        <Text style={styles.heading}>Address</Text>
        <Text style={styles.subheading}>{data.ADDRESS}</Text>
        <Text style={styles.heading}>Demographics</Text>
        <Text style={styles.subheading}>
          {data.SEX == 'F' ? 'Female' : 'Male'}
          {'     '}| {data.AGE} Years Old{'     '}| Republican
        </Text>
      </View>
      <View style={styles.imageback}>
        <Text
          style={
            styles.nametxt
          }>{`${data.FIRSTNAME[0]}${data.LASTNAME[0]}`}</Text>
      </View>
    </View>
  );
};

export default VoterInfo;

const styles = StyleSheet.create({
  container: {
    marginTop: hp(2.5),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageback: {
    width: wp(18),
    height: wp(18),
    backgroundColor: '#FF914D',
    borderRadius: wp(18) / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nametxt: {
    fontFamily: MontserratExtraBold,
    fontSize: normalize(21),
    color: 'white',
  },
  heading: {
    fontFamily: MontserratSemiBold,
    fontSize: normalize(12),
    color: '#D12E2F',
    marginTop: hp(0.7),
  },
  subheading: {
    fontFamily: MontserratMedium,
    fontSize: normalize(12),
    color: '#545454',
    marginLeft: wp(4),
    marginTop: hp(0.7),
  },
});
