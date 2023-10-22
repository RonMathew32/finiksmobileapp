import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {chevronback, filterbtn} from '../../../../utils/images';
import {
  Montserrat,
  MontserratBold,
  hp,
  normalize,
  wp,
} from '../../../../utils/Constants';

const VotersHeader = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftview}>
        <Image
          source={chevronback}
          style={styles.chevback}
          resizeMode="contain"
        />
        <View style={styles.detailview}>
          <Text style={styles.nametxt}>Frodo at The Shire, Middle Earth</Text>
          <Text style={styles.numofvotertxt}>4 Voters found</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.rightview}>
        <Text style={styles.filtertxt}>Filter</Text>
        <View style={styles.filterview}>
          <Image
            source={filterbtn}
            style={styles.filterbtn}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

export default VotersHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(4),
    paddingBottom: hp(1),
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
  },
  leftview: {
    flexDirection: 'row',
  },
  chevback: {
    width: wp(2.7),
    height: wp(2.7),
    tintColor: '#D12E2F',
    marginRight: wp(1),
  },
  detailview: {},
  nametxt: {
    fontFamily: MontserratBold,
    fontSize: normalize(12),
    lineHeight: normalize(12),
    color: '#545454',
  },
  numofvotertxt: {
    fontFamily: Montserrat,
    fontSize: normalize(12),
    color: '#545454',
  },
  rightview: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filtertxt: {
    fontFamily: MontserratBold,
    fontSize: normalize(16),
    color: '#D12E2F',
    marginRight: wp(2),
  },
  filterview: {
    width: wp(6),
    height: wp(6),
    borderRadius: wp(6) / 2,
    backgroundColor: '#D12E2F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterbtn: {
    width: wp(4),
    height: wp(4),
    tintColor: 'white',
  },
});
