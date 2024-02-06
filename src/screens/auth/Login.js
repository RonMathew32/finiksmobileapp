import {
  ActivityIndicator,
  Image,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {loginback, logo, logowhite} from '../../theme/images';
import {hp, normalize, wp} from '../../theme/dimensions';
import {COLORS} from '../../theme/colors';
import InputText from '../../components/InputText';
import {getLogin} from '../../redux/actions/auth.actions';
import {ToastMessageLight} from '../../components/GlobalComponent/DisplayMessage';
import useReduxStore from '../../hooks/useReduxStore';
import {STRINGS} from '../../constants/strings';
import AppButton from '../../components/AppButton';

const Login = ({navigation}) => {
  const {dispatch, loading, setLoading, user, token} = useReduxStore();
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  // email: 'aidataronofficial@gmail.com',
  // password: 'donnn123$',

  const onChangeValue = (key, value) => {
    setData({...data, [key]: value});
  };

  const onLoginPress = async () => {
      dispatch(getLogin({payload: data, setLoading, ToastMessageLight}));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground source={loginback} style={styles.backimg}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
      </ImageBackground>
      <View style={styles.inputmainbox}>
        <InputText
          placeholder={STRINGS.TEXT_INPUT_PLACEHOLDER_EMAIL}
          value={data.email}
          multiline={false}
          onChangeText={val => onChangeValue('email', val)}
          containerStyle={styles.containerStyle}
          textinputstyle={styles.textinputstyle}
        />
        <InputText
          placeholder={STRINGS.TEXT_INPUT_PLACEHOLDER_PASSWORD}
          value={data.password}
          multiline={false}
          onChangeText={val => onChangeValue('password', val)}
          secureTextEntry={true}
          containerStyle={styles.containerStyle}
          textinputstyle={styles.textinputstyle}
        />
        <Text style={styles.forgottxt}>Forgot Password?</Text>

        <AppButton title="Sign In" loading={loading} onPress={onLoginPress} />

        <Text style={styles.donttxt}>
          Don’t have an account?{'  '}
          <Text
            onPress={() => navigation.navigate('Register')}
            style={styles.signuptxt}>
            Sign up
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  backimg: {
    width: '100%',
    height: hp(30),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(7),
  },
  logo: {
    width: wp(70),
    height: hp(20),
  },
  inputmainbox: {
    marginHorizontal: wp(5),
    marginTop: hp(3),
  },
  containerStyle: {
    height: hp(6.3),
    marginBottom: hp(2),
    flex: 0,
  },
  forgottxt: {
    fontSize: normalize(14),
    fontWeight: '400',
    color: 'white',
    alignSelf: 'flex-end',
    marginTop: -hp(1),
    marginRight: wp(2),
  },
  donttxt: {
    fontSize: normalize(14),
    fontWeight: '400',
    color: 'white',
    marginTop: hp(4),
    alignSelf: 'center',
  },
  signuptxt: {
    color: COLORS?.primary,
  },
});
