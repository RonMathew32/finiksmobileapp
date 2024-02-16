import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { COLORS } from '../../theme/colors';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={COLORS.primary} />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white
  },
});
