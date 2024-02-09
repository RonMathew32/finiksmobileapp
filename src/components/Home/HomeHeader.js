import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {wp} from '../../theme/dimensions';
import {COLORS} from '../../theme/colors';

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HJ For Congress</Text>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: wp(5),
    borderBottomWidth: 1,
    backgroundColor: COLORS.background
  },
  text: {
    color: COLORS.primary,
  },
});
