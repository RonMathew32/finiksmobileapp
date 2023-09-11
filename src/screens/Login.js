import {
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {loginback} from '../../utils/images';
import {hp, wp} from '../../utils/Constants';

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground source={loginback} style={styles.backimg}>
        <Image />
      </ImageBackground>
      <Text>Login</Text>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#130000',
  },
  backimg: {
    width: '100%',
    height: hp(30),
  },
});
