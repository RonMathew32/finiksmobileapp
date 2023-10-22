import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {logo} from '../../utils/images';
import {hp, normalize, wp} from '../../utils/Constants';
import InputText from '../components/InputText';
import {useNavigation} from '@react-navigation/native';
import {SignUpApi} from '../api/AuthApi';
import {ToastMessageLight} from '../components/GlobalComponent/DisplayMessage';
import useReduxStore from '../hooks/useReduxStore';
import {setLoading} from '../redux/campaignReducer';

const Register = () => {
  const {loading, dispatch} = useReduxStore();
  const navigation = useNavigation();
  const [data, setData] = useState({
    email: 'volunteer255@gmail.com',
    password: 'donnn123$',
    firstName: 'vloun2',
    lastName: 'acc',
    address: 'this is address',
    phoneNumber: '123456788',
  });
  const onChangeValue = (key, value) => {
    setData({...data, [key]: value});
  };

  const onSignUpPress = async () => {
    dispatch(setLoading(true));
    try {
      const res = await SignUpApi(data);
      if (res.data.success) {
        ToastMessageLight(res.data.message);
        navigation.navigate('OtpVerify', {type: 'email', data: data});
      } else {
        ToastMessageLight(res.data.message);
      }
    } catch (error) {
      ToastMessageLight('Check Your Network');
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerbox}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
        <View style={styles.inputsbox}>
          <InputText
            placeholder="First Name"
            value={data.firstName}
            multiline={false}
            onChangeText={val => onChangeValue('firstName', val)}
            containerstyle={styles.containerstyle}
            textinputstyle={styles.textinputstyle}
          />
          <InputText
            placeholder="Last Name"
            value={data.lastName}
            multiline={false}
            onChangeText={val => onChangeValue('lastName', val)}
            containerstyle={styles.containerstyle}
            textinputstyle={styles.textinputstyle}
          />
          <InputText
            placeholder="Email"
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
            secureTextEntry={true}
            onChangeText={val => onChangeValue('password', val)}
            containerstyle={styles.containerstyle}
            textinputstyle={styles.textinputstyle}
          />
          <InputText
            placeholder="Address"
            value={data.address}
            multiline={false}
            onChangeText={val => onChangeValue('address', val)}
            containerstyle={styles.containerstyle}
            textinputstyle={styles.textinputstyle}
          />
          <InputText
            placeholder="Phone Number"
            value={data.phoneNumber}
            multiline={false}
            onChangeText={val => onChangeValue('phoneNumber', val)}
            containerstyle={styles.containerstyle}
            textinputstyle={styles.textinputstyle}
          />
          <TouchableOpacity
            disabled={loading}
            onPress={onSignUpPress}
            style={styles.button}>
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text style={styles.buttontxt}>Sign Up</Text>
            )}
          </TouchableOpacity>
          <Text style={styles.donttxt}>
            Already have an account?{'  '}
            <Text
              onPress={() => navigation.navigate('Login')}
              style={styles.signuptxt}>
              Sign In
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#130000',
  },
  innerbox: {
    flex: 1,
    marginHorizontal: wp(5),
    alignItems: 'center',
    marginTop: hp(5),
  },
  logo: {
    width: wp(40),
    height: hp(10),
  },
  inputsbox: {
    flex: 1,
    width: '100%',
    marginTop: hp(3),
  },
  containerstyle: {
    height: hp(6.3),
    width: '100%',
    marginBottom: hp(2),
    flex: 0,
  },
  textinputstyle: {},
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
