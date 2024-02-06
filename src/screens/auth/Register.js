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
import {logo} from '../../theme/images';
import {hp, normalize, wp} from '../../theme/dimensions';
import InputText from '../../components/InputText';
import {ToastMessageLight} from '../../components/GlobalComponent/DisplayMessage';
import {getRegsitered} from '../../redux/actions/auth.actions';
import useReduxStore from '../../hooks/useReduxStore';
import AppButton from '../../components/AppButton';
import { COLORS } from '../../theme/colors';
import routes from '../../constants/routes';
import KeyboardAvoidingViewWrapper from '../../components/KeyboardAvoidingViewWrapper';

const Register = ({navigation}) => {
  const {dispatch, loading, setLoading} = useReduxStore();
  const [form, setForm] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    address: '',
    phoneNumber: '',
  });

  // email: 'ramek85847@konican.com',
  // password: 'donnn123$',
  // firstName: 'vloun2',
  // lastName: 'acc',
  // address: 'this is address',
  // phoneNumber: '123456788',

  const onChangeValue = (key, value) => {
    setForm({...form, [key]: value});
  };

  const navigateToOTPVerification = () => {
    navigation.navigate(routes.OtpVerify, {type: 'email', data: form});
  };

  const checkFormValues = (obj) => {
    const missingKeys = [];
  
    const isObjectEmpty = Object.keys(obj).every((key) => {
      const value = obj[key];
      if (typeof value === 'string' && value.trim() === '') {
        missingKeys.push(key);
        return false;
      }
      return true;
    });
  
    return { isEmpty: isObjectEmpty, missingKeys };
  };

  const onSignUpPress = () => {
    const { isEmpty, missingKeys } = checkFormValues(form);
    if(isEmpty){
      dispatch(
        getRegsitered({
          payload: form,
          setLoading,
          ToastMessageLight,
          navigateToOTPVerification,
        }),
      );
    } else {
      ToastMessageLight(`Fields must not be empty`)
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingViewWrapper>
      <View style={styles.innerbox}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
        <View style={styles.inputsbox}>
          <InputText
            placeholder="First Name"
            value={form.firstName}
            multiline={false}
            onChangeText={val => onChangeValue('firstName', val)}
            containerStyle={styles.containerStyle}
            textInputStyle={styles.textInputStyle}
          />
          <InputText
            placeholder="Last Name"
            value={form.lastName}
            multiline={false}
            onChangeText={val => onChangeValue('lastName', val)}
            containerStyle={styles.containerStyle}
            textInputStyle={styles.textInputStyle}
          />
          <InputText
            placeholder="Email"
            value={form.email}
            multiline={false}
            onChangeText={val => onChangeValue('email', val)}
            containerStyle={styles.containerStyle}
            textInputStyle={styles.textInputStyle}
          />
          <InputText
            placeholder="Password"
            value={form.password}
            multiline={false}
            secureTextEntry={true}
            onChangeText={val => onChangeValue('password', val)}
            containerStyle={styles.containerStyle}
            textInputStyle={styles.textInputStyle}
          />
          <InputText
            placeholder="Address"
            value={form.address}
            multiline={false}
            onChangeText={val => onChangeValue('address', val)}
            containerStyle={styles.containerStyle}
            textInputStyle={styles.textInputStyle}
          />
          <InputText
            placeholder="Phone Number"
            value={form.phoneNumber}
            multiline={false}
            type={'phone-pad'}
            onChangeText={val => onChangeValue('phoneNumber', val)}
            containerStyle={styles.containerStyle}
            textInputStyle={styles.textInputStyle}
          />

          <AppButton
            title="Sign Up"
            loading={loading}
            onPress={onSignUpPress}
          />

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
      </KeyboardAvoidingViewWrapper>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  textInputStyle: {
    paddingTop: hp(0)
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
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
  containerStyle: {
    height: hp(6.5),
    width: '100%',
    marginBottom: hp(2),
    flex: 0,
  },
  donttxt: {
    fontSize: normalize(14),
    fontWeight: '400',
    color: 'white',
    marginTop: hp(4),
    alignSelf: 'center',
  },
  signuptxt: {
    color: COLORS.primary,
  },
});
