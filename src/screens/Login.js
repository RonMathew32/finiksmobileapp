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
import {loginback, logo, logowhite} from '../../utils/images';
import {hp, normalize, wp} from '../../utils/Constants';
import InputText from '../components/InputText';
import {useNavigation} from '@react-navigation/native';
import {LoginApi} from '../api/AuthApi';
import {useDispatch} from 'react-redux';
import {saveToken, saveUser} from '../redux/userReducer';
import {ToastMessageLight} from '../components/GlobalComponent/DisplayMessage';
import {setLoading} from '../redux/campaignReducer';
import useReduxStore from '../hooks/useReduxStore';

const Login = () => {
  const {loading, dispatch} = useReduxStore();
  const navigation = useNavigation();
  const [data, setData] = useState({
    email: 'aidataronofficial@gmail.com',
    password: 'donnn123$',
  });

  const onChangeValue = (key, value) => {
    setData({...data, [key]: value});
  };

  const onLoginPress = async () => {
    dispatch(setLoading(true));
    try {
      const res = await LoginApi(data);
      if (res.data.success) {
        dispatch(saveToken(res.data.access_token));
        dispatch(saveUser(res.data));
      } else {
        ToastMessageLight(res.data.message);
      }
    } catch (error) {
      ToastMessageLight('Check your network');
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground source={loginback} style={styles.backimg}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
      </ImageBackground>
      <View style={styles.inputmainbox}>
        <InputText
          placeholder="Email address"
          value={data.email}
          multiline={false}
          onChangeText={val => onChangeValue('email', val)}
          containerstyle={styles.containerstyle}
          textinputstyle={styles.textinputstyle}
        />
        <InputText
          placeholder="Password"
          value={data.password}
          multiline={false}
          onChangeText={val => onChangeValue('password', val)}
          secureTextEntry={true}
          containerstyle={styles.containerstyle}
          textinputstyle={styles.textinputstyle}
        />
        <Text style={styles.forgottxt}>Forgot Password?</Text>
        <TouchableOpacity
          disabled={loading}
          onPress={onLoginPress}
          style={styles.button}>
          {loading ? (
            <ActivityIndicator size="small" color={'white'} />
          ) : (
            <Text style={styles.buttontxt}>{'Sign In'}</Text>
          )}
        </TouchableOpacity>
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
    backgroundColor: '#130000',
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
  containerstyle: {
    height: hp(6.3),
    marginBottom: hp(2),
    flex: 0,
  },
  textinputstyle: {},
  forgottxt: {
    fontSize: normalize(14),
    fontWeight: '400',
    color: 'white',
    alignSelf: 'flex-end',
    marginTop: -hp(1),
    marginRight: wp(2),
  },
  button: {
    height: hp(6),
    width: '50%',
    backgroundColor: 'rgba(209, 46, 47, 1)',
    alignSelf: 'center',
    borderRadius: wp(3),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(3),
  },

  buttontxt: {
    fontSize: normalize(16),
    fontWeight: '700',
    color: 'white',
  },
  donttxt: {
    fontSize: normalize(14),
    fontWeight: '400',
    color: 'white',
    marginTop: hp(4),
    alignSelf: 'center',
  },
  signuptxt: {
    color: 'rgba(209, 46, 47, 1)',
  },
});
