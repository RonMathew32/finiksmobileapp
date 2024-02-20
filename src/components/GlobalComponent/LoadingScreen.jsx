import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { COLORS } from '../../theme/colors';
import stylee from '../../constants/stylee';

const LoadingScreen = () => {
  return (
    <View style={[stylee.container, stylee.alignJC]}>
      <ActivityIndicator size="large" color={COLORS.primary} />
    </View>
  );
};

export default React.memo(LoadingScreen);
