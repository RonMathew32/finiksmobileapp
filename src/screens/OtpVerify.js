import {
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
import {
  chevronleft,
  emailicon,
  loginback,
  logo,
  logowhite,
} from '../../utils/images';
import {Montserrat, hp, normalize, wp} from '../../utils/Constants';
import InputText from '../components/InputText';
import {useNavigation} from '@react-navigation/native';
import {JoinCampaign, VerifyOTP} from '../api/AuthApi';
import {
  ToastMessageDark,
  ToastMessageLight,
} from '../components/GlobalComponent/DisplayMessage';

const OtpVerify = ({route}) => {
  const navigation = useNavigation();
  const [data, setData] = useState({
    code: '',
  });

  const onChangeValue = (key, value) => {
    setData({...data, [key]: value});
  };

  const onVerifyPress = async () => {
    try {
      if (route.params?.type == 'email') {
        const res = await VerifyOTP({
          otp: data.code,
          email: route.params?.data.email,
        });
        if (res.data.success) {
          ToastMessageLight(res.data.message);
          navigation.navigate('Login');
        } else {
          ToastMessageLight(res.data.message);
        }
      } else {
        console.log(route.params?.data.email, data.code ? data.code : 'I02wL!');
        const res = await JoinCampaign({
          email: route.params?.data.email,
          campaignCode: data.code ? data.code : 'I02wL!',
        });
        if (res.data) {
          ToastMessageDark(res.data.message);
          navigation.goBack();
        }
      }
    } catch (error) {
      console.log(error.message);
      ToastMessageLight('Something went wrong kindly try again');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <TouchableOpacity
        onPress={() => navigation.canGoBack() && navigation.goBack()}
        style={styles.backiconbox}>
        <Image source={chevronleft} style={styles.backicon} />
      </TouchableOpacity>
      <ImageBackground source={loginback} style={styles.backimg}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
      </ImageBackground>
      <View style={styles.inputmainbox}>
        {route.params?.type &&
          (route.params?.type == 'email' ? (
            <Text style={styles.headtxt}>
              Enter your unique 6 digit code sent to your email:
            </Text>
          ) : (
            <Text style={styles.headtxt}>
              Enter unique 6 digit campaign invite code below:
            </Text>
          ))}
        <InputText
          placeholder="Invite Code"
          value={data.code}
          multiline={false}
          onChangeText={val => onChangeValue('code', val)}
          containerstyle={styles.containerstyle}
          textinputstyle={styles.textinputstyle}
          type={true}
        />
        <TouchableOpacity onPress={onVerifyPress} style={styles.button}>
          <Text style={styles.buttontxt}>Verify</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OtpVerify;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#130000',
  },
  backiconbox: {
    marginLeft: wp(5),
    position: 'absolute',
    top: hp(7),
  },
  backicon: {
    width: wp(6),
    height: wp(6),
    tintColor: 'white',
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
  headtxt: {
    fontFamily: Montserrat,
    fontSize: normalize(18),
    lineHeight: normalize(22),
    color: '#D2D2D2',
    textAlign: 'center',
    marginBottom: hp(2),
  },
  containerstyle: {
    height: hp(6.3),
    marginBottom: hp(2),
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinputstyle: {
    flex: 0,
  },

  button: {
    height: hp(6),
    width: '50%',
    backgroundColor: 'rgba(209, 46, 47, 1)',
    alignSelf: 'center',
    borderRadius: wp(3),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(18),
  },

  buttontxt: {
    fontSize: normalize(16),
    fontWeight: '700',
    color: 'white',
  },
});
