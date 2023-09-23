import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {MontserratSemiBold, hp, normalize, wp} from '../../../utils/Constants';
import {useNavigation} from '@react-navigation/native';

const CompaignCard = ({name, status}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Authenticated')}
      style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <View style={[styles.dot, status && {backgroundColor: '#49C661'}]}></View>
    </TouchableOpacity>
  );
};

export default CompaignCard;

const styles = StyleSheet.create({
  container: {
    width: '92%',
    height: hp(7),
    borderRadius: wp(2),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: hp(1.5),
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
  name: {
    fontFamily: MontserratSemiBold,
    fontSize: normalize(16),
    color: '#D12E2F',
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

    backgroundColor: 'rgba(0,0,0,0.23)',
  },
});
