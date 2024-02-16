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
import {chevronleft, loginback, logo} from '../../theme/images';
import {Montserrat} from '../../theme/fonts';
import {normalize} from '../../theme/dimensions';
import {wp, hp} from '../../theme/dimensions';
import InputText from '../../components/GlobalComponent/InputText';
import {
  ToastMessageLight,
} from '../../utils/DisplayMessage';
import {COLORS} from '../../theme/colors';
import useReduxStore from '../../hooks/useReduxStore';
import {getNewOTP, getVerifyOTP} from '../../redux/actions/auth.actions';
import AppButton from '../../components/GlobalComponent/AppButton';
import {STRINGS} from '../../constants/strings';
import { getJoinCampaign, getJoinedCampaign, setJoinedCampaign } from '../../redux/actions/campaings.actions';
import routes from '../../constants/routes';

const OtpVerify = ({route, navigation}) => {
  const {dispatch, loading, setLoading, token, user} = useReduxStore();
  const [resendOTPLoader, setResendOTPLoader] = useState(false);
  const [resendOTP, setResendOTP] = useState(false);
  const [data, setData] = useState({
    code: '',
  });

  const payload = {
    otp: data.code,
    email: route.params?.data.email,
  };

  const onChangeValue = (key, value) => {
    setData({...data, [key]: value});
  };

  const navigationToLogin = () => {
    navigation.navigate(routes.Login);
  };

  const resendOTPRequest = () => {
    delete payload.otp;
    dispatch(
      getNewOTP({payload, setLoading: setResendOTPLoader, setResendOTP}),
    );
  };

  const onSuccessJoinCampaign = () => {
    const payload = {
      id: user?.id,
      role: user?.role
    }
    dispatch(
      getJoinedCampaign({
        payload,
        ToastMessageLight,
        setJoinedCampaign,
        token,
      }),
    );
    navigation.goBack();
  }
  const onVerifyPress = () => {
    if (route.params?.type == 'email') {
      dispatch(
        getVerifyOTP({
          payload,
          setLoading,
          setResendOTP,
          ToastMessageLight,
          navigationToLogin,
        }),
      );
    } else {
      if(data?.code){
        delete payload.otp
        payload.campaignCode = data.code;
        dispatch(getJoinCampaign({payload, ToastMessageLight, onSuccessJoinCampaign, setLoading}))
      } else {
        ToastMessageLight(STRINGS.TEXT_ENTER_INVITE_CODE)
      }
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
            <Text style={styles.headtxt}>{STRINGS.TEXT_ENTER_EMAIL_CODE}</Text>
          ) : (
            <Text style={styles.headtxt}>{STRINGS.TEXT_ENTER_UNIQUE_CODE}</Text>
          ))}
        <InputText
          placeholder={route.params?.type == 'email'? STRINGS.TEXT_SIX_DIGIT_CODE : STRINGS.TEXT_INPUT_PLACEHOLDER_INVITE_CODE}
          value={data.code}
          multiline={false}
          maxLength={6}
          onChangeText={val => onChangeValue('code', val)}
          containerStyle={styles.containerStyle}
          inputTextStyle={styles.textinputstyle}
          type={true}
        />
        {resendOTP ? (
          <AppButton
            title={STRINGS.TEXT_RESEND}
            loading={resendOTPLoader}
            onPress={resendOTPRequest}
            style={styles.resendOTP}
          />
        ) : null}

        <AppButton
          title={route.params?.type == 'email'? STRINGS.TEXT_VERIFY : STRINGS.TXT_JOIN_CAMPAIGN}
          loading={loading}
          onPress={onVerifyPress}
          style={styles.button}
        />
      </View>
    </SafeAreaView>
  );
};

export default OtpVerify;

const styles = StyleSheet.create({
  resendOTP: {
    height: hp(4),
    width: '25%',
    backgroundColor: COLORS.primary,
    alignSelf: 'flex-end',
    borderRadius: wp(3),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  backiconbox: {
    marginLeft: wp(5),
    position: 'absolute',
    top: hp(7),
  },
  backicon: {
    width: wp(6),
    height: wp(6),
    tintColor: COLORS.white,
  },
  backimg: {
    width: '100%',
    height: hp(30),
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: hp(7),
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
    color: COLORS.lavendarWhite,
    textAlign: 'center',
    marginBottom: hp(2),
  },
  containerStyle: {
    height: hp(6.3),
    marginBottom: hp(2),
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinputstyle: {
    flex: 0,
  },
});
