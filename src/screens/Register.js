import {
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

const Register = () => {
  const navigation = useNavigation();
  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    address: '',
    phone: '',
  });
  const onChangeValue = (key, value) => {
    setData({...data, [key]: value});
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerbox}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
        <View style={styles.inputsbox}>
          <InputText
            placeholder="First Name"
            value={data.firstname}
            multiline={false}
            onChangeText={val => onChangeValue('firstname', val)}
            containerstyle={styles.containerstyle}
            textinputstyle={styles.textinputstyle}
          />
          <InputText
            placeholder="Last Name"
            value={data.lastname}
            multiline={false}
            onChangeText={val => onChangeValue('lastname', val)}
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
            value={data.phone}
            multiline={false}
            onChangeText={val => onChangeValue('phone', val)}
            containerstyle={styles.containerstyle}
            textinputstyle={styles.textinputstyle}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('Authenticated')}
            style={styles.button}>
            <Text style={styles.buttontxt}>Sign Up</Text>
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
