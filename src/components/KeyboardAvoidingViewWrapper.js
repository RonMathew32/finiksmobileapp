import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native';

const KeyboardAvoidingViewWrapper = ({ children }) => {
  const behavior = Platform.OS === 'ios' ? 'padding' : 'height';
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

  return (
    <KeyboardAvoidingView
      behavior={behavior}
      style={styles.container}
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <ScrollView>
      <View style={styles.innerContainer}>{children}</View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
  },
});

export default KeyboardAvoidingViewWrapper;
