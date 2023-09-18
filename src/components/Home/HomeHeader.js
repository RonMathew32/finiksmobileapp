import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {wp} from '../../../utils/Constants';

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Text>HJ For Congress</Text>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: wp(5),
    borderBottomWidth: 1,
  },
});
