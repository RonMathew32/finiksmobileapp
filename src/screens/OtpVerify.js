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
import {chevronleft, loginback, logo, logowhite} from '../../utils/images';
import {Montserrat, hp, normalize, wp} from '../../utils/Constants';
import InputText from '../components/InputText';
import {useNavigation} from '@react-navigation/native';

const OtpVerify = () => {
  const navigation = useNavigation();
  const [data, setData] = useState({
    code: '',
  });

  const onChangeValue = (key, value) => {
    setData({...data, [key]: value});
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
        <Text style={styles.headtxt}>
          Enter your unique 6 digit campaign invite code below:
        </Text>
        <InputText
          placeholder="Invite Code"
          value={data.code}
          multiline={false}
          onChangeText={val => onChangeValue('code', val)}
          containerstyle={styles.containerstyle}
          textinputstyle={styles.textinputstyle}
          type={true}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate('CompaignSelection')}
          style={styles.button}>
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
