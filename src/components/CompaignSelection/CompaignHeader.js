import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MontserratSemiBold, hp, normalize} from '../../../utils/Constants';

const CompaignHeader = () => {
  return (
    <View style={{overflow: 'hidden', paddingBottom: 4}}>
      <View style={styles.container}>
        <Text style={styles.nammetxt}>My Account</Text>
      </View>
    </View>
  );
};

export default CompaignHeader;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',

    shadowColor: '#545454',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  nammetxt: {
    fontFamily: MontserratSemiBold,
    fontSize: normalize(16),
    color: '#545454',
    marginBottom: hp(1.5),
  },
});
